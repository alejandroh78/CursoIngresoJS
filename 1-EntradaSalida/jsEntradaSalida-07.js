/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let varNumeroUno;
	let varNumeroDos;
	let varCalculo;
	let varMensaje;

	varNumeroUno = parseInt(txtIdNumeroUno.value);	
	varNumeroDos = parseInt(txtIdNumeroDos.value);	
	varCalculo = (varNumeroUno + varNumeroDos);
	varMensaje = "La suma es ";
	alert(varMensaje + varCalculo);

}

function restar()
{
	let varNumeroUno;
	let varNumeroDos;
	let varCalculo;
	let varMensaje;

	varNumeroUno = parseInt(txtIdNumeroUno.value);	
	varNumeroDos = parseInt(txtIdNumeroDos.value);	
	varCalculo = (varNumeroUno - varNumeroDos);
	varMensaje = "La resta es ";
	alert(varMensaje + varCalculo);

}

function multiplicar()
{ 
	let varNumeroUno;
	let varNumeroDos;
	let varCalculo;
	let varMensaje;

	varNumeroUno = parseInt(txtIdNumeroUno.value);	
	varNumeroDos = parseInt(txtIdNumeroDos.value);	
	varCalculo = (varNumeroUno * varNumeroDos);
	varMensaje = "La multiplicacion es ";
	alert(varMensaje + varCalculo);

}

function dividir()
{
	let varNumeroUno;
	let varNumeroDos;
	let varCalculo;
	let varMensaje;

	varNumeroUno = parseInt(txtIdNumeroUno.value);	
	varNumeroDos = parseInt(txtIdNumeroDos.value);	
	varCalculo = (varNumeroUno / varNumeroDos);
	varMensaje = "La division es ";
	alert(varMensaje + varCalculo);
	
}

