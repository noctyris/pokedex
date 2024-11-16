from rembg import remove 
from PIL import Image 
from sys import argv


for i in argv[1:]:
  input_path =  i
  output_path = "".join(i.split(".")[:-1])+".png"
  print(input_path, output_path)

  # input = Image.open(input_path) 
  # output = remove(input) 
  # output.save(output_path) 
