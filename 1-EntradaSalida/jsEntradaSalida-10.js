/*
nombre: Alejandro
apellido: Holik
EJERCICIO: 10BIS
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var valorPorcentaje;
	var calculoPorcentaje;
	var calculoResultado;

	importe = txtIdImporte.value;	
	importe = parseInt(importe);	
	valorPorcentaje = prompt("Ingrese el porcentaje de descuento a calcular ");

	calculoPorcentaje = (importe * valorPorcentaje) / 100;
	calculoResultado = (importe-calculoPorcentaje);
	txtIdResultado.value = calculoResultado;

}
