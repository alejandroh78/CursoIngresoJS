/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var calculo;
	var mensaje;

	numeroUno = parseInt(txtIdNumeroUno.value);	
	numeroDos = parseInt(txtIdNumeroDos.value);	
	calculo = (numeroUno + numeroDos);
	mensaje = "La suma es ";
	alert(mensaje + calculo);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var calculo;
	var mensaje;

	numeroUno = parseInt(txtIdNumeroUno.value);	
	numeroDos = parseInt(txtIdNumeroDos.value);	
	calculo = (numeroUno - numeroDos);
	mensaje = "La resta es ";
	alert(mensaje + calculo);

}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var calculo;
	var mensaje;

	numeroUno = parseInt(txtIdNumeroUno.value);	
	numeroDos = parseInt(txtIdNumeroDos.value);	
	calculo = (numeroUno * numeroDos);
	mensaje = "La multiplicacion es ";
	alert(mensaje + calculo);

}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var calculo;
	var mensaje;

	numeroUno = parseInt(txtIdNumeroUno.value);	
	numeroDos = parseInt(txtIdNumeroDos.value);	
	calculo = (numeroUno / numeroDos);
	mensaje = "La division es ";
	alert(mensaje + calculo);
	
}

