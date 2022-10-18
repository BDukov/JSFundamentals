function maxSquence(array){
        let longestArray = []       // Създаваме празен масив, в който ще пазим най-дългата поредица от числа 

    for (let index = 0; index < array.length; index++) {    // Правим цикъл, с който проверяваме числата по индекси 
       let currentElement = array[index]
       let currentArray = []                   // Създаваме празен масив, с който ще сравняваме дали е по-дълъг от най-дългия до момента
       
       for (let k = index; k < array.length; k++) { // Правим цикъл, с който взимаме следващите елемент
           let nextElement = array[k]
         if (currentElement === nextElement){   // Сравняваме дали следващия елемент е същия като предния, първия път винаги е вярно
            currentArray.push(currentElement)   // Ако са еднакви го добавяме в текущия масив 
         } else {
             break;                             // Ако не е започваме отново
         }
         if (currentArray.length > longestArray.length){    // Проверяваме дали поредицата на текущия масив е по-дълга от най-дългия
             longestArray = currentArray        // Ако е така подменяме най-дългия със сегашния 
         }
       }
       
    }
    console.log(longestArray.join(" "))
}
maxSquence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])