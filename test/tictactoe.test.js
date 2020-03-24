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
    it('First Player as the winner', () => {
        const board = ['X', 'X', 'X', 'O', '...', 'O', 'X', '...', 'O', '...'];
        expect(game.checkWin(board)).toBe('Player 1 Wins');
    });
    it('First Player as the winner different mark position', () => {
        const board = ['X', 'O', 'X', 'X', '...', 'O', 'X', '...', 'O', '...'];
        expect(game.checkWin(board)).toBe('Player 1 Wins');
    });
    it('Second Player as the winner', () => {
        const board = ['O', 'O', 'O', 'O', '...', 'O', 'X', '...', 'O', '...'];
        expect(game.checkWin(board)).toBe('Player 2 Wins');
    });
    it('Second Player as the winner different mark position', () => {
        const board = ['O', 'O', 'X', 'O', '...', 'O', 'O', '...', 'O', '...'];
        expect(game.checkWin(board)).toBe('Player 2 Wins');
    });
    it('Checks for tie', () => {
        const board = ['X', 'X', 'O', 'O', 'O', 'O', 'X', 'X', 'O', 'O'];
        expect(game.checkWin(board)).toBe('There has been a tie');
    });
    it('Checks for tie with new board position', () => {
        const board = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'O', 'X'];
        expect(game.checkWin(board)).toBe('There has been a tie');
    });
});

describe('tests placeMark functionality', () => {

    it('mark board with O when X length is greater than O length', () => {

        const board = ['X', 'O', 'X', '...', '...', '...', '...', '...', '...', '...'];
        game.placeMark(3, board)
        expect(board[3]).toBe('O')
        expect(board[3]).not.toBe('X')

    })

    it('mark board with X when O length is greater than X', () => {

        const board = ['X', 'O', 'X', 'O', 'X', 'O', '...', '...', '...', '...'];
        game.placeMark(8, board)
        expect(board[8]).toBe('X')
        expect(board[8]).not.toBe('O')

    })


})