let persona = {
    nombre: "Alan",
    edad: "21",
    ciudad: "Tepic",
    imprimirinfo:function(){
        console.log("Hola soy ",this.nombre,"tengo ",this.edad,"años y vivo en",this.ciudad)
    }
};

console.log(persona.imprimirinfo())