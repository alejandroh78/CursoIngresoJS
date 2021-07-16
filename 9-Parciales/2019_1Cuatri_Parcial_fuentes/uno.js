
/*
alejandro holik

parcial 2019
ejericio 1

Realizar el algoritmo que pida los datos necesarios para 
un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{

    var objInputPrompt;
    var cantidadLados;
    var calculo;
    var mensaje;

    cantidadLados = 3;
    
    objInputPrompt = prompt("Ingrese la medida para un triángulo equilátero");

    calculo = (objInputPrompt * cantidadLados);
    mensaje = ("El perimetro de su tringulo es " + calculo);

    alert(mensaje);

}
