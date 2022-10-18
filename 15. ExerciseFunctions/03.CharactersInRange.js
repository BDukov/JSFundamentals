function charactersInRange(firstChar, secondChar) {

    let rangeStart = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(secondChar.charCodeAt(), firstChar.charCodeAt());
    let output = '';

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar);
        output += `${singleChar} `;
    }
    console.log(output);
}
charactersInRange('#', ':');