/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var varImporte;
	var varValorPorcentaje;
	var varCalculoPorcentaje;
	var varCalculoResultado;

	varImporte = parseInt(txtIdImporte.value);	
	varValorPorcentaje = 25;

	varCalculoPorcentaje = (varImporte * varValorPorcentaje) / 100;
	varCalculoResultado = (varImporte-varCalculoPorcentaje);
	txtIdResultado.value = varCalculoResultado;

}
