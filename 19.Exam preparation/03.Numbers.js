function numbers(input) {

    let numbersAsArray = input.split(' ');
    let countOfNumbers = numbersAsArray.length;
    let totalNums = 0;

    for (let i = 0; i < countOfNumbers; i++) {
        totalNums += Number(numbersAsArray[i]);
    }

    let averageNumber = totalNums / countOfNumbers;

    let filteredNumbers = numbersAsArray.filter(number => number > averageNumber);
    let sortedNumbers = filteredNumbers.sort((a, b) => b - a);
    let firstFiveNums = sortedNumbers.slice(0, 5);

    if (firstFiveNums.length > 0) {
        console.log(firstFiveNums.join(' '));
    } else {
        console.log('No');
    }
}
numbers('10 20 30 40 50');