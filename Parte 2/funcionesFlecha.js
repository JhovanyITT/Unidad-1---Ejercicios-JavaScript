let a=[1,2,3,4,5]


let paresFlecha = (a) => a.filter(function(a){
    return a % 2 == 0;
}
);


console.log(paresFlecha(a))