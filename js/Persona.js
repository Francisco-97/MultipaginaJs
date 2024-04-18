class Persona {
    constructor(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = this.nombre;
    }
}