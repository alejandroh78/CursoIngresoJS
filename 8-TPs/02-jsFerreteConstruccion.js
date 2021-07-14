/*
nombre: Alejandro
apellido: Holik

2.	Para el departamento de Construcción:
A.  mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular
    y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y 
    se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
    debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;
    var ancho;
    var cantidadHilos;
    var cantidadLados;
    var calculo;
    var mensaje;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    cantidadHilos = 3;
    cantidadLados = 2;
    largo = largo * cantidadLados;
    ancho = ancho * cantidadLados;

    calculo  = ((largo + ancho) * cantidadHilos);
    
    mensaje = ("Para las medidas del terreno ingresado se necesitan " + calculo + " metros de alambre");

    alert(mensaje);

}

function Circulo () 
{

    var radio;
    var cantidadHilos;
    var calculo;
    var perimetro;
    var Pi;
    
    radio = txtIdRadio.value;
    radio = parseInt(radio);

    Pi = 3.14;
    cantidadHilos = 3;
    perimetro = 2 * Pi * radio;
    calculo  = (perimetro * cantidadHilos);
    
    mensaje = ("Para las medidas del terreno ingresado se necesitan " + calculo + " metros de alambre");

    alert(mensaje);

}

function Materiales () 
{

    var largo;
    var ancho;
    var bolsaCemento;
    var bolsaCal;
    var calculoTerreno;
    var calculoCemento;
    var calculoCal;
    
    var mensaje;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    bolsaCemento = 2;
    bolsaCal = 3;

    calculoTerreno  = (largo * ancho);
    calculoCemento  = (calculoTerreno * bolsaCemento);
    calculoCal      = (calculoTerreno * bolsaCal);

    mensaje = ("Para las medidas del terreno ingresado se necesitan " + calculoCemento + " bolsas de cemento y " + calculoCal + " bolsas de cal.");

    alert(mensaje);

}