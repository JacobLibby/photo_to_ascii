# photo_to_ascii
A project to translate an image into ASCII characters


# Current Status

This project has working bones, but is currently developed using p5's online Javascript interface. I am currently in the process of implementing it into a more command-line-friendly version.


# Running the repo (using Local Server):

1) clone or fork the repo onto your local computer
2) Install p5 JS library (https://github.com/processing/p5.js/releases/download/v1.9.1/p5.zip)
3) Install and/or set up local server (https://github.com/processing/p5.js/wiki/Local-server)
4) Run the repo on the local server and see the image set as `pic_path` as ASCII characters
5) Move new images to the folder and update `pic_path` to play around with the code. Also adjust the ASCII characters used and the scaling and all other variables in the .css and .js files to really see how the code works! (Sizing down photos to <200x200 px worked best for me)



# Vision for end-product

A UI that enables a use to upload an image (possibly adding resizing/cropping features), supplying the user with sliders and selections of ascii characters to use, text size and spacing, white text/black background or vice versa, etc.
This would most likely be best implemented with a webUI and I am leaning towards using React for this functionality.


# Recognitions and Resources
* https://www.youtube.com/watch?v=55iwMYv8tGI&ab_channel=TheCodingTrain
