function duplicarYFiltrar(a) {
    let duplicado = a.concat(a);
    let arreglo = duplicado.filter(num => num > 10);
    return arreglo;
}
console.log(duplicarYFiltrar([5, 12, 7, 15]));
