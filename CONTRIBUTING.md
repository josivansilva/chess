# Chess React App

# Overview
This documentation describes the environment details used to work with the Chess React App solution.

# Node.js
1. Node.js installation varies from operating system to operating system, so here Ubuntu Linux will be considered as operating system
2. sudo apt-get update
3. sudo apt-get install nodejs
4. Also install npm, which is Node.js package manager
5. sudo apt-get install npm
6. This will allow you to easily install modules and packages for use with Node.js
7. Type node -v to check your node version
8. Expected Node version: v12.14.0

# Express.js
1. Express.js it is a great Node.js framework that helps us build our web applications
2. mkdir myapp
3. cd myapp
4. npm init
5. Enter app.js, or whatever name you want for the main file. If you want it to be index.js, 
   press RETURN to accept the default file name suggested
6. entry point: (index.js)
7. Now install Express in the app directory and save it to the dependency list. For example:
8. npm install express --save

# Github
1. It's necessary to download the Chess React App from Github
2. git clone https://github.com/josivansilva/chess.git
3. The back-end app will be located on the folder chessApi
4. The front-end app will be located on the folder chessfrt

# Start the chessApi app
1. Find the file "chess-api.js"
2. Type node chess-api.js
3. The app will be started on the localhost, port 3000

# Start the chessfrt app
1. Go to the folder "chessfrt"
2. Type npm start
3. You should respond "Y" if you wish change the app port to 3001
4. Access the app on the address http://localhost:3001

# Visual Studio Code (Ubuntu Linux)
1. Visual Studio Code is a free code editor from Microsoft. It has Intellisense and
Code Debugging built in. In addition, it is highly extensible
2. Next, open your browser and go to the Visual Studio Code download page
3. https://code.visualstudio.com/Download
4. Click on the .deb link for Linux 64 Bit
5. If prompted, click on Save File
6. After the file downloads, open your terminal and go to the Downloads folder
7. cd ~/Downloads
8. Next, run this command to install Visual Studio Code
9. sudo dpkg -i code_1.26.0-1534177765_amd64.deb
10. Close the terminal. Visual Studio Code is now installed

# Postman (Ubuntu Linux)

1. Postman is the complete toolchain for API developers, used by more than 3 million 
developers and 30000 companies worldwide. Postman makes working with APIs faster and
easier by supporting developers at every stage of their workflow, and is available 
for Mac OS X, Windows, Linux and Chrome users.
2. Ubuntu Software utility contains the snap packages from snappy store. Simply search 
for and click install Postman in Ubuntu Software
3. Or open terminal (Ctrl+Alt+T) and run command to install the Postman snap package:
4. snap install postman
5. Once the snap package is installed, launch the Postman app from software launcher

