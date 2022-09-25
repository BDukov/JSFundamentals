function triangleArea(sideA, sideB, sideC){
    let halfOfTheTringles = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(halfOfTheTringles * (halfOfTheTringles - sideA) * (halfOfTheTringles - sideB) * (halfOfTheTringles - sideC));
    console.log(area);
}
triangleArea(2, 3.5, 4);