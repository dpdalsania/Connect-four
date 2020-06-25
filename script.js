//Black == 1
//Red == 0
let gameBoard = init();
let turnOf = 0;

function init () {
    let array = [];
    for (let i = 0; i < 6; i++) {
        array[i] = [];
        for (let j = 0; j < 7; j++) {
            array[i][j] = null;
           // console.log(array)
        }
    }
    return array;
    
}

function optionSelected (a, b, id) {
    for (let i = 5; i >= 0; i--) {
        if (gameBoard[i][b] == null) {
            decorate("" + i + b);
            gameBoard[i][b] = turnOf;
            if (checkWinner(turnOf)) {
                let resultElement = document.getElementById('result');
                resultElement.innerHTML = 'Winner is' +(turnOf == 0 ? ' Red!' : ' Black!') 
                resultElement.style.display="block";
                document.getElementById('resultWrapper').style.display="flex";
                document.getElementById('mainTable').classList.add("disableTable");
            } else if(allOne()) {
                let resultElement = document.getElementById('result');
                resultElement.innerHTML = 'Game Over';
                resultElement.style.display="block";
                document.getElementById('mainTable').classList.add("disableTable");
            }
            break;
        }
    }
}

function decorate (id) {
    let element = document.getElementById(id);
    if (turnOf == 0) {
        element.classList.add("black");
         turnOf = 1;
    } else {
        element.classList.add("red");
        turnOf = 0;
    }
}

function allOne(){
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if(gameBoard[i][j] == null){
                return false;
            }
        }
    }
    return true;
}

function checkWinner (turnOf) {
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            // console.log(i,j);
            // console.log(gameBoard[i][j]);
            // console.log(i,j+1);
            // console.log(gameBoard[i][j+1]);
            // console.log(i,j+2);
            // console.log(gameBoard[i][j+2]);
            // console.log(i,j+3);
            // console.log(gameBoard[i][j+3]);
            
            if (gameBoard[i][j] == turnOf && gameBoard[i][j + 1] == turnOf && gameBoard[i][j + 2] == turnOf && gameBoard[i][j + 3] == turnOf) {
                return true;
            }
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            // console.log(i,j);
            // console.log(gameBoard[i][j]);
            // console.log(i+1,j);
            // console.log(gameBoard[i+1][j]);
            // console.log(i+2,j);
            // console.log(gameBoard[i+2][j]);
            // console.log(i+3,j);
            // console.log(gameBoard[i+3][j]);
            if (gameBoard[i][j] == turnOf && gameBoard[i + 1][j] == turnOf && gameBoard[i + 2][j] == turnOf && gameBoard[i + 3][j] == turnOf) {
                return true;
            }
        }
    }
    for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            // console.log(i,j);
            // console.log(gameBoard[i][j]);
            // console.log(i-1,j+1);
            // console.log(gameBoard[i-1][j+1]);
            // console.log(i-2,j+2);
            // console.log(gameBoard[i-2][j+2]);
            // console.log(i-3,j+3);
            // console.log(gameBoard[i-3][j+3]);
            if (gameBoard[i][j] == turnOf && gameBoard[i - 1][j + 1] == turnOf && gameBoard[i - 2][j + 2] == turnOf && gameBoard[i - 3][j + 3] == turnOf) {
                return true;
            }
        }
    }
    for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 7; j++) {
            // console.log(i, j);
            // console.log(gameBoard[i][j]);
            // console.log(i - 1, j - 1);
            // console.log(gameBoard[i - 1][j - 1]);
            // console.log(i - 2, j - 2);
            // console.log(gameBoard[i - 2][j - 2]);
            // console.log(i - 3, j - 3);
            // console.log(gameBoard[i - 3][j -3]);
            if (gameBoard[i][j] == turnOf && gameBoard[i - 1][j - 1] == turnOf && gameBoard[i - 2][j - 2] == turnOf && gameBoard[i - 3][j - 3] == turnOf) {
                return true;
            }
        }
    }
    return false;
}