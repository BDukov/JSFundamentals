function phoneBook(input) {

    let phoneBook = {};

    for (const entry of input) {
        let entryArr = entry.split(' ');   //- 3 вариант
        //let [name, phone] = entry.split(' ');   - 1 вариант
        let name = entryArr[0];
        let phone = entryArr[1];
        //phoneBook[entryArr[0]] = entryArr[1];   - 2 вариант

        phoneBook[name] = phone;
    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
