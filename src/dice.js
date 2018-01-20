
let rollDice = () => {
    return ((Math.floor((Math.random() * 6) + 1)) - 1)
}

let diceSides = { explore: 'explore', ship: 'ship', produce: 'produce', wild: 'wild', develop: 'develop', settle: 'settle' }
let diceTypes = {
    home: {
        name: 'Home',
        color: 'white',
        sides: [diceSides.explore, diceSides.explore, diceSides.develop, diceSides.settle, diceSides.ship, diceSides.produce]
    },
    consumption: {
        name: 'Consumption',
        color: 'purple',
        sides: [diceSides.explore, diceSides.develop, diceSides.ship, diceSides.ship, diceSides.ship, diceSides.wild]
    },
    military: {
        name: 'Military',
        color: 'red',
        sides: [diceSides.explore, diceSides.develop, diceSides.settle, diceSides.develop, diceSides.settle, diceSides.wild]
    },
    novelty: {
        name: 'Novelty',
        color: 'blue',
        sides: [diceSides.explore, diceSides.produce, diceSides.produce, diceSides.ship, diceSides.ship, diceSides.wild]
    },
    rare: {
        name: 'Rare Elements',
        color: 'brown',
        sides: [diceSides.explore, diceSides.develop, diceSides.develop, diceSides.produce, diceSides.ship, diceSides.wild]
    },
    gene: {
        name: 'Genes',
        color: 'green',
        sides: [diceSides.explore, diceSides.settle, diceSides.settle, diceSides.produce, diceSides.wild, diceSides.wild]
    },
    alien: {
        name: 'Alien Technology',
        color: 'yellow',
        sides: [diceSides.develop, diceSides.settle, diceSides.produce, diceSides.wild, diceSides.wild, diceSides.wild]
    },
}
let rollDiceType = ( diceType ) => {
    let diceResult = rollDice()
    return diceTypes[diceType].sides[diceResult]
}

module.exports.diceTypes = diceTypes
module.exports.rollDiceType = rollDiceType
module.exports.rollDice = rollDice