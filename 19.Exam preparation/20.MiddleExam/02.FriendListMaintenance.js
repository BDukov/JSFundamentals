function friendList(array) {
    let friendList = array.shift().split(', ');
    let blackListedNames = 0;
    let lostNames = 0;

    while (array[0] !== 'Report') {
        let currentLine = array.shift().split(' ');
        let command = currentLine[0];
        let indexOrName = currentLine[1];
        let changedName = currentLine[2];

        switch (command) {
            case 'Blacklist':
                if (friendList.includes(indexOrName)) {
                    let currentIndex = friendList.indexOf(indexOrName);
                    friendList.splice(currentIndex, 1, 'Blacklisted');
                    console.log(`${indexOrName} was blacklisted.`);
                    blackListedNames++;
                } else {
                    console.log(`${indexOrName} was not found.`);
                }
                break;

            case 'Error':
                let currentIndex = Number(indexOrName);
                if (currentIndex >= 0 && currentIndex < friendList.length && friendList[currentIndex] !== 'Blacklisted' && friendList[currentIndex] !== 'Lost') {
                    let currentName = friendList[currentIndex ];
                    console.log(`${currentName} was lost due to an error.`);
                    friendList.splice(currentIndex, 1, 'Lost');
                    lostNames++;
                } else {
                    break;
                }
                break;

            case 'Change':
                let currentIndexTwo = Number(indexOrName);
                if (currentIndexTwo >= 0 && currentIndexTwo < friendList.length) {
                    let currentName = friendList[currentIndexTwo];
                    console.log(`${currentName} changed his username to ${changedName}.`);
                    friendList.splice(currentIndexTwo, 1, changedName);
                } else {
                    break;
                }
                break;
        }
    }
    console.log(`Blacklisted names: ${blackListedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(friendList.join(' '));
}

// friendList(["Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"]);
// console.log(`-----------------------`);
// friendList(["Mike, John, Eddie, William",
//     "Error 3",
//     "Error 3",
//     "Change 0 Mike123",
//     "Report"]);
// console.log(`-----------------------`);
friendList(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"]);