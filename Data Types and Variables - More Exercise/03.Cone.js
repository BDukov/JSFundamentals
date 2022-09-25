function cone(radius, height) {
    let volume = (1 / 3) * Math.PI * radius * radius * height;
    let slantHight = s = Math.sqrt(radius * radius + height * height);
    let lateralSurfaceArea = Math.PI * radius * slantHight;
    let baseSurfaceArea = Math.PI * radius * radius;
    let totalSurfaceArea = lateralSurfaceArea + baseSurfaceArea
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log((`area = ${totalSurfaceArea.toFixed(4)}`));
}
cone(3, 5);