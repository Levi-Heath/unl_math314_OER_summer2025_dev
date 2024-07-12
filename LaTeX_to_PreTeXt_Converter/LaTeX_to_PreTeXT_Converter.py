# -*- coding: utf-8 -*-
"""
Created on Mon Jun 10 16:54:21 2024

@author: Levi Heath, lheath2@unl.edu, UNL

For educational use only.
"""

import os
import re

# Function that inputs a string, 
# replaces all $$...$$ with <me>...</me>, 
# and then replaces $...$ with <m>...</m>.
def replace_dollar_signs(content):
    # inputs
    ##   content: string

    # Split the content based on "$$"
    parts = content.split('$$')
    # Replace $$...$$ with <me>...</me>
    modified_content = ""
    for i, part in enumerate(parts):
        if i % 2 == 0:
            modified_content += part
        else:
            modified_content += '\n<me>\n    ' + part + '\n</me>\n'
            
    # Split the content based on "$"
    parts = modified_content.split('$')
    # Replace $...$ with <m>...</m>
    modified_content = ""
    for i, part in enumerate(parts):
        if i % 2 == 0:
            modified_content += part
        else:
            modified_content += '<m>' + part + '</m>'
    
    return modified_content

# Tikz must still remain in LaTeX syntax, 
# so this function "un-does" the replace_dollar_signs function within \begin{tikzpicture}...\end{tikzpicture}
def backtrack_math_mode_for_tikz(text):
# Define the pattern to match the text between \begin{tikzpicture} and \end{tikzpicture}
    tikz_pattern = re.compile(r'(\\begin\{tikzpicture\})(.*?)(\\end\{tikzpicture\})', re.DOTALL)
    
    # Define the replacement function for <m> and </m> within the matched tikzpicture block
    def replace_m_tags(match):
        begin_tikz = match.group(1)
        tikz_content = match.group(2)
        end_tikz = match.group(3)
        
        # Replace <m> with \( and </m> with \)
        modified_content = tikz_content.replace('<m>', r'\(').replace('</m>', r'\)')
        
        return f"{begin_tikz}{modified_content}{end_tikz}"
    
    # Use re.sub to apply the replacement function to each matched block
    modified_content = re.sub(tikz_pattern, replace_m_tags, text)
    
    return modified_content

# Function replaces text wrappings like \textbf{...} with <alert>...</alert>
# can replace anything of the form \LaTeX-wrap{...} with <pretext-tag>...</pretext-tag>
def replace_wrapping(text,LaTeX_Wrapping,PreTeXt_Wrapping):
    # input: text -- a string
    #        LaTeX_Wrapping -- a string (eg 'textbf')
    #        PreTeXt_Wrapping -- a string (eg 'alert' or any tag you like)
    # output: modified_text -- a string
    # Define the pattern to match \LaTeX_Wrapping{...}
    pattern = r'\\' + LaTeX_Wrapping + '\{(.*?)\}'
    # Define the replacement function
    def replacement(match):
        # Extract the text between the braces
        inner_text = match.group(1)
        return f'<{PreTeXt_Wrapping}>{inner_text}</{PreTeXt_Wrapping}>'
    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    # output
    return modified_text

def replace_it_and_bf(text):
    modified_text = text
    tags = [["it","em"],["bf","alert"]]
    for tag in tags:
        # Define the pattern to match the specific LaTeX italic format
        pattern = re.compile(r'\{\\' + tag[0] + r'(.*?)\}')
        # Define the replacement function
        def replacement(match):
            emphasized_text = match.group(1).strip()
            return f'<{tag[1]}>{emphasized_text}</{tag[1]}>'
        # Use re.sub to replace all matches of the pattern
        modified_text = re.sub(pattern, replacement, modified_text)
    return modified_text

# this function will be for replacing theorem-type environments
def replace_theorem(text,latex,pretext):
    # Define the pattern to match the theorem environment
    pattern = re.compile(r'\\begin\{' + latex + r'\}(?:\[(.*?)\])?\s*(\\label\{(.*?)\})?\s*(.*?)\s*\\end\{' + latex + r'\}', re.DOTALL)
    
    # Define the replacement function
    def replacement(match):
        title = match.group(1) or ''
        label = match.group(3) or ''
        statement = match.group(4).strip()
        
        if label:
            xml_id = re.sub(r'[^a-zA-Z0-9]', '-', label).replace('--', '-')
            theorem_tag = f'<{pretext} xml:id="{xml_id}">'
        else:
            theorem_tag = '<{pretext}>'
        
        title_tag = f'    <title>{title}</title>' if title else ''
        
        return (
            f'{theorem_tag}\n'
            f'{title_tag}\n'
            f'    <statement>\n'
            f'        <p>\n'
            f'            {statement}\n'
            f'        </p>\n'
            f'    </statement>\n'
            f'</{pretext}>'
        ).strip()

    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

