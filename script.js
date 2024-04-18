/**/

/*var datos = {
    nombre: document.querySelector('#nombre').value,
    apellido: document.querySelector('#email').value,
    edad: document.querySelector('#edad').value
}*/


/*let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

function nextPage(){
    if(currentPage < totalPages){
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage++;
        document.getElementById(`page${currentPage}`).classList.add('active');
    }
}

function prevPage(){
    if(currentPage > 1){
        document.getElementById(`page${currentPage}`).classList.remove('active');
        currentPage--;
        document.getElementById(`page${currentPage}`).classList.add('.active');
    }
}*/



function openTab(evt, tabName){
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i <tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active", "");
    }

    BtnAgregar.style.display = "block"
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active";

    if(tabName === 'tab0'){
        BtnAgregar.style.display = 'none'
    }
}

/* Mostrar Datos */

let listaPersona = [];

const objPersona = {
    id: '',
    nombre: '',
    apellido: '',
    edad: '',
    email: ''
}

let editado = false;

const formulario = document.getElementById('formulario');
const identificacion = document.getElementById('identi');
const Nombre = document.getElementById('nombre');
const Apellido = document.getElementById('apellido');
const Edad = document.getElementById('edad');
const Email = document.getElementById('email');
const BtnAgregar = document.querySelector('#btnAgregar');
//BtnAgregar.disable = true;

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(identificacion.value === '' || Nombre.value === '' || Apellido.value === ''){
        MensajeToad('Todo los Campos deben contener datos', false)
        return;
    }

    if(editado){
        EditarPersona();
        editado = false;

    } else {
        objPersona.id = identificacion.value;
        objPersona.nombre = Nombre.value;
        objPersona.apellido = Apellido.value;
        objPersona.edad = Edad.value;
        objPersona.email = Email.value;

        AgregarPersona();
    }
}

function AgregarPersona() {
    listaPersona.push({...objPersona});
    MensajeToad("Se agrego con Exito", true)

    MostrarPersona();
    formulario.reset();
    LimpiarObjeto();
}

function LimpiarObjeto() {
    objPersona.id = '';
    objPersona.nombre = '';
    objPersona.apellido = '';
    objPersona.edad = '';
    objPersona.email = '';
}

function MostrarPersona() {

    LimpiarHTML();
    const divPersona = document.querySelector('.divPersona');

    listaPersona.forEach(x => {
        const {id, nombre, apellido, edad, email} = x;

        const Linea = document.createElement('p');
        const SLinea = document.createElement('p');

        Linea.textContent = `${id} - ${nombre} - ${apellido} - ${edad} - ${email}`
        //SLinea.textContent = `${nombre} - ${apellido} - ${edad} - ${email}`

        Linea.append(SLinea)
        Linea.dataset.id = id;

        const editarBoton = document.createElement('button');
        editarBoton.onclick = () => CargarPersona(x);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        Linea.append(editarBoton)

        const eliminarBoton = document.createElement('button');
        eliminarBoton.onclick = () => EliminarPersona(id);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        Linea.append(eliminarBoton)

        const hr = document.createElement('hr');

        divPersona.appendChild(Linea);
        divPersona.appendChild(hr);
    });
}

function CargarPersona(x){
    console.log(x)
    const {id, nombre, apellido, edad, email} = x;

    identificacion.value = id
    Nombre.value = nombre;
    Apellido.value = apellido;
    Edad.value = edad;
    Email.value = email;

    objPersona.id = id;

    formulario.querySelector('button[type="submit"]').textContent = "Actualizar";
    editado = true;
    identificacion.disabled = true;
}

function EditarPersona(){
    objPersona.nombre = Nombre.value;
    objPersona.apellido = Apellido.value;
    objPersona.edad = Edad.value;
    objPersona.email = Email.value;

    listaPersona.map(x => {

        if(x.id === objPersona.id){
            x.id = objPersona.id;
            x.nombre = objPersona.nombre;
            x.apellido = objPersona.apellido;
            x.edad = objPersona.edad;
            x.email = objPersona.email;
        }
    });

    LimpiarHTML();
    MostrarPersona();
    formulario.reset();

    formulario.querySelector('button[type=submit]').textContent = 'Agregar';
    editado = false;
    identificacion.disabled = false;
}

function EliminarPersona(id){
    listaPersona = listaPersona.filter(x => x.id !== id);

    LimpiarHTML();
    MostrarPersona();
}

function LimpiarHTML(){
    const person = document.querySelector('.divPersona')

    while(person.firstChild) {
        person.removeChild(person.firstChild);
    }
}

function MensajeToad(Mensaje, res) {
    var x = document.getElementById('toasd');
    x.className = 'show';
    x.innerText = Mensaje
    if(res === true){
        x.style.backgroundColor = "green";
    }else {
        x.style.backgroundColor = "Red"
    }
    setTimeout(function(){ x.className = x.className.replace('show', ""); }, 3000);
}

function ValidacionAgregar(){
    if(Nombre.value === '') {
        BtnAgregar.style.display = "none";
    }
    
    if(Nombre.value !== '') {
        BtnAgregar.style.disable = "block";
    }
}