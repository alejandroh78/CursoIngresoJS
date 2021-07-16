
/*
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id.
*/

function mostrar()
{

    var precio;
    var descuento;

    var calculoDescuento;
    var precioFinal;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    descuento = prompt("Ingrese el porcentaje de descuento");
    descuento = parseInt(descuento);

    calculoDescuento = (precio * descuento) / 100;
    precioFinal =  (precio - calculoDescuento);
    
    elPrecioFinal.value = precioFinal;

}