# The following function replaces example-like environments (specifically 'example' and 'exploration')
def replace_example(text):
    # Define the pattern to match both example and exploration environments with optional label
    pattern = re.compile(
        r'\\begin\{(example|exploration)\}(?:\\label\{(.*?)\})?\s*(.*?)'
        r'(?:\\begin\{explanation\}\s*(.*?)\s*\\end\{explanation\})?\s*\\end\{\1\}',
        re.DOTALL
    )
    
    # Define the replacement function
    def replacement(match):
        env_type = match.group(1)
        label = match.group(2) or ''
        statement = match.group(3).strip()
        explanation = match.group(4) or ''
        
        # Create the XML ID by replacing spaces and special characters with hyphens
        xml_id = f' xml:id="{re.sub(r"[^a-zA-Z0-9]", "-", label).replace("--", "-")}"' if label else ''
        
        if explanation:
            return (
                f'<{env_type}{xml_id}>\n'
                f'    <statement>\n'
                f'        <p>\n'
                f'            {statement}\n'
                f'       </p>\n'
                f'    </statement>\n'
                f'    <answer>\n'
                f'        <p>\n'
                f'            {explanation.strip()}\n'
                f'       </p>\n'
                f'    </answer>\n'
                f'</{env_type}>'
            )
        else:
            return (
                f'<{env_type}{xml_id}>\n'
                f'    <p>\n'
                f'        {statement}\n'
                f'    </p>\n'
                f'</{env_type}>'
            )
    
    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

# function for replacing exercises and exercise groups
def replace_exercise(text):
    # Define the pattern to match the exercise environment with optional label and answer
    pattern = re.compile(
        r'\\begin\{problem\}(?:\\label\{(.*?)\})?\s*(.*?)(?:Answer:\s*(.*?))?\s*\\end\{problem\}',
        re.DOTALL
    )
    
    def format_id(label):
        return re.sub(r'[^a-zA-Z0-9]', '-', label).replace('--', '-').strip('-')
    
    # Define the replacement function
    def replacement(match):
        label = match.group(1) or ''
        statement = match.group(2).strip()
        answer = match.group(3) or ''
        
        xml_id = f' xml:id="{format_id(label)}"' if label else ''
        
        if answer:
            return (
                f'<exercise{xml_id}>\n'
                f'    <statement>\n'
                f'        <p>\n'
                f'            {statement}\n'
                f'        </p>\n'
                f'    </statement>\n'
                f'    <answer>\n'
                f'        <p>\n'
                f'            {answer.strip()}\n'
                f'        </p>\n'
                f'    </answer>\n'
                f'</exercise>'
            )
        else:
            return (
                f'<exercise{xml_id}>\n'
                f'    <statement>\n'
                f'        <p>\n'
                f'            {statement}\n'
                f'        </p>\n'
                f'    </statement>\n'
                f'</exercise>'
            )
    
    # Replace nested exercises with exercisegroup
    def replace_nested_exercises(text):
        nested_pattern = re.compile(
            r'\\begin\{problem\}\s*'
            r'((?:\\begin\{problem\}.*?\\end\{problem\}\s*)+?)'
            r'\\end\{problem\}',
            re.DOTALL
        )
        
        def nested_replacement(match):
            nested_exercises = match.group(1)
            replaced_exercises = re.sub(pattern, replacement, nested_exercises)
            return f'<exercisegroup>\n{replaced_exercises}\n</exercisegroup>'
        
        return re.sub(nested_pattern, nested_replacement, text)
    
    # First replace nested exercises with exercisegroup
    text = replace_nested_exercises(text)
    
    # Then replace remaining exercises
    text = re.sub(pattern, replacement, text)
    
    return text

