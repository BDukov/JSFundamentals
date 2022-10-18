function factorialDivision(firstNumber, secondNumber) {

    let firstNumberResult = firstNumber;
    let secondNumberResult = secondNumber;
    for (let i = firstNumber - 1; i > 0; i--) {
        firstNumberResult *= i;
    }

    for (let j = secondNumber - 1; j > 0; j--) {
        secondNumberResult *= j;
    }

    let finalResult = firstNumberResult / secondNumberResult;

    console.log(finalResult.toFixed(2));
}
factorialDivision(5, 2);