const board = ['...', '...', '...', '...', '...', '...', '...', '...', '...'];

let players;

const selectQuery = query => document.querySelector(query);
const cells = document.querySelectorAll('.box');

const game = (() => {
  const display = () => board.map((item, index) => {
    cells[index].innerHTML = item;
    return null;
  });

  function storePlayers(player1, player2) {
    players = [player1, player2];
  }

  const checkBox = (position, board) => {
    const boardPos = board[position];
    if (boardPos !== 'X' && boardPos !== 'O') {
      return true;
    }
    return false;
  };

  const setWinner = (pattern, winner) => {
    let winnerName;
    let loserName;
    let loser;
    if (winner === 'Player1') {
      loser = 'Player2';
      [winnerName, loserName] = players;
    } else {
      loser = 'Player1';
      [loserName, winnerName] = players;
    }
    selectQuery(
      '.turns',
    ).innerHTML = `${winner}: ${winnerName} won😍🎉!!! <br/> ${loser}: ${loserName} lost😒`;

    board.forEach((_item, index) => {
      if (!pattern.includes(index)) {
        board[index] = ':(';
      }
    });
    return display();
  };

  function setTie(player1, player2) {
    selectQuery(
      '.turns',
    ).innerHTML = `No Winner:  ITS A TIE!!! <br/> Thanks for playing ${player1} and ${player2}`;
  }

  const checkWin = (board, nocall = false) => {
    const patterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];

    for (const p of patterns) {
      if (board[p[0]] === 'X' && board[p[1]] === 'X' && board[p[2]] === 'X') {
        if (nocall !== false) setWinner(p, 'Player1');
        return 'Player 1 Wins';
      }
      if (board[p[0]] === 'O' && board[p[1]] === 'O' && board[p[2]] === 'O') {
        if (nocall !== false) setWinner(p, 'Player2');
        return 'Player 2 Wins';
      }
      if (board.indexOf('...') === -1 && board.indexOf(':(') === -1) {
        if (nocall !== false) {
          const [player1, player2] = players;
          setTie(player1, player2);
        }
        return 'There has been a tie';
      }
    }
    return '';
  };

  const placeMark = (position, board, nocall = false) => {
    if (checkBox(position, board)) {
      const countX = board.filter(x => x === 'X').length;
      const countO = board.filter(y => y === 'O').length;
      if (countX > countO) {
        board[position] = 'O';
      } else {
        board[position] = 'X';
      }
    }
    if (nocall !== false) {
      display();
      checkWin(board, true);
    }
  };

  const reStart = () => {
    window.location.reload();
  };

  return {
    display,
    checkBox,
    placeMark,
    checkWin,
    setWinner,
    storePlayers,
    reStart,
  };
})();


export default game;