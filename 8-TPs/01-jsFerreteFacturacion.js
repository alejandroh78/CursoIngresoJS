/*
nombre: Alejandro
apellido: Holik

1.Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var calculoSuma;

    precioUno =  txtIdPrecioUno.value;
    precioUno =  parseInt(precioUno);

    precioDos =  txtIdPrecioDos.value;
    precioDos =  parseInt(precioDos);

    precioTres =  txtIdPrecioTres.value;
    precioTres =  parseInt(precioTres);

    calculoSuma = (precioUno + precioDos + precioTres);
    
    alert(calculoSuma);
	
}
function Promedio () 
{

    var precioUno;
    var precioDos;
    var precioTres;
    var calculoPromedio;

    precioUno =  txtIdPrecioUno.value;
    precioUno =  parseInt(precioUno);

    precioDos =  txtIdPrecioDos.value;
    precioDos =  parseInt(precioDos);

    precioTres =  txtIdPrecioTres.value;
    precioTres =  parseInt(precioTres);

    calculoPromedio = (precioUno + precioDos + precioTres) / 3;
    
    alert(calculoPromedio);

	
}
function PrecioFinal () 
{

    var precioUno;
    var precioDos;
    var precioTres;
    var iva;
    var calculoPrecioFinal;

    precioUno =  txtIdPrecioUno.value;
    precioUno =  parseInt(precioUno);

    precioDos =  txtIdPrecioDos.value;
    precioDos =  parseInt(precioDos);

    precioTres =  txtIdPrecioTres.value;
    precioTres =  parseInt(precioTres);

    iva = 21;
    calculoPrecioFinal = ((precioUno + precioDos + precioTres) * iva) / 100;
    
    alert(calculoPrecioFinal);
	
}