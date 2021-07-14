/*
nombre: Alejandro
apellido: Holik

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
/*
function mostrarAumento()
{

	var sueldo;
	var valorPorcentaje;
	var calculo;
	var resultado;

	sueldo = txtIdSueldo.value;	
	sueldo = parseInt(sueldo);	
	valorPorcentaje = 10;

	calculo = (sueldo * valorPorcentaje) / 100;
	resultado = sueldo + calculo;

	txtIdResultado.value = resultado;
	
}
*/

/*
nombre: Alejandro
apellido: Holik
EJERCICIO: 9BIS
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{

	var sueldo;
	var valorPorcentaje;
	var calculo;
	var resultado;

	sueldo = txtIdSueldo.value;	
	sueldo = parseInt(sueldo);	
	valorPorcentaje = prompt("Ingrese el porcentaje a calcular ");

	calculo = (sueldo * valorPorcentaje) / 100;
	resultado = sueldo + calculo;

	txtIdResultado.value = resultado;
	
}