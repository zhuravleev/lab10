let canvas = document.getElementById("canvas"),
  ctx = canvas.getContext('2d');
let playerXhtml = document.getElementById('playerX');
let playerOhtml = document.getElementById('playerO');
let whatPlayerHTML = document.getElementById('whatPlayer');
let newRoundHTML = document.getElementById('newRound');
let deleteAllHTML = document.getElementById('deleteAll');
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';


function drawLines() {
  ctx.moveTo(0, 200);
  ctx.lineTo(600, 200);
  ctx.moveTo(0, 400);
  ctx.lineTo(600, 400);


  ctx.moveTo(200, 0);
  ctx.lineTo(200, 600);
  ctx.moveTo(400, 0);
  ctx.lineTo(400, 600);

  ctx.stroke();
}
drawLines();

function drawX(arr) {
  ctx.beginPath();
  ctx.moveTo(arr[0], arr[1]);
  ctx.lineTo(arr[2], arr[3]);
  ctx.moveTo(arr[4], arr[5]);
  ctx.lineTo(arr[6], arr[7]);
  ctx.stroke();
}
function drawO(arr) {
  ctx.beginPath();
  ctx.arc(arr[0], arr[1], arr[2], arr[3], arr[4]);
  ctx.stroke();
}


let turn = 0;
let cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let filledCells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerX = 0;
let playerO = 0;
let isWin = false;

playerXhtml.innerHTML = playerX;
playerOhtml.innerHTML = playerO;

function checkWin(c, turnStr) {
  if (
     (c[0] === turnStr && c[1] === turnStr && c[2] === turnStr) 
  || (c[3] === turnStr && c[4] === turnStr && c[5] === turnStr) 
  || (c[6] === turnStr && c[7] === turnStr && c[8] === turnStr)
  || (c[0] === turnStr && c[4] === turnStr && c[8] === turnStr)
  || (c[2] === turnStr && c[4] === turnStr && c[6] === turnStr) 
  || (c[0] === turnStr && c[3] === turnStr && c[6] === turnStr)
  || (c[1] === turnStr && c[4] === turnStr && c[7] === turnStr)
  || (c[2] === turnStr && c[5] === turnStr && c[8] === turnStr) 
  ) {
    canvas.removeEventListener('click', game);
    if (turnStr === 'x') {
      playerX++;
      playerXhtml.innerHTML = playerX;
    } else {
      playerO++;
      playerOhtml.innerHTML = playerO;
    }
    isWin = true;
    Swal.fire({
      title: 'Раунд окончен',
      text: `Игрок ${turnStr} выиграл. `,
      confirmButtonText: 'Ok'
    })
  }
  if ( c[0] && c[1] && c[2] && c[3] && c[4] && c[5] && c[6] && c[7] && c[8] ) {
    canvas.removeEventListener('click', game);
    isWin = true;
    Swal.fire({
        title: 'Раунд окончен',
        text: `Ничья`,
        confirmButtonText: 'Ok'
    })
  }
}

function whatPlayer() {
  if (turn === 0) {
    whatPlayerHTML.innerHTML = 'X';
  } else {
    whatPlayerHTML.innerHTML = 'O';
  }
}

