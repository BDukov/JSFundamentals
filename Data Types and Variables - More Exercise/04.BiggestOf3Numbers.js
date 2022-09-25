function biggestOfThreeNumbers(number, number1, number2) {
    if (number >= number1 && number >= number2) {
        console.log(number);
    } else if (number1 >= number && number1 >= number2) {
        console.log(number1);
    } else if (number2 >= number && number2 >= number1) {
        console.log(number2);
    }
}
biggestOfThreeNumbers(-2, 7, 3);