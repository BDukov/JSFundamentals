function sumOfOddNums(num){
    let oddNumber = 1;
    let sum = 0;
    for (let i = 0; i < num; i++){
        console.log(oddNumber);
        
        sum += oddNumber;
        oddNumber += 2;
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNums(5);