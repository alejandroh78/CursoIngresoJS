/*
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

	importe = parseInt(txtIdImporte.value);	
	valorPorcentaje = 25;

	calculoPorcentaje = (importe * valorPorcentaje) / 100;
	calculoResultado = (importe-calculoPorcentaje);
	txtIdResultado.value = calculoResultado;

}
