function equalSum(arr) {

    let foundIndex = 'no';
    let arrLength = arr.length;


    for (let i = 0; i < arrLength; i++) {
        let leftSum = 0;
        let rightSum = 0;

        // calculate left sum
        for (let l = 0; l < i; l++) {
            leftSum = leftSum + arr[l];
        }
        //calculate right sum
        for (let r = i + 1; r < arrLength; r++) {
            rightSum += arr[r];
        }

        if (leftSum === rightSum) {
            foundIndex = i;
        }
    }
    console.log(foundIndex);
}
equalSum([1, 2, 3, 3]);