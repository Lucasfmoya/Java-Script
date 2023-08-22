
let roberto = prompt("Cuanto dinero tienes Roberto ?");

let pedro = prompt("Cuanto dinero tienes Pedro ?");

let cofla = prompt("Cuanto dinero tienes Cofla ?");

cofla = parseFloat(cofla);




if (roberto >=0.6 && roberto < 1){

    alert("Roberto te alcanza para el helado de agua");

}
else if (roberto >= 1 && roberto < 1.6){
    alert("Roberto te alcanza para el helado de crema");
}

else if (roberto >= 1.6 && roberto < 1.7){
    alert("Roberto te alcanza para el helado 'Heladix'");
}
else if (roberto >= 1.7 && roberto < 1.8){
    alert("Roberto te alcanza para el helado 'Heladovich'");
}
else if (roberto >= 1.8 && roberto < 2.9){
    alert("Roberto te alcanza para el helado 'Helardo'");
}
else if (roberto >= 2.9){
    alert("Roberto te alcanza para el helado 'Heladix' o el pote de 1/4 kg");
}
else {
    alert("Roberto, No podes comprar helado");
}



if (pedro >=0.6 && pedro < 1){

    alert("Pedro Te alcanza para el helado de agua");

}
else if (pedro >= 1 && pedro < 1.6){
    alert("Pedro te alcanza para el helado de crema");
}

else if (pedro >= 1.6 && pedro < 1.7){
    alert("Pedro te alcanza para el helado 'Heladix'");
}
else if (pedro >= 1.7 && pedro < 1.8){
    alert("Pedro te alcanza para el helado 'Heladovich'");
}
else if (pedro >= 1.8 && pedro < 2.9){
    alert("Pedro te alcanza para el helado 'Helardo'");
}
else if (pedro >= 2.9){
    alert("Pedro te alcanza para el helado 'Heladix' o el pote de 1/4 kg");
}
else {
    alert("Pedro, No podes comprar helado");
}



if (cofla >=0.6 && cofla < 1){

    alert("Cofla Te alcanza para el helado de agua");
    alert("y te sobra " + (cofla - 0.6));

}
else if (cofla >= 1 && cofla < 1.6){
    alert("Cofla Te alcanza para el helado de crema");
    alert("y te sobra " + (cofla - 1));
}

else if (cofla >= 1.6 && cofla < 1.7){
    alert("Cofla Te alcanza para el helado 'Heladix'");
    alert("y te sobra " + (cofla - 1.6));
}
else if (cofla >= 1.7 && cofla < 1.8){
    alert("Cofla Te alcanza para el helado 'Heladovich'");
    alert("y te sobra " + (cofla - 1.7));
}
else if (cofla >= 1.8 && cofla < 2.9){
    alert("Cofla Te alcanza para el helado 'Helardo'");
    alert("y te sobra " + (cofla - 1.8));
}
else if (cofla >= 2.9){
    alert("Cofla Te alcanza para el helado 'Heladix' o el pote de 1/4 kg");
    alert("y te sobra " + (cofla - 2.9));
}
else {
    alert("Cofla No podes comprar helado");
}
