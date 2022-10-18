function evenAndOddSub(array) {

    let evenSum = 0;
    let oddSum = 0;
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {

        let currentNumber = array[i];

        if (currentNumber % 2 === 0) {
            oddSum += currentNumber;
        } else {
            evenSum += currentNumber;
        }
    }
    let difference = oddSum - evenSum;
    console.log(difference);
}
evenAndOddSub([1,2,3,4,5,6]);