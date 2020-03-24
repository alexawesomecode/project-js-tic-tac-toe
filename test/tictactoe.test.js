import game from '../src/tictactoe';

describe('test checkBox game functionality', () => {
  it('checkBox method return true for empty position', () => {
    const board = ['X', '', 'O', 'X', '', '0', 'X', '', '0'];
    expect(game.checkBox(1, board)).toBeTruthy();
  });

  it('checkBox method return false for filled position', () => {
    const board = ['X', 'X', 'O', 'X', '', '0', 'X', '', '0'];
    expect(game.checkBox(1, board)).toBeFalsy();
  });
});

describe('tests checkWin functionality', () => {
  it('Player 1 as the winner', () => {
    const board = ['X', 'X', 'X', 'O', '...', 'O', 'X', '...', 'O', '...'];
    expect(game.checkWin(board)).toBe('Player 1 Wins');
  });
  it('Player 1 as the winner different mark position', () => {
    const board = ['X', 'O', 'X', 'X', '...', 'O', 'X', '...', 'O', '...'];
    expect(game.checkWin(board)).toBe('Player 1 Wins');
  });
});
