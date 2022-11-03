function cats(array){

    let cats = [];
    
    class Cat {
      constructor(name, age){
        this.name = name;
        this.age = age;
      }
      meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
      }
    }
  
    for(let i = 0; i < array.length; i++){
      let catData = array[i].split(' ');
      let name = catData[0];
      let age = Number(catData[1]);
      cats.push(new Cat(name, age));
    }
  
    for (let cat of cats){
      cat.meow();
    }
  }
  cats(['Mellow 2', 'Tom 5']);