function newRound() {
  ctx.beginPath();
  ctx.stroke();
  ctx.closePath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLines();
  if (isWin) {
    canvas.addEventListener('click', game);
    isWin = false;
  }
  turn = 0;
  whatPlayer();
  cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  filledCells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function deleteAll() {
  ctx.beginPath();
  ctx.stroke();
  ctx.closePath();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLines();
  if (isWin) {
    canvas.addEventListener('click', game);
    isWin = false;
  }
  turn = 0;
  whatPlayer();
  cells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  filledCells = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  playerX = 0;
  playerO = 0;
  playerXhtml.innerHTML = playerX;
  playerOhtml.innerHTML = playerO;
}


newRoundHTML.addEventListener('click', newRound);
deleteAllHTML.addEventListener('click', deleteAll);


function game(e) {
  if (e.offsetY < 200) {
    if (e.offsetX < 200) {
      if (!cells[0]) {
        if (turn === 0) {
          drawX( [5, 5,
                  195, 195,
                  195, 5,
                  5, 195] );
          turn = 1;
          filledCells[0] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [100, 100,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[0] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[0] = 1;
        whatPlayer();
      }
    }
    else if ( e.offsetX < 400 ) {
      if (!cells[1]) {
        if (turn === 0) {
          drawX( [200 + 5, 5,
                  200 + 195, 195,
                  200 + 195, 5,
                  200 + 5, 195] );
          turn = 1;
          filledCells[1] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [300, 100,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[1] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[1] = 1;
        whatPlayer();
      }
    }
    else if ( e.offsetX < 600 ) {
      if (!cells[2]) {
        if (turn === 0) {
          drawX( [400 + 5, 5,
                  400 + 195, 195,
                  400 + 195, 5,
                  400 + 5, 195] );
          turn = 1;
          filledCells[2] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [500, 100,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[2] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[2] = 1;
        whatPlayer();
      }
    }
  }
  else if (e.offsetY < 400) {
    if (e.offsetX < 200) {
      if (!cells[3]) {
        if (turn === 0) {
          drawX( [5, 200 + 5,
                  195, 200 + 195,
                  195, 200 + 5,
                  5, 200 + 195] );
          turn = 1;
          filledCells[3] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [100, 300,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[3] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[3] = 1;
        whatPlayer();
      }
    }
    else if ( e.offsetX < 400 ) {
      if (!cells[4]) {
        if ( turn === 0) {
          drawX( [200 + 5, 200 + 5,
                  200 + 195, 200 + 195,
                  200 + 195, 200 + 5,
                  200 + 5, 200 + 195] );
          turn = 1;
          filledCells[4] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [300, 300,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[4] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[4] = 1;
        whatPlayer();
      }
    }
    else if ( e.offsetX < 600 ) {
      if (!cells[5]) {
        if ( turn === 0 ) {
          drawX( [400 + 5, 200 + 5,
                  400 + 195, 200 + 195,
                  400 + 195, 200 + 5,
                  400 + 5, 200 + 195] );
          turn = 1;
          filledCells[5] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [500, 300,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[5] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[5] = 1;
        whatPlayer();
      }
    }
  }
  else if (e.offsetY < 600) {
    if (e.offsetX < 200) {
      if (!cells[6]) {
        if ( turn === 0 ) {
          drawX( [5, 400 + 5,
                  195, 400 + 195,
                  195, 400 + 5,
                  5, 400 + 195] );
          turn = 1;
          filledCells[6] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [100, 500,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[6] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[6] = 1;
        whatPlayer();
      }
    }
    else if ( e.offsetX < 400 ) {
      if (!cells[7]) {
        if ( turn === 0 ) {
          drawX( [200 + 5, 400 + 5,
                  200 + 195, 400 + 195,
                  200 + 195, 400 + 5,
                  200 + 5, 400 + 195] );
          turn = 1;
          filledCells[7] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [300, 500,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[7] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[7] = 1;
        whatPlayer();
      }
    }
    else if ( e.offsetX < 600 ) {
      if (!cells[8]) {
        if ( turn === 0 ) {
          drawX( [400 + 5, 400 + 5,
                  400 + 195, 400 + 195,
                  400 + 195, 400 + 5,
                  400 + 5, 400 + 195] );
          turn = 1;
          filledCells[8] = 'x';
          checkWin(filledCells, 'x');
        } else {
          drawO( [500, 500,
                  95,
                  0, 2*Math.PI] );
          turn = 0;
          filledCells[8] = 'o';
          checkWin(filledCells, 'o');
        }
        cells[8] = 1;
        whatPlayer();
      }
    }
  }
}

canvas.addEventListener('click', game);