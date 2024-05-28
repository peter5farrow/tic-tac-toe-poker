let player = "X";

function checkWinner() {
  const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const line of lines) {
    const [a, b, c] = line;
    const squareA = squares[a].innerText;
    const squareB = squares[b].innerText;
    const squareC = squares[c].innerText;

    if (squareA !== "" && squareA === squareB && squareA === squareC) {
      return squareA;
    }
  }
  return undefined;
}

const squares = document.querySelectorAll(".square");

for (const square of squares) {
  square.addEventListener("click", play);
}

function play(evt) {
  const target = evt.target;
  target.innerText = player;

  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
  const currentPlayer = document.querySelector("#current-player");
  currentPlayer.innerText = player;

  const winner = checkWinner();
  if (winner) {
    alert(`${winner} is the winner!`);
  } else if (fullBoard()) {
    alert("Game is a tie");
  }
}

const fullBoard = () => {
  for (const square of squares) {
    if (square.innerText === "") {
      return false;
    }
  }
  return true;
};
