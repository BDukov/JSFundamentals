function memoryGame(array) {

    let sequence = array.shift().split(' ');
    let moves = 0;

    while (array[0] !== 'end') {
        moves++;

        let command = array.shift().split(' ');
        let firstIndex = Number(command[0]);
        let secondIndex = Number(command[1]);
        let sequenceLength = sequence.length;

        if (firstIndex === secondIndex || firstIndex < 0 || secondIndex < 0 || firstIndex > sequenceLength || secondIndex > sequenceLength) {
            sequence.splice(sequenceLength / 2, 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (sequence[firstIndex] === sequence[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${sequence[firstIndex]}!`);
            if (firstIndex > secondIndex) {
                sequence.splice(firstIndex, 1);
                sequence.splice(secondIndex, 1);
            } else {
                sequence.splice(secondIndex, 1);
                sequence.splice(firstIndex, 1);
            }
        } else if (sequence[firstIndex] !== sequence[secondIndex]) {
            console.log(`Try again!`);
        }

        if (sequence.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
    }
    console.log("Sorry you lose :(");
    console.log(sequence.join(' '));
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]
);
