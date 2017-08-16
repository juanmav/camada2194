function Empleado (nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.salario = 16000;
    this.trabajoRealizado = 0;
}

Empleado.prototype.nombreCompleto = function() {
    return this.nombre + ' ' + this.apellidos;
};

let empleado1 = new Empleado('Roberto', 'Rojas');

console.log(empleado1.nombreCompleto());

class EmpleadoClase {

    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.salario = 16000;
        this.trabajoRealizado = 0;
    }

    nombreCompleto(){
        return this.nombre + ' ' + this.apellidos;
    }

}

let empleadoClase1 = new EmpleadoClase('Pepito', 'Juarez');

console.log(empleadoClase1.nombreCompleto());

console.log(empleado1);
console.log(empleadoClase1);
