function sumarElementos(a){
    var suma = 0;
    for(let i=0; i<a.length;i++){
        suma += a[i];
    }
    return suma;
}
console.log(sumarElementos([1,2,3,4,5]));
