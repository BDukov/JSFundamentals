function rotateArray(array) {

    let rotations = array.pop();
    let newArray = [];

    for (let i = 0; i < rotations; i++){
        let currentIndex = array.pop();
        array.unshift(currentIndex);
    }
    console.log(array.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
console.log('-----------------------');
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);