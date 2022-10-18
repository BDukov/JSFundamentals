function nonDecreasingSubset(array) {

    let maxNumber = Number.MIN_SAFE_INTEGER; //създаваме променлива, която ще държи най-голямото число
    let newArray = []; // създаваме празен масив където ще записваме елементи

    for (let i = 0; i < array.length; i++) { //правим for цикъл с който ще обходим масива

        let currentNum = array[i]; //вземаме стойсността на текуция елемент
        if (currentNum >= maxNumber) { //проверяваме дали е по-голямо от най-голямото число запазено до момента
            maxNumber = currentNum; // присвояваме му стойността на най-голямо число
            newArray.push(currentNum); // добавяме числото в новия масив
        }
    }
    console.log(newArray.join(' ')); // печатаме резултата
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);