function condenseArrayToNumber(array) {

    while (array.length > 1) {

        for (let i = 0; i < array.length; i++) {

            array[i] = array[i] + array[i + 1];
        }
        array.length--;
    }
    console.log(array[0]);
}
condenseArrayToNumber([2,10,3]);