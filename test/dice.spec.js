let dice = require('../src/dice')

describe('Rolling dice', () => {
  it('should give me max 5 and min 0', () => {
    let roll
    let minRoll, maxRol
    for (let i = 0; i <= 25; i++) {
      roll = dice.rollDice()
      if (!minRoll && minRoll != 0) {
        minRoll = roll
        maxRoll = roll
      } else {
        if (roll < minRoll) {
          minRoll = roll
        }
        if (roll > maxRoll) {
          maxRoll = roll
        }
      }
    }
    minRoll.should.equal(0)
    maxRoll.should.equal(5)
  })
})


describe('Rolling dice type', () => {
  it('should return valid dice side', () => {
    let diceSide = dice.rollDiceType('home')
    console.log(diceSide)
    let sides = ['explore', 'settle', 'ship', 'develop']
    sides.should.include(diceSide)
  });
});

