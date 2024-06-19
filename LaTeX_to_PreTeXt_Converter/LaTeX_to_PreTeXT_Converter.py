# -*- coding: utf-8 -*-
"""
Created on Mon Jun 10 16:54:21 2024

@author: Levi Heath, lheath2@unl.edu, UNL
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

def replace_syntax_in_file(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace LaTeX macros to match more common syntax
    modified_content = content.replace(r'\RR','\R').replace(r'\vec','\mathbf').replace(r'\dotp','\cdot')

    # Replace &,<,> with \amp,\lt,\gt
    modified_content = modified_content.replace(r'&','\amp').replace(r'<','\lt').replace(r'>','\gt')
    
    # Replace math environments
    modified_content = replace_dollar_signs(modified_content)
    modified_content = modified_content.replace(r'\begin{equation*}','<me>').replace(r'\end{equation*}','</me>')

    # Replace text wrappings such as \textit{} and \dfn{}
    text_wrappings = [["dfn","term"],["textit","em"]]
    modified_content = replace_multiple_wrappings(modified_content,text_wrappings)

    # Replace definition- and theorem-like environments
    modified_content = modified_content.replace(r'\begin{definition}', '<definition>\n    <statement>\n        <p>').replace(r'\end{definition}', '        </p>\n    </statement>\n</definition>')
    modified_content = modified_content.replace(r'\begin{theorem}', '<theorem>\n    <statement>\n        <p>').replace(r'\end{theorem}', '        </p>\n    </statement>\n</theorem>')
    modified_content = modified_content.replace(r'\begin{corollary}', '<corollary>\n    <statement>\n        <p>').replace(r'\end{corollary}', '        </p>\n    </statement>\n</corollary>')
    modified_content = modified_content.replace(r'\begin{lemma}', '<lemma>\n    <statement>\n        <p>').replace(r'\end{lemma}', '        </p>\n    </statement>\n</lemma>')
    modified_content = modified_content.replace(r'\begin{algorithm}', '<algorithm>\n    <statement>\n        <p>').replace(r'\end{algorithm}', '        </p>\n    </statement>\n</algorithm>')
    modified_content = modified_content.replace(r'\begin{proposition}', '<proposition>\n    <statement>\n        <p>').replace(r'\end{proposition}', '        </p>\n    </statement>\n</proposition>')
    modified_content = modified_content.replace(r'\begin{claim}', '<claim>\n    <statement>\n        <p>').replace(r'\end{claim}', '        </p>\n    </statement>\n</claim>')
    modified_content = modified_content.replace(r'\begin{fact}', '<fact>\n    <statement>\n        <p>').replace(r'\end{fact}', '        </p>\n    </statement>\n</fact>')
    modified_content = modified_content.replace(r'\begin{proof}', '<proof>\n    <p>').replace(r'\end{proof}', '    </p>\n</proof>')

    # Replace ordered and unordered lists
    modified_content = modified_content.replace(
        r'\begin{itemize}', '<ul>').replace(r'\end{itemize}', '</ul>').replace(
            r'\item','<li>\n    <p>\n    </p>\n</li>').replace(
                r'\begin{enumerate}', '<ol>').replace(r'\end{enumerate}', '</ol>')

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




