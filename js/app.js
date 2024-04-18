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

const personas = [
    new Persona('Francisco'),
    new Persona('Daniella')
];

function MostrarLista(){
    let texto = '';

    for(let person of personas){
        texto += `<li>${ person.nombre } </li>`
    }

    var datosGuardados = localStorage.getItem('personas');
    var datosRecuperados = JSON.parse(datosGuardados);

    var mesaje = ''
    for(let x of datosRecuperados){
        mesaje += `<li>${ x._nombre } </li>`
    }

    document.getElementById('personas').innerHTML = mesaje;
    document.getElementById('MostrarLocal').innerHTML = mesaje;

    //this.MostrarLocaLista()
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    if(nombre != ''){
        const persona = new Persona(nombre.value);
        personas.push(persona);
        this.MostrarLista();
        //this.MostrarLocaLista();
        
        var datosJSON = JSON.stringify(personas)
        localStorage.setItem('personas', datosJSON);
    }else{
        alert('No se puede agregar en Null')
        console.log('No se puede agregar en Null')
    }

}

/*const fomu = document.forms['forma'];
const Nombre = formu['nombre'];*/

const ejemploPersona = {
    _nombre: "Antonio"
}

function MostrarLocaLista(){

    var datosJSON = JSON.stringify(ejemploPersona)
    localStorage.setItem('ejemploPersona', datosJSON);

    var datosGuardados = localStorage.getItem('ejemploPersona');
    var datosRecuperados = JSON.parse(datosGuardados);

    var mesaje = datosRecuperados._nombre;

    console.log(datosRecuperados._nombre)

    document.getElementById('MostrarLocal').innerHTML = mesaje;
}