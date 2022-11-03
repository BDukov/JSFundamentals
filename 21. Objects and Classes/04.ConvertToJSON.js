function solve(name, lastName, hairColor){

    let person = {
      name: name,
      lastName: lastName,
      hairColor: hairColor
    }
    let info = JSON.stringify(person);
  
  console.log(info)
  }
  solve('George', 'Jones', 'Brown');