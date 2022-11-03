function shotForTheWin(input) {

    let targets = input.shift().split(' ').map(Number);
    let shotedTargets = 0;

    while (input[0] !== 'End') {

        let currentIndex = Number(input.shift());
        let currentIndexValue = targets[currentIndex];

        if (currentIndexValue !== -1 && currentIndex < targets.length && currentIndex >= 0) {
            targets[currentIndex] = -1;
            shotedTargets++;

            for (let i = 0; i < targets.length; i++) {

                if (targets[i] > currentIndexValue && targets[i] !== -1) {
                    targets[i] -= currentIndexValue;
                } else if (targets[i] <= currentIndexValue && targets[i] !== -1) {
                    targets[i] += currentIndexValue;
                }
            }
        }
    }
    console.log(`Shot targets: ${shotedTargets} -> ${targets.join(' ')}`);
}
shotForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]
);
shotForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);
