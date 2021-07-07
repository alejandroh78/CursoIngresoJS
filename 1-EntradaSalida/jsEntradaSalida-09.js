/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let varSueldo;
	let varValorPorcentaje;
	let varCalculo;

	varSueldo = parseInt(txtIdSueldo.value);	
	varValorPorcentaje = 10;

	varCalculo = (varSueldo * varValorPorcentaje) / 100;

	txtIdResultado.value = varCalculo;
	
}
