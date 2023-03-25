let error_do = false;

let cantidad = "";
let cant_alumnos = 0;

let sumatoria = 0;
let nota = 0;

do{
    if(error_do){
        alert("Ingrese un número entero");
    }
    cantidad = prompt("Ingrese cantidad de alumnos");
    cant_alumnos = parseInt(cantidad);
    if(cantidad != cant_alumnos || cant_alumnos < 0){
        error_do = true;
    }
}while(cantidad != cant_alumnos);


for(i=0; i<cant_alumnos; i++){
    nota = prompt("Ingrese nota del alumno número " + (i+1) + ". (Solo números enteros)");
    if(nota != parseInt(nota) || parseInt(nota) < 1 || parseInt(nota) > 10){
        alert("La nota debe ser un número entero de 1 a 10");
        i--;
    }else{
        sumatoria= sumatoria + parseInt(nota);
    }
}

let promedio = sumatoria / cant_alumnos;

console.log(cant_alumnos);
console.log(sumatoria);
console.log(promedio);

alert("El promedio de las notas es: " + promedio);