function reverse(count, numbers) {
    //create new array
    let result = []; //create empty array

    // take count elements from numbers
    //reverse the elements
    for (let i = 0; i < count; i++) {
        result[count - 1 - i] = numbers[i];
    }
    //print
    console.log(result.join(' '));
}
reverse(3, [10, 20, 30, 40, 50]);