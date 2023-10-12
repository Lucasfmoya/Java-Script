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
kitCambioDeAceite.push(new KitCambio("Ford-1", "./img/ka.png", "Kit Service Ford Ka 1.5", "Aceite + filtro de aceite + filtro de aire", 52000, "ford"));
kitCambioDeAceite.push(new KitCambio("Ford-2", "./img/mondeo.png", "Kit Service Ford Mondeo 2.5", "Aceite + filtro de aceite + filtro de aire", 70000, "ford"));
kitCambioDeAceite.push(new KitCambio("Ford-3", "./img/fiesta.png", "Kit Service Ford Fiesta 1.6", "Aceite + filtro de aceite + filtro de aire", 52000, "ford"));
kitCambioDeAceite.push(new KitCambio("Ford-4", "./img/ecosport-1.5.png", "Kit Service Ford Ecosport 1.5", "Aceite + filtro de aceite + filtro de aire", 55000, "ford"));
kitCambioDeAceite.push(new KitCambio("Ford-5", "./img/ranger.png", "Kit Service Ford Ranger 3.2", "Aceite + filtro de aceite + filtro de aire", 120000, "ford"));
kitCambioDeAceite.push(new KitCambio("Ford-6", "./img/focus.png", "Kit Service Ford Focus 2.0", "Aceite + filtro de aceite + filtro de aire", 60000, "ford"));
kitCambioDeAceite.push(new KitCambio("Nissan-1", "./img/march.png", "Kit Service Nissan March 1.6", "Aceite + filtro de aceite + filtro de aire", 48000, "nissan"));
kitCambioDeAceite.push(new KitCambio("Nissan-2", "./img/kicks.png", "Kit Service Nissan Kicks 1.6", "Aceite + filtro de aceite + filtro de aire", 54000, "nissan"));
kitCambioDeAceite.push(new KitCambio("Nissan-3", "./img/frontier.png", "Kit Service Frontier 2.5", "Aceite + filtro de aceite + filtro de aire", 95000, "nissan"));
kitCambioDeAceite.push(new KitCambio("Nissan-4", "./img/note.png", "Kit Service Nissan Note 1.6", "Aceite + filtro de aceite + filtro de aire", 50000, "nissan"));
kitCambioDeAceite.push(new KitCambio("Peugeot-1", "./img/208.png", "Kit Service Peugeot 208 1.5", "Aceite + filtro de aceite + filtro de aire", 45000, "peugeot"));
kitCambioDeAceite.push(new KitCambio("Peugeot-2", "./img/308.png", "Kit Service Peugeot 308 1.6", "Aceite + filtro de aceite + filtro de aire", 46500, "peugeot"));
kitCambioDeAceite.push(new KitCambio("Peugeot-3", "./img/408.png", "Kit Service Peugeot 408 1.6", "Aceite + filtro de aceite + filtro de aire", 47500, "peugeot"));
kitCambioDeAceite.push(new KitCambio("Peugeot-4", "./img/2008.png", "Kit Service Peugeot 2008 1.6", "Aceite + filtro de aceite + filtro de aire", 45000, "peugeot"));
kitCambioDeAceite.push(new KitCambio("Peugeot-5", "./img/301.png", "Kit Service Peugeot 301 1.6 THP", "Aceite + filtro de aceite + filtro de aire", 65000, "peugeot"));
kitCambioDeAceite.push(new KitCambio("Peugeot-6", "./img/partner.png", "Kit Service Partner 1.6 HDI", "Aceite + filtro de aceite + filtro de aire", 60000, "peugeot"));
kitCambioDeAceite.push(new KitCambio("Renault-1", "./img/kwid.png", "Kit Service Renault Kwid 1.0", "Aceite + filtro de aceite + filtro de aire", 35000, "renault"));
kitCambioDeAceite.push(new KitCambio("Renault-2", "./img/logan.png", "Kit Service Renault Logan 1.6 8v", "Aceite + filtro de aceite + filtro de aire", 40000, "renault"));
kitCambioDeAceite.push(new KitCambio("Renault-3", "./img/clio.png", "Kit Service Renault Clio Mio 1.2", "Aceite + filtro de aceite + filtro de aire", 38000, "renault"));  
kitCambioDeAceite.push(new KitCambio("Renault-4", "./img/sandero.png", "Kit Service Renault Sandero 1.6 16v", "Aceite + filtro de aceite + filtro de aire", 45000, "renault"));
kitCambioDeAceite.push(new KitCambio("Renault-5", "./img/duster.png", "Kit Service Renault Duster 2.0", "Aceite + filtro de aceite + filtro de aire", 60000, "renault"));
kitCambioDeAceite.push(new KitCambio("Renault-6", "./img/captur.png", "Kit Service Renault Captur 2.5", "Aceite + filtro de aceite + filtro de aire", 65000, "renault"));
kitCambioDeAceite.push(new KitCambio("Toyota-1", "./img/hilux.png", "Kit Service Toyota Hilux 2.8", "Aceite + filtro de aceite + filtro de aire", 98000, "toyota"));
kitCambioDeAceite.push(new KitCambio("Toyota-2", "./img/corolla.png", "Kit Service Toyota Corolla 1.8", "Aceite + filtro de aceite + filtro de aire", 65000, "toyota"));
kitCambioDeAceite.push(new KitCambio("Toyota-3", "./img/etios.png", "Kit Service Toyota Etios 1.5", "Aceite + filtro de aceite + filtro de aire", 60000, "toyota"));
kitCambioDeAceite.push(new KitCambio("Toyota-4", "./img/yaris.png", "Kit Service Toyota Yaris 1.5", "Aceite + filtro de aceite + filtro de aire", 60000, "toyota"));


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


const navBar = () => {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("sticky-top", window.scrollY > 0);

} 
window.addEventListener("scroll", navBar);



  