# function for replacing \begin{multipleChoice}... and \begin{selectAll}...
def replace_choices(text):
    # Define the pattern to match the selectAll and multipleChoice environments
    pattern = re.compile(
        r'\\begin\{(selectAll|multipleChoice)\}\s*(.*?)\s*\\end\{\1\}',
        re.DOTALL
    )
    
    # Define the replacement function
    def replacement(match):
        env_type = match.group(1)
        choices_text = match.group(2).strip()
        
        # Define the pattern to match individual choices
        choice_pattern = re.compile(
            r'\\choice(\[correct\])?\{(.*?)\}',
            re.DOTALL
        )
        
        # Replace individual choices
        def choice_replacement(choice_match):
            correct = ' correct="yes"' if choice_match.group(1) else ''
            choice_text = choice_match.group(2).strip()
            return( 
                f'  <choice{correct}>\n'
                f'      <statement>\n'
                f'          <p> {choice_text} </p>\n'
                f'      </statement>\n'
                f'  </choice>'
            )
        
        replaced_choices = re.sub(choice_pattern, choice_replacement, choices_text)
        
        return f'<choices>\n{replaced_choices}\n</choices>'
    
    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

# replaces \ref{example:tag} with <xref ref="example-tag"/>
def replace_ref(text):
    # Define the pattern to match \ref{...}
    pattern = r'\\ref\{(.*?)\}'
    
    # Define the replacement function
    def replacement(match):
        # Extract the text between the braces
        inner_text = match.group(1)
        # Replace any ':' with '-'
        modified_inner_text = inner_text.replace(':', '-')
        return f'<xref ref="{modified_inner_text}"/>'
    
    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

# function to replace \answer{...} with ...
# this is specific to converting Ximera LaTeX documents
def replace_answer(text):
    # Define the pattern to match \ref{...}
    pattern = r'\\answer\{(.*?)\}'
    # Define the replacement function
    def replacement(match):
        # Extract the text between the braces
        inner_text = match.group(1)
        return inner_text
    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

def replace_geogebra(text):
    # Define the pattern to match the specific LaTeX block
    pattern = re.compile(
        r'\\begin\{onlineOnly\}\s*\\begin\{center\}\s*\\geogebra\{(.*?)\}\{(.*?)\}\{(.*?)\}\s*\\end\{center\}\s*\\end\{onlineOnly\}'
    )
    
    # Define the replacement function
    def replacement(match):
        geogebraID = match.group(1)
        ratio = match.group(2) + ":" + match.group(3)
        
        return (
            f'<figure>\n'
            f'  <caption>\n'
            f'    A larger version of this activity is available \n'
            f'    <url href="https://www.geogebra.org/calculator/{geogebraID}" visual="geogebra.org">here</url>.\n'
            f'  </caption>\n'
            f'  <interactive xml:id="geogebra-ADD-LINK_ID" platform="geogebra" width="100%" aspect="{ratio}">\n'
            f'    <slate xml:id="ADD-LINK_ID" surface="geogebra" material="{geogebraID}" aspect="{ratio}" />\n'
            f'  </interactive>\n'
            f'</figure>'
        )
    
    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text
    
def replace_subsection(text):
    # Define the pattern to match the specific LaTeX block
    pattern = re.compile(r'\\(section|subsection)\*\{(.*?)\}')
    
    # Define the replacement function
    def replacement(match):
        example_text = match.group(2)
        xml_id = "Subsection-" + example_text.replace(' ', '-')
        return (f'<subsection xml:id="{xml_id}">\n    <title>{example_text}</title>\n</subsection>')
    
    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

def replace_url(text):
    # Define the pattern to match the specific LaTeX block
    pattern = re.compile(r'\\href\{(.*?)\}\{(.*?)\}')

    # Define the replacement function
    def replacement(match):
        url = match.group(1)
        url_text = match.group(2)
        return(f'<url href="{url}">{url_text}</url>')

    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

def replace_youtube(text):
    # Define the pattern to match the specific LaTeX block
    pattern = re.compile(r'\\youtube\{(.*?)\}')

    # Define the replacement function
    def replacement(match):
        videoID = match.group(1)
        return(
            f'<video youtube="videoID" play-at="select"/>'
        )

    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

def replace_item(text):
    # Define the pattern to match the specific LaTeX block
    pattern = re.compile(r'\\item\s*(.*?)(?=\n\s*\\|\Z)', re.DOTALL)

    # Define the replacement function
    def replacement(match):
        item = match.group(1)
        if '\label' in item:
            search = re.search(r'\\label\{(.*?)\}', item)
            label = search.group(1).replace(":","-").replace(" ","-")
            item = item.replace(r'\\label\{{label}\}',"")
            mod_item = f'<li xml:id="{label}">\n  <p> {item} </p>\n</li>'
        else:
            mod_item = f'<li>\n      <p> {item} </p>\n</li>'
        return(mod_item)

    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
    return modified_text

