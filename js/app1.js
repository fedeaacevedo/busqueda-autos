//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const resultado = document.querySelector('#resultado');

//Creamos los años de los autos
const max = new Date().getFullYear();
const min = max - 15;

//Generar un Objeto con la busqueda
const datosBusqueda={
    marca:'',
    year :'',
    minimo : '',
    maximo : '',
    puertas: '',
    transmision: '',
    Color: '',



}





//Eventos
document.addEventListener('DOMContentLoaded', () =>{
    mostrarAutos(autos); //Muestra los autos al cargar

    //Llena la seccion de años
    llenarSelect();
    

    for (let i = max; i >= min; i--){
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//Agrega las opciones de años al select
    }
})


//Event listener para los select de busqueda. Creamos uno para item del objeto
marca.addEventListener('change', e=>{
    datosBusqueda.marca= e.target.value;

    filtrarAuto();


});

year.addEventListener('input', e => {
    datosBusqueda.year = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


maximo.addEventListener('input', e => {
    datosBusqueda.maximo = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});


puertas.addEventListener('input', e => {
    datosBusqueda.puertas = Number(e.target.value);
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});

transmision.addEventListener('change', e=>{
    datosBusqueda.transmision= e.target.value;

    filtrarAuto();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value
    // Mandar llamar la función de filtrar Autos
    filtrarAuto();
});



//FUNCIONES
function mostrarAutos(autos){

    limpiarHTML(); //Limpia el HTML previo para mostrar solamente nuestra busqueda

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo}  ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: ${auto.precio} - Color: ${auto.color}</p>
        `;
 
        //Inserta en el HTML
         resultado.appendChild(autoHTML);
    }) 

}

//Limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

}

//Genera los años del select
function llenarSelect(){
    
}

//Filtra el auto segun nuestra eleccion
function filtrarAuto(){
    const resultado = autos.filter( filtrarMarca ). filter (filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).
    filter(filtrarPuertas).filter(filtrarColor).filter(filtrarTransmision)
    console.log(resultado);
    mostrarAutos(resultado);
    if(resultado.length){
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado(){
    const noResultado= document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent= 'No hay resultados';

    resultado.appendChild(noResultado)


}
//Filtra la marca segun nuestra eleccion
// Aplica los filtros
function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}