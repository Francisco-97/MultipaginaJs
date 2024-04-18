document.getElementById('btn').addEventListener('click', Guardar())

function Guardar(){
    var Nombre = document.getElementById('nombre').value,
    Apellido = document.getElementById('apellido').value,
    Edad = document.getElementById('edad').value,
    identificacion = document.getElementById('ide').value;

    agregarPersona(identificacion, Nombre, Apellido, Edad)
}