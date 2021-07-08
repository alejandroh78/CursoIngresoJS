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

	numeroUno = txtIdNumeroUno.value;	
	numeroUno = parseInt(numeroUno);	

	numeroDos = txtIdNumeroDos.value;	
	numeroDos = parseInt(numeroDos);	

	calculo = (numeroUno + numeroDos);
	mensaje = "La suma es " + calculo;
	
	alert(mensaje);

}

