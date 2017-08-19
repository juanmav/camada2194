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

let empleado = new EmpleadoClase('Pepito', 'Juarez');

console.log(empleado.salario);

empleado.salario = 'mucho muchoooooo dineroooooo';

console.log(empleado.salario);