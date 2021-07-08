/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var valorPorcentaje;
	var calculo;

	sueldo = txtIdSueldo.value;	
	sueldo = parseInt(sueldo);	
	valorPorcentaje = 10;

	calculo = (sueldo * valorPorcentaje) / 100;

	txtIdResultado.value = calculo;
	
}
