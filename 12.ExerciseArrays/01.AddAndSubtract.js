function addAndSubtract(input) {

    let originsArraySum = 0;
    let modifiedArraySum = 0;
    let resultArray = [];
    let length = input.length;

    for (let i = 0; i < length; i++) {

        let currentNumber = input[i];

        let odd = currentNumber - i;
        let even = currentNumber + i;

        if (currentNumber % 2 === 0) {
            resultArray.push(even);
        } else {
            resultArray.push(odd);
        }
        originsArraySum += currentNumber;
        modifiedArraySum += resultArray[i];
    }
    console.log(resultArray);
    console.log(originsArraySum);
    console.log(modifiedArraySum);
}
addAndSubtract([5, 15, 23, 56, 35]);