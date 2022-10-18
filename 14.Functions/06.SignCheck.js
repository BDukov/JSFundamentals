function signCheck(numOne, numTwo, numThree) {
    
    let result = '';

    function multiplyOfTwoNumbers(numOne, numTwo){
        let multiplyedNumbers = numOne * numTwo;
        return multiplyedNumbers;
    }

    let finalMultiplyOfTwoNums = multiplyOfTwoNumbers(numOne, numTwo);

    if (finalMultiplyOfTwoNums * numThree >= 0) {
        result = 'Positive';
    } else {
        result = 'Negative';
    }
    console.log(result);
}
signCheck(-5, 1, 1);