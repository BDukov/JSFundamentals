function bombNumbers(numbers, actions) {

    let bombNumber = actions.shift();
    let powerNumber = actions.shift();
    let numbersLength = numbers.length;

    for (i = 0; i < numbersLength; i++) {
        let currentDigit = numbers[i];
        if (currentDigit === bombNumber) {
            let cutFrom = i - powerNumber;
            let cutTo = (powerNumber * 2) + 1;
            if (i + powerNumber > numbersLength) {
                let currentCut = numbersLength - powerNumber;
                numbers.splice(cutFrom, currentCut + 1);
            } else if (i - powerNumber < 0) {
                numbers.splice(0, cutTo);
            } else {
                numbers.splice(cutFrom, cutTo);
            }
            i = 0;
        }
    }

    let sum = 0;

    for (const el of numbers) {
        sum += el;
    }
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
