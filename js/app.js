// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;



// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(); // muestra los autos al cargar


    // llena las opciones de años

    llenarSelect();

})






// Funciones
function mostrarAutos() {
    autos.forEach( auto => {
        const { marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmición: ${transmision} - Precio: ${precio} - Color: ${color}
            
        
        
        
        
        
        `;

        //  insertar en el html
        resultado.appendChild(autoHTML)
    })
}


// Genera los años del select
function llenarSelect() {
    
    for( let i = max; i >= min; i--) {
    const opcion = document.createElement('option');
    opcion.valvue = i;
    opcion.textContent = i;
    year.appendChild(opcion); // Agrega las opciones de año al select


    }

}