function operacion(a,b, callback){
    var resl = a+b;
    callback(resl);
}

function op(opera){
    console.log(opera);
}

operacion(2,3,op);