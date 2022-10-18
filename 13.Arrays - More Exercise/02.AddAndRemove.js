function solve(array){

    let newArray = []; //create new array
  
    for (let i = 0; i < array.length; i++){
      let currentIndex = array[i];
  
      if(currentIndex === 'add'){
        newArray.push([i + 1]);
      } else {
        newArray.pop();
      }    
    }
    if(newArray.length == 0){
      console.log('Empty');
    } else {
    console.log(newArray.join(' '));
    }
  }
solve(['add', 'add', 'add', 'add']);