# function to find \title and create XML preamble
def process_title(text):
    # Define the pattern to match \title{...}
    pattern = re.compile(r'\\title\{(.*?)\}')
    # Search for the title in the text
    match = pattern.search(text)
    if match:
        # Extract the title text
        title_text = match.group(1)
        
        # Create the XML ID by replacing spaces and colons with hyphens
        xml_id = "Section-" + re.sub(r'[^a-zA-Z0-9]', '-', title_text).replace('--', '-')
        
        # Define the XML header and section
        xml_header = (
            f'<?xml version="1.0" encoding="UTF-8"?>\n'
            f'\n'
            f'<section xml:id="{xml_id}" xmlns:xi="http://www.w3.org/2001/XInclude">\n'
            f'    <title>{title_text}</title>\n'
        )
        
        # Remove the \title{...} from the text
        modified_text = pattern.sub('', text)
        
        # Add the XML header to the beginning of the modified text
        modified_text = xml_header + modified_text
    else:
        xml_header = (
            f'<?xml version="1.0" encoding="UTF-8"?>\n'
            f'\n'
            f'<section xml:id="Section-TITLE" xmlns:xi="http://www.w3.org/2001/XInclude">\n'
            f'    <title>TITLE</title>\n'
        )
        modified_text = xml_header + text

    return modified_text

