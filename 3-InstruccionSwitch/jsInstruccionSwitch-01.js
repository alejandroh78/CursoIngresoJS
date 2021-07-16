
/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	var mes;
	var mensaje;
	
	mes =txtIdMes.value;

	switch (mes) {
		case "Enero":
			mensaje = "que comiences bien el año!!!";
			alert(mensaje);
			break;
		case "Marzo":
			mensaje = "a clases!!!";
			alert(mensaje);
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!";
			alert(mensaje);
			break;
		case "Diciembre":
			mensaje = "Felices fiesta!!!";
			alert(mensaje);
			break;
	}




}//FIN DE LA FUNCIÓN