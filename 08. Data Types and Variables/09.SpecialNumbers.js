function specialNumbers(number){

    for (let i = 1; i <= number; i++){
        let num = String(i);

        let sum = 0;
        for (let j = 0; j < num.length; j++){
            let digit = num[j];
            sum += Number(digit);
        }

        switch(sum){
            case 5: console.log(`${num} -> True`);break;
            case 7: console.log(`${num} -> True`);break;
            case 11: console.log(`${num} -> True`);break;
            default: console.log(`${num} -> False`);
        }
    }
}
specialNumbers(15);
console.log('------');
specialNumbers(20);
