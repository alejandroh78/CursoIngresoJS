/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let varImporte;
	let varValorPorcentaje;
	let varCalculoPorcentaje;
	let varCalculoResultado;

	varImporte = parseInt(txtIdImporte.value);	
	varValorPorcentaje = 25;

	varCalculoPorcentaje = (varImporte * varValorPorcentaje) / 100;
	varCalculoResultado = (varImporte-varCalculoPorcentaje);
	txtIdResultado.value = varCalculoResultado;

}
