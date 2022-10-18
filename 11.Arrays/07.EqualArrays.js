function equalArrays(array1, array2) {

    let arraySum = 0;

    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
        arraySum += array1[i];
    }

    for (let j = 0; j < array2.length; j++) {
        array2[j] = Number(array2[j]);
    }
    let areEqual = true;

    for (i = 0; i < array1.length; i++) {

        if (array1[i] !== array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${arraySum}`);
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);