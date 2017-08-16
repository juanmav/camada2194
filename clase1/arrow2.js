function Persona() {
    this.edad = 10;

    setTimeout(() => {
        console.log(this.edad);
    }, 1000);

}

let persona = new Persona();
