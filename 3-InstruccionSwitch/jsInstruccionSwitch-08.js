
/*
Al seleccionar un destino informar
 si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = txtIdDestino.value;
	
	switch (destinoIngresado) {
		case "Bariloche":
		case "Ushuaia":
			mensaje = ("En " + destinoIngresado + " hace frio");
			alert(mensaje);
			break;
		case "Cataratas":
		case "Mar del plata":
			mensaje = ("En " + destinoIngresado + " hace calor");
			alert(mensaje);
			break;
	}

}//FIN DE LA FUNCIÓN