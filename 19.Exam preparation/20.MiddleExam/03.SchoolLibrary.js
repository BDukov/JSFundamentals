function schoolLibrary(array) {
    let books = array.shift().split('&');

    while (array[0] !== 'Done') {
        let currentLine = array.shift().split(' | ');
        let command = currentLine[0];
        let first = currentLine[1];
        let second = currentLine[2];

        switch (command) {

            case 'Add Book':
                if (!books.includes(first)) {
                    books.unshift(first);
                }
                break;

            case 'Take Book':
                if (books.includes(first)) {
                    let index = books.indexOf(first);
                    books.splice(index, 1);
                }
                break;

            case 'Swap Books':
                if (books.includes(first, second)) {
                    let firstBookIndex = books.indexOf(first);
                    let secondBookIndex = books.indexOf(second);
                    let firstElement = books[firstBookIndex];
                    let secondElement = books[secondBookIndex];
                    books.splice(firstBookIndex, 1, secondElement);
                    books.splice(secondBookIndex, 1, firstElement);
                }
                break;

            case 'Insert Book':
                if (!books.includes(first)) {
                    books.push(first);
                }
                break;

            case 'Check Book':
                let indexOfBook = Number(first);
                if (indexOfBook >= 0 && indexOfBook < books.length) {
                    let theIndexedBookName = books[indexOfBook];
                    console.log(theIndexedBookName);
                }
                break;
        }
    }
    console.log(books.join(', '));
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
    "Add Book | Ulysses",
    // "Add Book | Ulysses",
    // "Take Book | Don Quixote",
    // "Take Book | Don Quix",
    // "Swap Books | Don Quixote | Moby Dick",
    // "Swap Books | Don Quix | Moby Dick",
    // "Insert Book | Alice's Adventures in Wonderland",
    // "Insert Book | The Great Gatsby",
    "Check Book | 2",
    "Check Book | 5",
    "Check Book | -2",
    "Done"]);
// console.log(`-----------------------------------------`);
// schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
//     "Add Book | Catch-22",
//     "Swap Books | Anna Karenina | Catch-22",
//     "Take Book | David Copperfield",
//     "Done"]);
// console.log(`-----------------------------------------`);
// schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
//     "Check Book | 2",
//     "Swap Books | Don Quixote | Ulysse",
//     "Done"]);
