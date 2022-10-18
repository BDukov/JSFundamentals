function repeatString(string, count){
    //string.repaet(count);
    let result = '';

    for (let i = 0; i < count; i++) {
        result += string;
    }
    return result;
}
let  repeatedString = repeatString("abc", 3);
console.log(repeatedString);

