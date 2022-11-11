function modernTimesOfHashtag(text) {

    const words = text.split(' ');

    words.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1;
        if (isValidWord) {
           let isLetter = true;
            let temp = '';

            for (let index = 1; index < word.length; index++) {
                const char = word[index].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                   isLetter = false;
                    break;
                } else {
                    temp += word[index];
                }
            }
           if (isLetter) {
                console.log(temp);
           }
        }
    });
}
modernTimesOfHashtag('Nowadays everyone uses # to tag a #special word in #socialMedia');
