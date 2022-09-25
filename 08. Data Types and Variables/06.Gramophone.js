function gramophone(bandName, album, song){

    let seconds = (album.length * bandName.length) * song.length / 2;
    let rotations = Math.ceil(seconds / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
console.log('------------------------------------');
gramophone('Rammstein', 'Sehnsucht', 'Engel');