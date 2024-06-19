# TESTING for replacing text wrappings such as \texit{...} or \dfn{...}
import re

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


# Example usage
replacements = [["dfn","term"],["textit","em"]]
input_text = r"This is an example with \dfn{definition} and another \textit{term}."
output_text = replace_multiple_wrappings(input_text,replacements)
print(output_text)

""" # TESTING for replacing dollar signs
content = "Sample text. $$ f(x) = x^2 + 2x - 1 $$ Prose may be here. And even more prose here with inline math $x$. $$ T: \RR^n\to \RR^m $$ Then again more prose."

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

print(modified_content)
"""