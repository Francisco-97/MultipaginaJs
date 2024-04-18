var PersonaDatos = [];
var Familiares = [];

function agregarPersona(id, nombre, apellido, edad){

    var NuevaPersona = {
        ID: id,
        Nombre: nombre,
        Apellido: apellido,
        Edad: edad
    }

    console.log(NuevaPersona)
    PersonaDatos.push(NuevaPersona)
}

function agregarFamilia(id, idPersona, nombre, apellido, parentezco, edad){
    var NuevoFamiliar = {
        ID: id,
        IDPersona: idPersona,
        Nombre: nombre,
        Apellido: apellido,
        Parentezco: parentezco,
        Edad: edad
    }
}

function obtenerPersona(){
    return PersonaDatos;
}

function obtenerFamiliar(idPersona){
    return Familiares;
}