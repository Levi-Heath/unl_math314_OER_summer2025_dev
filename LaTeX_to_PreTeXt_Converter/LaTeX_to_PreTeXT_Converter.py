# -*- coding: utf-8 -*-
"""
Created on Mon Jun 10 16:54:21 2024

@author: Levi Heath, lheath2@unl.edu, UNL

For educational use only.
"""

import os
import re

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

def replace_wrapping(text,LaTeX_Wrapping,PreTeXt_Wrapping):
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

def replace_multiple_wrappings(text,text_array):
    # format of text_array should be a vector of tuples with first element of tuple the LaTeX_Wrapping and the second element must be the PreTeXt_Wrapping
    # initialize variable
    modified_text = text
    # loop text_array through replace_wrapping function
    for text_tuple in text_array:
        modified_text = replace_wrapping(modified_text,text_tuple[0],text_tuple[1])
    # output
    return modified_text

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
    pattern = re.compile(r'\\subsection\*\{(.*?)\}')
    
    # Define the replacement function
    def replacement(match):
        example_text = match.group(1)
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
    pattern = re.compile(r'\\item(.*?)')

    # Define the replacement function
    def replacement(match):
        item = match.group(1)
        if '\label' in item:
            search = re.search(r'\\label\{(.*?)\}', item)
            label = search.group(1).replace(":","-").replace(" ","-")
            return(
                f'<li xml:id="{label}">\n'
                f'  <p> {item} </p>'
                f'</li>'
            )
        else:
            return(
                f'<li>\n'
                f'  <p> {item} </p>'
                f'</li>'
            )

    # Use re.sub to replace all matches of the pattern
    modified_text = re.sub(pattern, replacement, text)
    
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

    # Replace text wrappings such as \textit{}, \dfn{}, \title{}
    text_wrappings = [["dfn","term"],["textit","em"],["emph","em"],["title","title"]]
    modified_content = replace_multiple_wrappings(modified_content,text_wrappings)
    modified_content = replace_ref(modified_content)

    # Replace definition- and theorem-like environments
    # would have probably been better form to define a function here and loop over required changes
    modified_content = modified_content.replace(r'\begin{definition}', '<definition>\n    <statement>\n        <p>').replace(r'\end{definition}', '        </p>\n    </statement>\n</definition>')
    modified_content = modified_content.replace(r'\begin{theorem}', '<theorem>\n    <statement>\n        <p>').replace(r'\end{theorem}', '        </p>\n    </statement>\n</theorem>')
    modified_content = modified_content.replace(r'\begin{corollary}', '<corollary>\n    <statement>\n        <p>').replace(r'\end{corollary}', '        </p>\n    </statement>\n</corollary>')
    modified_content = modified_content.replace(r'\begin{lemma}', '<lemma>\n    <statement>\n        <p>').replace(r'\end{lemma}', '        </p>\n    </statement>\n</lemma>')
    modified_content = modified_content.replace(r'\begin{algorithm}', '<algorithm>\n    <statement>\n        <p>').replace(r'\end{algorithm}', '        </p>\n    </statement>\n</algorithm>')
    modified_content = modified_content.replace(r'\begin{proposition}', '<proposition>\n    <statement>\n        <p>').replace(r'\end{proposition}', '        </p>\n    </statement>\n</proposition>')
    modified_content = modified_content.replace(r'\begin{claim}', '<claim>\n    <statement>\n        <p>').replace(r'\end{claim}', '        </p>\n    </statement>\n</claim>')
    modified_content = modified_content.replace(r'\begin{fact}', '<fact>\n    <statement>\n        <p>').replace(r'\end{fact}', '        </p>\n    </statement>\n</fact>')
    modified_content = modified_content.replace(r'\begin{formula}', '<identity>\n    <statement>\n        <p>').replace(r'\end{formula}', '        </p>\n    </statement>\n</identity>')

    # Replace proof environments
    modified_content = modified_content.replace(r'\begin{proof}', '<proof>\n    <p>').replace(r'\end{proof}', '    </p>\n</proof>')

    # Replace example environments
    modified_content = modified_content.replace(r'\begin{example}', '<example>\n    <p>').replace(r'\end{example}', '    </p>\n</example>')
    modified_content = modified_content.replace(r'\begin{exploration}', '<exploration>\n    <p>').replace(r'\end{exploration}', '    </p>\n</exploration>')

    # Replace ordered and unordered lists
    modified_content = modified_content.replace(
        r'\begin{itemize}', '<ul>').replace(r'\end{itemize}', '</ul>').replace(
                r'\begin{enumerate}', '<ol>').replace(r'\end{enumerate}', '</ol>')
    modified_content = replace_item(modified_content)

    # Add <image><latex-image>...</latex-image></image> wrap around tikz figures
    modified_content = modified_content.replace(
        r'\begin{tikzpicture}','<image width="100%">\n   <shortdescription></shortdescription>\n    <latex-image>\n      \\begin{tikzpicture}').replace(
            r'\end{tikzpicture}','    \end{tikzpicture}\n    </latex-image>\n</image>')

    # Replace Practice Problem environments
    modified_content = modified_content.replace(
        r'\subsection*{Practice Problems}','<subsection xml:id="Subsection-Practice-Problems">\n    <title>Practice Problems</title>\n    <exercises xml:id="Practice-Problems">\n  </exercises>\n</subsection>')
    modified_content = modified_content.replace(
        r'\begin{problem}','<exercise xml:id="prob-">\n    <statement>\n       <p>\n       </p>\n  </statement>\n').replace(
            r'\end{problem}', '    <answer>\n      <p>\n       </p>\n    </answer>\n</exercise>')

    # Replace Geogebra inclusions
    modified_content = replace_geogebra(modified_content)

    # Replace \subsection*{}
    modified_content = replace_subsection(modified_content)

    # Replace \href{}{}
    modified_content = replace_url(modified_content)

    # Replace \youtube{}
    modified_content = replace_youtube(modified_content)

    # Add preamble and last_line
    preamble = '<?xml version="1.0" encoding="UTF-8"?>\n\n<section xml:id="Section-TITLE" xmlns:xi="http://www.w3.org/2001/XInclude">\n'
    last_line = '\n</section>'
    modified_content = preamble + modified_content + last_line

    # Create the new file name with .ptx extension
    base_name = os.path.splitext(file_path)[0]
    new_file_path = base_name + '.ptx'
    new_file_path = new_file_path.replace(r'input','output')
    print(new_file_path)

    # Write the modified content to the new file
    with open(new_file_path, 'w', encoding='utf-8') as file:
        file.write(modified_content)
    
    print(f"File saved as {new_file_path}")



directory = "input/"
LaTeX_Files = os.listdir(directory)
for file in LaTeX_Files:
    replace_syntax_in_file(directory + file)