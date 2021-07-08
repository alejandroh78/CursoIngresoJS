/*
nombre: Alejandro
apellido: Holik

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

