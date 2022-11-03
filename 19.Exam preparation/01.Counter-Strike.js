function counterStrike(array) {

    let initialEnergy = Number(array.shift());
    let wins = 0;

    while (array[0] !== 'End of battle') {
        let distance = Number(array.shift());

        if (initialEnergy >= distance) {
            wins++;
            initialEnergy -= distance;
        } else {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${initialEnergy} energy`);
            return;
        }
        if (wins % 3 === 0) {
            initialEnergy += wins;
        }
    }
    console.log(`Won battles: ${wins}. Energy left: ${initialEnergy}`);
}
counterStrike((["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"])
);