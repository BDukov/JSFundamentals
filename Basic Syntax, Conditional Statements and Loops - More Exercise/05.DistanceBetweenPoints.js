function distanceBetweenPoints(x,y,x1,y1){
      
    let yi = x1 - x;
    let xi = y1 - y;

    let result = Math.sqrt(xi * xi + yi * yi);
    console.log(result);
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);