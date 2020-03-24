import game from '../src/tictactoe'


test("checkBox method return true check for empty position", () => {


    expect(game.checkBox(2)).toBeTruthy()

})