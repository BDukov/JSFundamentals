function addAndSubtract(firstNum, secondNum, lastNum){

    function add(firstNum, secondNum){

        let sum = firstNum + secondNum;
        return sum;
    }
    let sum = add(firstNum, secondNum);
 
    function subtract(sum, lastNum){

        return sum - lastNum;
    }
    let result = subtract(sum, lastNum);
        console.log(result);

}
addAndSubtract(23,6,10);