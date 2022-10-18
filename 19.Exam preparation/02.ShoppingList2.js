function shoppingList2(input){
 let list = input.shift().split('!');

 let commands = input.slice();
 let currentCommand = commands.shift();

 while (currentCommand != 'Go Shopping!'){
    let commandArgs = currentCommand.split(' ');
    let command = commandArgs[0];
    let firstArgument = commandArgs[1];
    let secondArgument = commandArgs[2];

    switch(command){
        case 'Urgent':
            if (!list.includes(firstArgument)) {
                list.unshift(firstArgument);
            }
        break;
        case 'Unnecessary':
            let itemIndex = list.indexOf(firstArgument);

            if(itemIndex > -1){
                list.splice(itemIndex, 1);
            }
        break;
        case 'Correct':
            let updateIndex = list.indexOf(firstArgument);
            
            if (updateIndex > -1) {
                list[updateIndex] = secondArgument;
            }
        break;
        case 'Rearrange':
            let removeIndex = list.indexOf(firstArgument);

            if(removeIndex > -1){
                let element = list[removeIndex];
                list.splice(removeIndex, 1);
                list.push(element);
            }
        break;
    }
        currentCommand = commands.shift();
 }
    console.log(list.join(', '));
}
shoppingList2(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]);
shoppingList2(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])