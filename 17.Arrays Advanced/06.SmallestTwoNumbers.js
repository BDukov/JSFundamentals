function smallestTwoNumbers(numbers) {

    let numbersToHigher = numbers.sort((a, b) => a - b);
    let output = numbersToHigher.slice(0, 2);

    console.log(output.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);