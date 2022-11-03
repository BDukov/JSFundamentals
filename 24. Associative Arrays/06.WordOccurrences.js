function wordOccurences(input) {

    let map = new Map();

    for (let element of input) {
        let tokens = element.split(' ');
        let word = tokens[0];
        let count = 0;
        if (!map.has(word)) {
            count++;
            map.set(word, count);
        } else {
            let currentCount = map.get(word);
            let count = currentCount + 1;
            map.set(word, count);
        }
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (const kvp of sorted) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);