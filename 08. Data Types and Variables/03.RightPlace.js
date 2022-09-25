function rightPlace(word1, char, word2) {
    let res = word1.replace('_',char);
    let output = res === word2? 'Matched': 'Not Matched';
    console.log(output);
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');