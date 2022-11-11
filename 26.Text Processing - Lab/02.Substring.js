function substring(text,index,count){
    let result = text.substring(index, count + index);
    console.log(result);
}
substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);