function equalNeighbors(array) {

    let counter = 0;
    let arrayLength = array.length;
    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i];
        for (let j = 0; j < currentArray.length; j++) {
            let currentNum = currentArray[j];
            let nextArray = array[i + 1];

            if (currentNum === currentArray[j + 1]) {
                counter++;
            }
            if (i < arrayLength - 1) {
                if (currentNum === nextArray[j]) {
                    counter++;
                }
            }
        }
    }
    console.log(counter)
}

// equalNeighbors([['2', '3', '4', '7', '0'], ['4', '0', '5', '3', '4'], ['2', '3', '5', '4', '2'], ['9', '8', '7', '5', '4']]);
// equalNeighbors([['test', 'yo', 'yo', 'ho'], ['well', 'done', 'no', '6'], ['not', 'done', 'yet', '5']]);
equalNeighbors([['2', '2', '5', '7', '4'], ['4', '0', '5', '3', '4'], ['2', '5', '5', '4', '2']]);