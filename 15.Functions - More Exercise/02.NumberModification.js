function numberModification(number) {

    let numberToArray = number.toString().split('');
    let sumOfDigits = 0;

    while (sumOfDigits <= 5) {
        let sum = 0;
        for (let i of numberToArray) {
            sum += Number(i);
        }
        sumOfDigits = sum / numberToArray.length;

        if (sumOfDigits > 5) {
            break;
        } else {
            numberToArray.push('9');
        }
    }
    console.log(numberToArray.join(''));
}
numberModification(101);