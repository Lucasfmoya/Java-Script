// Obteniendo elementos del html;
let productosCarrito = localStorage.getItem("productos-en-carrito");
productosCarrito = JSON.parse(productosCarrito);
const contenedorCarrito = document.querySelector("#contenedor-carrito");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const carritoComprado = document.querySelector("#carrito-comprado");
const botonesCarrito = document.querySelector("#botonesCarrito");
const botonVaciar = document.querySelector("#botonVaciar");
let botonEliminar = document.querySelector("#botonEliminar");
const sumaTotal = document.querySelector("#sumaTotal");
const botonComprarCarrito = document.querySelector("#botonComprar");
let total = 0;

// Cargamos los seleccionados al carrito;
const cargarProductosAlCarrito = () => {
    if (productosCarrito && productosCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        carritoComprado.classList.add("disabled");
        botonesCarrito.classList.remove("disabled");
        let tableHTML = `
    <table class="table align-middle">
`;

        productosCarrito.forEach(kit => {
            tableHTML += `
        <tr>
            <td><img src="${kit.imagen}" class="imagen__carrito" alt="${kit.descripcion}"></td>
            <td class="w-50"><h5>${kit.nombre}</h5></td>
            <td><h6>$${kit.precio}</h6></td>
            <td><h6>${kit.cantidad}</h6></td>
            <td></td>
            <td>Subtotal</td>
            <td>$${kit.cantidad * kit.precio}</td>
            <td><button id="${kit.id}" class="btn h-75 botonEliminar"><i class='bx bx-trash bx-sm'></i></button></td>
        </tr>
        <tr>
            
        </tr>
    `;
        });
        tableHTML += `
    <tr class="bg-primary">
        <td colspan="5"></td>
        <td colspan="1"><b>Total</b></td>
        <td><b>$${total}</b></td>
    </tr>
</table>`;

        contenedorCarrito.innerHTML = tableHTML;

    } else {
        carritoComprado.classList.add("disabled");
        contenedorCarritoVacio.classList.remove("disabled");
        botonesCarrito.classList.add("disabled");
    };
    botonParaEliminar();
   
};
// Creando botónes para que eliminen el producto al carrito;
const botonParaEliminar = () => {
    botonEliminar = document.querySelectorAll(".botonEliminar");
    botonEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
};
// Eliminamos el elemento que coincide con el id del botón, y recargamos los productos que quedan sin eliminar del carrito;
const eliminarDelCarrito = (e) => {
    const botonId = e.currentTarget.id;
    const index = productosCarrito.findIndex(kit => kit.id === botonId)
    productosCarrito.splice(index, 1);
    console.log(productosCarrito);
    contenedorCarrito.innerHTML = '';
    cargarProductosAlCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));

};

// Botón para vaciar carrito;
const vaciarCarrito = () => {
    productosCarrito.length = 0;
    contenedorCarrito.innerHTML = '';
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    cargarProductosAlCarrito();

};
// Agregando el evento click al botón;
botonVaciar.addEventListener("click", () => {
    Swal.fire({
        title: 'Seguro que desea vaciar el carrito?',
        showDenyButton: true,
        confirmButtonText: 'Si!',
        confirmButtonColor: '#0d6efd',
        denyButtonText: `Mejor no...`,
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Productos eliminados', '', 'success')
            vaciarCarrito();
        } else if (result.isDenied) {
            Swal.fire('Su productos no se eliminaron')
        }
    })
});

// Sumar el total;
const sumaFinal = () => {
    total = productosCarrito.reduce((acumulador, kit) => acumulador + (kit.precio * kit.cantidad), 0)
    return total;
}


// Comprar carrito, vacia el mismo y da un mensaje de agradecimiento;
const comprarCarrito = () => {
    productosCarrito.length = 0;
    contenedorCarrito.innerHTML = '';
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
    cargarProductosAlCarrito();
    Swal.fire({
        icon: 'success',
        title: 'Felicidades!',
        text: 'Su compra se realizo con exito',
    });
    contenedorCarritoVacio.classList.add("disabled");
    carritoComprado.classList.remove("disabled");
};
botonComprar.addEventListener("click", comprarCarrito);

// Navbar con tamaño diferente al hacer scroll;
const navBar = () => {
    const navbar = document.querySelector(".nav-bar");
    navbar.classList.toggle("sticky-top", window.scrollY > 0);
    const buscador = document.querySelector("#buscador");
    buscador.classList.toggle("mt-3", window.scrollY > 0);
    window.addEventListener("scroll", navBar);

} 