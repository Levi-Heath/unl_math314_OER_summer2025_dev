# -*- coding: utf-8 -*-
"""
Created on Mon Jun 10 16:54:21 2024

@author: Levi Heath, UNL
"""

import os

def replace_theorem_in_file(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Replace all instances of \begin{theorem}...\end{theorem} with <theorem>...</theorem>
    modified_content = content.replace(r'\begin{theorem}', '<theorem>\n    <statement>\n        <p>').replace(r'\end{theorem}', '        </p>\n    </statement>\n</theorem>')

    # Replace all instances of \begin{definition}...\end{definition} with <definition>...</definition>
    modified_content = modified_content.replace(r'\begin{definition}', '<definition>\n    <statement>\n        <p>').replace(r'\end{definition}', '        </p>\n    </statement>\n</definition>')

    # Replace all instances of \begin{definition}...\end{definition} with <definition>...</definition>
    #modified_content = modified_content.replace(r'\begin{definition}', '<definition>\n    <statement>\n        <p>').replace(r'\end{definition}', '        </p>\n    </statement>\n</definition>')

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
    replace_theorem_in_file(directory + file)



"""
def replace_dollar_signs(file_path):
    # Read the content of the file
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Split the content based on "$$"
    parts = content.split('$$')
    
    # Reconstruct the content with replacements
    modified_content = ""
    for i, part in enumerate(parts):
        if i % 2 == 0:
            modified_content += part
        else:
            if i % 4 == 1:  # Odd instance (1, 5, 9, ...)
                modified_content += '<me>' + part
            else:  # Even instance (3, 7, 11, ...)
                modified_content += '</me>' + part
    
    # Create the new file name with .ptx extension
    base_name = os.path.splitext(file_path)[0]
    new_file_path = base_name + '.ptx'
    
    # Write the modified content to the new file
    with open(new_file_path, 'w', encoding='utf-8') as file:
        file.write(modified_content)
    
    print(f"File saved as {new_file_path}")
"""