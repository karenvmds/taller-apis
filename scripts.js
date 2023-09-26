// Trae el botón del DOM
const botonBuscar = document.getElementById("botonBuscar");

// Escucha el clic de búsqueda de personaje
botonBuscar.addEventListener("click", async () => {

    var personaje = document.getElementById("buscador").value;
    const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;

    var personajeInfo = await fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const resultadoBusqueda = document.getElementById("resultadoBusqueda");
        resultadoBusqueda.innerHTML="";
        for(let i =0; i< 20; i++){
            const imagen = data.results[i].image;
            const titulo = data.results[i].name;
            const descripcion = data.results[i].species;
        
            //lo carga en el HTML en este formato
            resultadoBusqueda.innerHTML +=`
                    <div class="personaje">
                        <div>
                            <img src="${imagen}" alt="${titulo}">
                        </div>
                        <div>
                            <h3>${titulo}</h3>
                            <p><strong>Descripción:</strong> ${descripcion}</p>
                        </div>
                    </div>`;
        }
    })

    
})