# function to open files, replace LaTeX syntax with PreTeXt syntax, and save files
def replace_syntax_in_file(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Replace LaTeX macros to match more common syntax
    modified_content = content.replace(r'\RR','\R').replace(r'\vec','\mathbf').replace(r'\dotp','\cdot')

    # Replace &,<,> with \amp,\lt,\gt
    modified_content = modified_content.replace(r'&','\\amp ').replace(r'<','\lt ').replace(r'>','\gt ')
    
    # Replace math environments
    modified_content = replace_dollar_signs(modified_content)
    modified_content = backtrack_math_mode_for_tikz(modified_content)
    modified_content = modified_content.replace(r'\begin{equation*}','<me>').replace(r'\end{equation*}','</me>')
    modified_content = modified_content.replace(r'\begin{equation}','<men>').replace(r'\end{equation}','</men>')
    modified_content = modified_content.replace(r'\begin{align*}','<md>').replace(r'\end{align*}','</md>')
    modified_content = modified_content.replace(r'\begin{align}','<mdn>').replace(r'\end{align}','</mdn>')

    # Replace text wrappings such as \textit{}, \dfn{}, \emph{}
    text_wrappings = [["dfn","term"],["textit","em"],["emph","em"]]
    for wraps in text_wrappings:
        modified_content = replace_wrapping(modified_content,wraps[0],wraps[1])
    modified_content = replace_ref(modified_content)
    modified_content = replace_it_and_bf(modified_content)

    # Replace definition- and theorem-like environments
    theorem_styles = [["theorem","theorem"],
                      ["definition","definition"],
                      ["corollary","corollary"],
                      ["lemma","lemma"],
                      ["algorithm","algorithm"],
                      ["proposition","proposition"],
                      ["claim","claim"],
                      ["fact","fact"],
                      ["formula","identity"]] 
    for tag in theorem_styles:
        modified_content = replace_theorem(modified_content,tag[0],tag[1])
    #modified_content = modified_content.replace(r'\begin{definition}', '<definition>\n    <statement>\n        <p>').replace(r'\end{definition}', '        </p>\n    </statement>\n</definition>')
    #modified_content = modified_content.replace(r'\begin{theorem}', '<theorem>\n    <statement>\n        <p>').replace(r'\end{theorem}', '        </p>\n    </statement>\n</theorem>')
    #modified_content = modified_content.replace(r'\begin{corollary}', '<corollary>\n    <statement>\n        <p>').replace(r'\end{corollary}', '        </p>\n    </statement>\n</corollary>')
    #modified_content = modified_content.replace(r'\begin{lemma}', '<lemma>\n    <statement>\n        <p>').replace(r'\end{lemma}', '        </p>\n    </statement>\n</lemma>')
    #modified_content = modified_content.replace(r'\begin{algorithm}', '<algorithm>\n    <statement>\n        <p>').replace(r'\end{algorithm}', '        </p>\n    </statement>\n</algorithm>')
    #modified_content = modified_content.replace(r'\begin{proposition}', '<proposition>\n    <statement>\n        <p>').replace(r'\end{proposition}', '        </p>\n    </statement>\n</proposition>')
    #modified_content = modified_content.replace(r'\begin{claim}', '<claim>\n    <statement>\n        <p>').replace(r'\end{claim}', '        </p>\n    </statement>\n</claim>')
    #modified_content = modified_content.replace(r'\begin{fact}', '<fact>\n    <statement>\n        <p>').replace(r'\end{fact}', '        </p>\n    </statement>\n</fact>')
    #modified_content = modified_content.replace(r'\begin{formula}', '<identity>\n    <statement>\n        <p>').replace(r'\end{formula}', '        </p>\n    </statement>\n</identity>')

    # Replace proof environments
    modified_content = modified_content.replace(r'\begin{proof}', '<proof>\n    <p>').replace(r'\end{proof}', '    </p>\n</proof>')

    # Replace example environments
    modified_content = replace_example(modified_content)
    #modified_content = modified_content.replace(r'\begin{example}', '<example>\n    <p>').replace(r'\end{example}', '    </p>\n</example>')
    #modified_content = modified_content.replace(r'\begin{exploration}', '<exploration>\n    <p>').replace(r'\end{exploration}', '    </p>\n</exploration>')

    # Replace ordered and unordered lists
    modified_content = replace_item(modified_content)
    modified_content = modified_content.replace(
        r'\begin{itemize}', '<ul>').replace(r'\end{itemize}', '</ul>').replace(
                r'\begin{enumerate}', '<ol>').replace(r'\end{enumerate}', '</ol>')

    # Add <image><latex-image>...</latex-image></image> wrap around tikz figures
    modified_content = modified_content.replace(
        r'\begin{tikzpicture}','<image width="100%">\n   <shortdescription></shortdescription>\n    <latex-image>\n      \\begin{tikzpicture}').replace(
            r'\end{tikzpicture}','    \end{tikzpicture}\n    </latex-image>\n</image>')

    # Replace exercise environments
    modified_content = replace_exercise(modified_content)
    modified_content = replace_choices(modified_content)
    #modified_content = modified_content.replace(
    #    r'\subsection*{Practice Problems}','<subsection xml:id="Subsection-Practice-Problems">\n    <title>Practice Problems</title>\n    <exercises xml:id="Practice-Problems">\n  </exercises>\n</subsection>')
    #modified_content = modified_content.replace(
    #    r'\begin{problem}','<exercise xml:id="prob-">\n    <statement>\n       <p>\n       </p>\n  </statement>\n').replace(
    #        r'\end{problem}', '    <answer>\n      <p>\n       </p>\n    </answer>\n</exercise>')

    # Replace \answer{...} with ...
    modified_content = replace_answer(modified_content)

    # Replace Geogebra inclusions
    modified_content = replace_geogebra(modified_content)

    # Replace \subsection*{}
    modified_content = replace_subsection(modified_content)

    # Replace \href{}{}
    modified_content = replace_url(modified_content)

    # Replace \youtube{}
    modified_content = replace_youtube(modified_content)

    # Delete common LaTeX preamble elements and \end{document}
    tags_to_delete = ["documentclass","input","license"]
    text_to_delete = ["\\begin{document}","\end{document}","\\begin{abstract}","\end{abstract}","\maketitle"] 
    for tag in tags_to_delete:
        # Define the pattern to match \license{...}
        pattern = re.compile(r'\\' + tag + '\{.*?\}')
        # Use re.sub to replace all matches with an empty string
        modified_content = re.sub(pattern, '', modified_content)
    for text in text_to_delete:
        modified_content = modified_content.replace(text,"") 

    # Add preamble and last_line
    modified_content = process_title(modified_content)
    last_line = '\n</section>'
    modified_content = modified_content + last_line

    # Create the new file name with .ptx extension
    base_name = os.path.splitext(file_path)[0]
    new_file_path = base_name + '.ptx'
    new_file_path = new_file_path.replace(r'input','output')
    print(new_file_path)

    # Write the modified content to the new file
    with open(new_file_path, 'w', encoding='utf-8') as file:
        file.write(modified_content)
    
    print(f"File saved as {new_file_path}")



directory = "LaTeX_to_PreTeXt_Converter/input/"
LaTeX_Files = os.listdir(directory)
for file in LaTeX_Files:
    replace_syntax_in_file(directory + file)