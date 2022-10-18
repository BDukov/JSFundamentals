function magicSum(array, magicNumber) {

    arrayLength = array.length;
    for (let i = 0; i < arrayLength - 1; i++) {

        let currentNumber = array[i];

        for (let j = i + 1; j < arrayLength; j++) {

            let nextNumber = array[j];

            if (currentNumber + nextNumber === magicNumber) {
                console.log(`${currentNumber} ${nextNumber}`);
            }
        }
    }
}
//magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);

