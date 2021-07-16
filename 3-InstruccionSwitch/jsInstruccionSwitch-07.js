
/*
Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var destinoIngresado;
	var mensaje;

	destinoIngresado = txtIdDestino.value;
	
	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = (destinoIngresado + " esta ubicado en el Oeste");
			alert(mensaje);
			break;
		case "Cataratas":
			mensaje = (destinoIngresado + " esta ubicado en el Norte");
			alert(mensaje);
			break;
		case "Mar del plata":
			mensaje = (destinoIngresado + " esta ubicado en el Este");
			alert(mensaje);
			break;
		case "Ushuaia":
			mensaje = (destinoIngresado + " esta ubicado en el Sur");
			alert(mensaje);
			break;
	}

}//FIN DE LA FUNCIÓN