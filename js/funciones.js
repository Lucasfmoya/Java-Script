// Array que va a contener los productos del fetch;
let productos = [];


const creandoFetch = () => {
    fetch("./js/productos.json")
        .then(response => response.json())
        .then(data => {
            productos = data;
            cargarKits(productos);


        });
}

// Obteniendo elementos del html y creando algunas variables necesarias;
const botonesPorMarcas = document.querySelectorAll(".botones__marcas")
const kitPorMarcas = document.querySelector("#kitPorMarcas");
const titulo = document.querySelector("#titulo");
const carrito = document.querySelector("#carrito");
let botonAgregar;
let productosCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
const tituloBusqueda = document.querySelector("#titulo-busqueda");

// Función para validar si existen items en el carrito;
const validarCarrito = () => {
    if (productosEnCarritoLS) {
        productosCarrito = JSON.parse(productosEnCarritoLS);
    } else {
        productosCarrito = [];
    }
};

// Función para pasar a mayúscula la primer letra de una palabra;
const cambiarPrimerLetra = (palabra) => {
    return `${palabra[0].toUpperCase()}${palabra.slice(1)} `
}
// Creando botónes para que agreguen el producuto al carrito;
const botonParaAgregar = () => {
    botonAgregar = document.querySelectorAll(".botonCarrito");
    botonAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);

    });
}
// Agregamos el producto al carrito al hacer click en el botón, si es la primera vez que lo agregamos se pusheea y sino se van sumando las cantidades;
const agregarAlCarrito = (e) => {
    const idBoton = e.currentTarget.id;
    const kitAgregado = productos.find(kit => kit.id === idBoton);

    const kitEnCarrito = productosCarrito.find(kit => kit.id === idBoton);
    kitEnCarrito ? kitEnCarrito.cantidad++ : (kitAgregado.cantidad = 1, productosCarrito.push(kitAgregado));
    Toastify({
        text: "Producto agregado",
        duration: 1000,
        destination: "./carrito.html",
        newWindow: false,
        close: true,
        gravity: "top",
        position: "right",
        style: {
            background: "linear-gradient(to top, #00c6fb 0%, #005bea 100%)",
            borderRadius: "3rem",
            fontWeight: 600,
        },
        offset: {
            y: "3rem"
        }
    }).showToast();
    cantidadEnCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
};

// Actualizamos la cantidad de productos en el carrito;
const cantidadEnCarrito = () => {
    let cantidad = productosCarrito.reduce((acumulador, kit) => acumulador + kit.cantidad, 0);

    carrito.innerHTML = cantidad;

}
// Render de productos filtrados por marca seleccionada;
const cargarKits = (marcaSeleccionada) => {
    kitPorMarcas.innerHTML = "";
    marcaSeleccionada.forEach(kit => {

        kitPorMarcas.innerHTML += `
        <div class="col-md-3 tarjetas">
            <div class="row">
                <div class="col">
                    <img src="${kit.imagen}" class="img-fluid imagen__auto" alt="${kit.descripcion}">
                </div>
            </div>
            <div class="row">
                <div class="col col-xs-12 d-flex flex-column justify-content-between">
                    <h5 class="">${kit.nombre}</h5>
                    <p class="text">${kit.descripcion}</p>
                    <h6>$${kit.precio}</h6>
                    <button id="${kit.id}" class="btn btn-primary botonCarrito">Agregar</button>
                </div>
            </div>
        </div>
        `

    });
    const inputSearch = document.getElementById("inputSearch");
    inputSearch.addEventListener("input", () => {
        const busqueda = inputSearch.value.toLowerCase();
        if (busqueda !== "") {
            tituloBusqueda.classList.remove("d-none");
            titulo.classList.add("d-none");
        } else {
            tituloBusqueda.classList.add("d-none");
            titulo.classList.remove("d-none");
            sinResultados.classList.add("d-none");
        }
        const kitsFiltrados = marcaSeleccionada.filter(kit => {
            
            return kit.nombre.toLowerCase().includes(busqueda) || kit.descripcion.toLowerCase().includes(busqueda);

        });

        mostrarKitsFiltrados(kitsFiltrados);


    });

    botonParaAgregar();

};
// Creando función para filtrar por marcas;
const botonesPorMarca = () => {
    botonesPorMarcas.forEach(boton => {
        boton.addEventListener("click", (e) => {
            botonesPorMarcas.forEach(boton => boton.classList.remove("active"));
            e.currentTarget.classList.add("active");

            const marcaId = e.currentTarget.id;
            titulo.innerHTML = marcaId !== "todasLasMarcas" && marcaId !== "otrasMarcas"
                ? `<h3>${cambiarPrimerLetra(marcaId)}</h3>`
                : marcaId === "otrasMarcas"
                    ? `<h3>Otras marcas...</h3>`
                    : `<h3>Todos los kits</h3>`;

            const marcaSeleccionada = marcaId !== "todasLasMarcas" && marcaId !== "otrasMarcas"
                ? productos.filter(kit => kit.marca === marcaId)
                : marcaId === "otrasMarcas"
                    ? []
                    : productos;

            cargarKits(marcaSeleccionada);
        });
    });
};

// Navbar con tamaño diferente al hacer scroll;
const navBar = () => {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("sticky-top", window.scrollY > 0);
    const divCarrito = document.querySelector("#div-carrito");
    divCarrito.classList.toggle("mt-3", window.scrollY > 0);
    const buscador = document.querySelector("#buscador");
    buscador.classList.toggle("mt-3", window.scrollY > 0);
    window.addEventListener("scroll", navBar);

}


// Función para mostrar los kits filtrados;
const mostrarKitsFiltrados = (kits) => {
    kitPorMarcas.innerHTML = "";
    if (kits.length === 0) {

        let sinResultados = document.querySelector("#sin-resultados");
        sinResultados.classList.remove("d-none");
       
    } else {
        kits.forEach(kit => {
            kitPorMarcas.innerHTML += `
            <div class="col-md-3 tarjetas">
                <div class="row">
                    <div class="col">
                        <img src="${kit.imagen}" class="img-fluid imagen__auto" alt="${kit.descripcion}">
                    </div>
                </div>
                <div class="row">
                    <div class="col col-xs-12 d-flex flex-column justify-content-between">
                        <h5 class="">${kit.nombre}</h5>
                        <p class="text">${kit.descripcion}</p>
                        <h6>$${kit.precio}</h6>
                        <button id="${kit.id}" class="btn btn-primary botonCarrito">Agregar</button>
                    </div>
                </div>
            </div>
            `
            
        });
    
        botonParaAgregar();
    };
    };
    


