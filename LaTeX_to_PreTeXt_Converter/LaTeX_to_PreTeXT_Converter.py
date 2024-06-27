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

def replace_syntax_in_file(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Replace LaTeX macros to match more common syntax
    modified_content = content.replace(r'\RR','\R').replace(r'\vec','\mathbf').replace(r'\dotp','\cdot')

    # Replace &,<,> with \amp,\lt,\gt
    modified_content = modified_content.replace(r'&','\\amp').replace(r'<','\lt').replace(r'>','\gt')
    
    # Replace math environments
    modified_content = replace_dollar_signs(modified_content)
    modified_content = backtrack_math_mode_for_tikz(modified_content)
    modified_content = modified_content.replace(r'\begin{equation*}','<me>').replace(r'\end{equation*}','</me>')
    modified_content = modified_content.replace(r'\begin{equation}','<men>').replace(r'\end{equation}','</men>')
    modified_content = modified_content.replace(r'\begin{align*}','<md>').replace(r'\end{align*}','</md>')
    modified_content = modified_content.replace(r'\begin{align}','<mdn>').replace(r'\end{align}','</mdn>')

    # Replace text wrappings such as \textit{}, \dfn{}, \title{}
    text_wrappings = [["dfn","term"],["textit","em"],["title","title"]]
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
            r'\item','<li>\n    <p>\n    </p>\n</li>').replace(
                r'\begin{enumerate}', '<ol>').replace(r'\end{enumerate}', '</ol>')

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