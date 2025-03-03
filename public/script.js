console.log("Hola mundo!"); //En Java existen 2 tipos de valor: constante y variable
//Tipos de datos: String, Number, Boolean, Undefined, null
const colores = ["red", "blue"];
console.log(colores[0]);
colores[0] = 523;
console.log(colores[0]);
colores[2] = 8; //El arteglo crece de tamaño

let alumno = { //Objeto anónimo
    nombre: "Luis",
    edad: 20,
    imprime() {
        console.log(this.nombre + " " + this.edad);
    },
};

alumno.imprime();
alumno["edad"]++;

function fun2() {
    console.log("hola 2");
}

const funcion = (name) => { //La flecha indica una función
    console.log("Hola " + name);
};

funcion("Luis");