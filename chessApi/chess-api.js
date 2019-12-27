const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let chessboard;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/chess/:position', (req, res) => {
    const position = req.params.position;

    if (!position.match(/^(?:[0-9]+[A-Z]|[A-Z]+[0-9])[A-Z0-9]*$/)) {
        res.status(400).send('Invalid Chess Position.');
    }

    let rows = 8;
    let columns = 8;
    let positionArr = new Array();

    outer:
    for (let i = 0 ; i < rows; i++) {        
        for (let j = 0; j < columns; j++) {
            if (position === chessboard[i][j]){
                if (j <= 6) {
                    positionArr.push(chessboard[i][j+1]);
                }
                if (j <= 5) {
                    positionArr.push(chessboard[i][j+2]);
                }
                if (i <= 6) {
                    positionArr.push(chessboard[i+1][j+2]);
                    positionArr.push(chessboard[i+1][j]);
                }                
                if (i <= 5) {
                    positionArr.push(chessboard[i+2][j]);
                    positionArr.push(chessboard[i+2][j+1]);    
                }
                                
                break outer;
            }
        }
    }

    res.contentType('application/json');
    res.send(JSON.stringify(positionArr));

});

function initChessboard (){
    chessboard = [
                    ['A1','B1','C1','D1','E1','F1','G1','H1'],
                    ['A2','B2','C2','D2','E2','F2','G2','H2'],
                    ['A3','B3','C3','D3','E3','F3','G3','H3'],
                    ['A4','B4','C4','D4','E4','F4','G4','H4'],
                    ['A5','B5','C5','D5','E5','F5','G5','H5'],
                    ['A6','B6','C6','D6','E6','F6','G6','H6'],
                    ['A7','B7','C7','D7','E7','F7','G7','H7'],
                    ['A8','B8','C8','D8','E8','F8','G8','H8']
                ];    
    
}

initChessboard();

app.listen(port, () => console.log(`Chess API app listening on port ${port}!`));