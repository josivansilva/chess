const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let books = [];

let chessboard;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/chess/:position', (req, res) => {
    const position = req.params.position;

    console.log('position: ' + position);

    let rows = 8;
    let columns = 8;

    let positionArr = new Array();

    outer:
    for (let i = 0 ; i < rows; i++) {        
        for (let j = 0; j < columns; j++) {
            if (position === chessboard[i][j]){
                console.log('chessboard[i][j+1] ' + chessboard[i][j+1]);
                console.log('chessboard[i][j+2] ' + chessboard[i][j+2]);
                console.log('chessboard[i+1][j+2] ' + chessboard[i+1][j+2]);
                console.log('chessboard[i+1][j] ' + chessboard[i+1][j]);
                console.log('chessboard[i+2][j] ' + chessboard[i+2][j]);
                console.log('chessboard[i+2][j+1] ' + chessboard[i+2][j+1]);
                positionArr.push(chessboard[i][j+1]);
                positionArr.push(chessboard[i][j+2]);
                positionArr.push(chessboard[i+1][j+2]);
                positionArr.push(chessboard[i+1][j]);
                positionArr.push(chessboard[i+2][j]);
                positionArr.push(chessboard[i+2][j+1]);
                break outer;
            }
        }
    }

    res.contentType('application/json');
    res.send(JSON.stringify(positionArr));

    // Sending 404 when not found something is a good practice
    //res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
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

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));