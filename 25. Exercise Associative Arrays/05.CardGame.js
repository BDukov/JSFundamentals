function cardGame(input) {

    let playersInObject = {};
    let colors = { "C": 1, "D": 2, "H": 3, "S": 4 };
    let points = { "1": 10, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9 };

    for (const line of input) {
        let currentLine = line.split(': ');
        let playerName = currentLine[0];
        let playerCards = currentLine[1].split(', ');

        if (!playersInObject.hasOwnProperty(playerName)) {
            playersInObject[playerName] = new Set(); //problem here
            }

        for (let card of playerCards) {
            playersInObject[playerName].add(card);
        }
    }

 //   let itterableCars =  Object.entries(playersInObject);
    for (let [playerName, playerCards] in playersInObject) {

        let pointsOfPlayer = 0;

        for (let card of playerCards) {
            let point = points[card[0]];
            let color = colors[card.slice(-1)];
            pointsOfPlayer += point * color;
        }
        console.log(`${playerName}: ${pointsOfPlayer}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);