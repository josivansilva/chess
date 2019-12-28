# Chess React App

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
&nbsp;&nbsp;&nbsp;chess-api.js *<br/>
&nbsp;&nbsp;&nbsp;package-lock.json<br/>
&nbsp;&nbsp;&nbsp;package.json<br/>
  
# chessfrt (front-end) File Structure
The chessfrt file structure is organized as follows:

/chessfrt<br/>
&nbsp;&nbsp;&nbsp;src<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;components<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Board.js *<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Square.js *<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.css *<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.js *<br/>
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

# Tests
The back-end unit tests were performed using the Postman tool.<br/>
For the front-end, were performed manual unit tests using the Mozilla Firefox browser.<br/>

# Knight Movements Algorithm

1. The multidimensional chessboard array is initialized with the following values:

['A1','B1','C1','D1','E1','F1','G1','H1'],<br/>
['A2','B2','C2','D2','E2','F2','G2','H2'],<br/>
['A3','B3','C3','D3','E3','F3','G3','H3'],<br/>
['A4','B4','C4','D4','E4','F4','G4','H4'],<br/>
['A5','B5','C5','D5','E5','F5','G5','H5'],<br/>
['A6','B6','C6','D6','E6','F6','G6','H6'],<br/>
['A7','B7','C7','D7','E7','F7','G7','H7'],<br/>
['A8','B8','C8','D8','E8','F8','G8','H8']<br/>
