function convertToObject(data){
    let info = JSON.parse(data);

     for (const key of Object.keys(info)) {
         console.log(`${key} ${data[key]}`);
     }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
