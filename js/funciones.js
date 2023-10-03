// Construcción de objetos apartir de la clase KitCambio;

class KitCambio {
    constructor(id, imagen, nombre, descripcion, precio, marca) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.marca = marca;

    }
}

const kitCambioDeAceite = [];

kitCambioDeAceite.push(new KitCambio("Chevrolet-1", "./img/prisma.png", "Kit Service Chevrolet Onix/Prisma 1.4", "Aceite + filtro de aceite + filtro de aire", 50000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Chevrolet-2", "./img/cruze.png", "Kit Service Chevrolet Cruze 1.4", "Aceite + filtro de aceite + filtro de aire", 60000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Chevrolet-3", "./img/tracker.png", "Kit Service Chevrolet Tracker 1.8", "Aceite + filtro de aceite + filtro de aire", 75000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Chevrolet-4", "./img/corsa.png", "Kit Service Chevrolet Corsa Classic 1.4 / 1.6", "Aceite + filtro de aceite + filtro de aire", 50000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Chevrolet-5", "./img/spin.png", "Kit Service Chevrolet Spin 1.4", "Aceite + filtro de aceite + filtro de aire", 50000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Chevrolet-6", "./img/celta.png", "Kit Service Chevrolet Celta 1.4 / 1.6", "Aceite + filtro de aceite + filtro de aire", 50000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Chevrolet-7", "./img/s10.png", "Kit Service Chevrolet S-10 2.5", "Aceite + filtro de aceite + filtro de aire", 85000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Chevrolet-8", "./img/sonic.png", "Kit Service Chevrolet Sonic 1.8", "Aceite + filtro de aceite + filtro de aire", 70000, "chevrolet"));
kitCambioDeAceite.push(new KitCambio("Citroen-1", "./img/c3.png", "Kit Service Citroen C3 1.5", "Aceite + filtro de aceite + filtro de aire", 65000, "citroen"));
kitCambioDeAceite.push(new KitCambio("Citroen-2", "./img/c-elysse.png", "Kit Service Citroen C-Elysse 1.6 Thp", "Aceite + filtro de aceite + filtro de aire", 85000, "citroen"));
kitCambioDeAceite.push(new KitCambio("Citroen-3", "./img/cactus.png", "Kit Service Citroen Cactus 1.6 16v", "Aceite + filtro de aceite + filtro de aire", 70000, "citroen"));
kitCambioDeAceite.push(new KitCambio("Citroen-4", "./img/berlingo.png", "Kit Service Citroen Berlingo 1.6 nafta", "Aceite + filtro de aceite + filtro de aire", 65000, "citroen"));
kitCambioDeAceite.push(new KitCambio("Citroen-5", "./img/c4.png", "Kit Service Citroen C4 1.6 nafta", "Aceite + filtro de aceite + filtro de aire", 65000, "citroen"));
kitCambioDeAceite.push(new KitCambio("Citroen-6", "./img/jumpy.png", "Kit Service Citroen Jumpy 1.6 Hdi", "Aceite + filtro de aceite + filtro de aire", 80000, "citroen"));
kitCambioDeAceite.push(new KitCambio("Fiat-1", "./img/cronos.png", "Kit Service Fiat Cronos/Argo 1.3", "Aceite + filtro de aceite + filtro de aire", 55000, "fiat"));
kitCambioDeAceite.push(new KitCambio("Fiat-2", "./img/argo.png", "Kit Service Fiat Cronos/Argo 1.8", "Aceite + filtro de aceite + filtro de aire", 65000, "fiat"));
kitCambioDeAceite.push(new KitCambio("Fiat-3", "./img/toro.png", "Kit Service Fiat Toro 2.0 Diesel", "Aceite + filtro de aceite + filtro de aire", 85000, "fiat"));
kitCambioDeAceite.push(new KitCambio("Fiat-4", "./img/mobi.png", "Kit Service Fiat Mobi 1.4", "Aceite + filtro de aceite + filtro de aire", 60000, "fiat"));
kitCambioDeAceite.push(new KitCambio("Fiat-6", "./img/linea.png", "Kit Service Fiat Linea 1.8", "Aceite + filtro de aceite + filtro de aire", 65000, "fiat"));
kitCambioDeAceite.push(new KitCambio("Fiat-7", "./img/palio-novo.png", "Kit Service Fiat Palio 1.4", "Aceite + filtro de aceite + filtro de aire", 50000, "fiat"));
kitCambioDeAceite.push(new KitCambio("Fiat-8", "./img/palio.png", "Kit Service Fiat Palio/Siena 1.4 fire", "Aceite + filtro de aceite + filtro de aire", 50000, "fiat"));
kitCambioDeAceite.push(new KitCambio("Vw-1", "./img/gol.png", "Kit Service Gol Trend/Voyage/Suran", "Aceite + filtro de aceite + filtro de aire", 50000, "volkswagen"));
kitCambioDeAceite.push(new KitCambio("Vw-2", "./img/polo.png", "Kit Service Suran/Polo Msi", "Aceite + filtro de aceite + filtro de aire", 65000, "volkswagen"));
kitCambioDeAceite.push(new KitCambio("Vw-3", "./img/up.png", "Kit Service Up", "Aceite + filtro de aceite + filtro de aire", 60000, "volkswagen"));
kitCambioDeAceite.push(new KitCambio("Vw-4", "./img/amarok.png", "Kit Service Amarok", "Aceite + filtro de aceite + filtro de aire", 95000, "volkswagen"));


// local storage de todos los productos de la página;
localStorage.setItem("todos-los-productos", JSON.stringify(kitCambioDeAceite));


// Obteniendo elementos del html y creando algunas variables necesarias;
const botonesPorMarcas = document.querySelectorAll(".botones__marcas")
const kitPorMarcas = document.querySelector("#kitPorMarcas");
const titulo = document.querySelector("#titulo");
const carrito = document.querySelector("#carrito");
let botonAgregar;
let productosCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

// Función para validar si existen items en el carrito;
const validarCarrito = () => {
    if (productosEnCarritoLS){
        productosCarrito = JSON.parse(productosEnCarritoLS);
    } else{
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
    const kitAgregado = kitCambioDeAceite.find(kit => kit.id === idBoton);

    const kitEnCarrito = productosCarrito.find(kit => kit.id === idBoton);
    kitEnCarrito ? kitEnCarrito.cantidad++ : (kitAgregado.cantidad = 1, productosCarrito.push(kitAgregado));

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
        <div class="col-md-3 mt-5 tarjetas">
            <div class="row">
                <div class="col">
                    <img src="${kit.imagen}" class="img-fluid imagen__auto" alt="${kit.descripcion}">
                </div>
            </div>
            <div class="row">
                <div class="col d-flex flex-column justify-content-between">
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
                ? kitCambioDeAceite.filter(kit => kit.marca === marcaId)
                : marcaId === "otrasMarcas"
                    ? [] 
                    : kitCambioDeAceite;

            cargarKits(marcaSeleccionada);
        });
    });
};


