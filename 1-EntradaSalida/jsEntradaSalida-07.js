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
	mensaje = "La suma es " + calculo;
	alert(mensaje);

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
	mensaje = "La resta es " + calculo;
	alert(mensaje);

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
	mensaje = "La multiplicacion es " + calculo;
	alert(mensaje);

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
	mensaje = "La division es " + calculo;
	alert(mensaje);
	
}

