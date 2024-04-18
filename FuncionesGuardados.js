let Nombre = document.getElementById('nombre');
let id = document.getElementById('');
let Apellido = document.getElementById('');
let Edad = document.getElementById('');
let Email = document.getElementById('');

var DatosPersonales = {
    id: "40228185910",
    nombre: Nombre,
    apellido: "Santos de los Santos",
    edad: 27,
    email: "johnkelsantos@gmail.com"
}

/*let btn = document.querySelector('#GuardarDatos');
btn.addEventListener('click', () =>{
    let Nombre = document.querySelector('#nombre');
    document.querySelector('')
});*/

document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('mostrar').innerHTML = DatosPersonales.nombre.value;
});

document.getElementById('GuardarDatos').addEventListener('click', function() {
    

    var datosJSON = JSON.stringify(DatosPersonales)

    localStorage.setItem('DatosPersonales', datosJSON);

    //datos.nombre.value = '';
});

document.getElementById('MostrarDatos').addEventListener('click', function(){
    var datosGuardados = localStorage.getItem('DatosPersonales');
    var datosRecuperados = JSON.parse(datosGuardados);

    console.log(datosRecuperados)

    var mesaje = "Identificacion: " + datosRecuperados[0].id + "<br>" + 
                 "Nombre: " + datosRecuperados.nombre + "<br>" +
                 "Apellido: " + datosRecuperados.apellido + "<br>" +
                 "Edad: " + datosRecuperados.edad;


                
    document.getElementById('datosMostrado').innerHTML = mesaje;
});
