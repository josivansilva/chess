# ChecomponentsReact# ChecomponentsReact App

# Overview
Chess is a two-player strategy board game played on a chessboard, a checkered game board
with 64 squares/cells arranged in an 8x8 grid. The Chess React App works using the Knight
piece. A knight can move either 2 squares horizontally and 1 square vertically OR 2 squares
vertically and 1 square horizontally.

# Organization & Architecture
The Chess React App solution is organized into two applications. The first, called "chessApi", which is a Node.js back-end application that provides a RESTful API service for calculating Knight positions on the board. The second application, called "chessfrt", is a React front-end application that provides the board interface, containing the cells that will be used to emulate the knight's movements.

# chessApi (back-end) File Structure
The chessApi file structure is organized as follows:

/chessApi<br/>
&nbsp;&nbsp;&nbsp;chess-api.js<br/>
&nbsp;&nbsp;&nbsp;package-lock.json<br/>
&nbsp;&nbsp;&nbsp;package.json<br/>
  
# chessfrt (front-end) File Structure
The chessfrt file structure is organized as follows:

/chessfrt<br/>
&nbsp;&nbsp;&nbsp;src<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;components<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Board.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Square.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.css<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.test.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.css<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logo.svg<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;serviceWorker.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setupTests.js<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;package-lock.json<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;package.json<br/>
&nbsp;&nbsp;&nbsp;public<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;favicon.ico<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.html<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logo192.png<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;logo512.png<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;manifest.json<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;robots.txt<br/>




