
/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días
*/

function mostrar()
{
	var mes;
	var mensaje;
	
	mes =txtIdMes.value;

	switch (mes) {
		case "Enero": 
		case "Marzo":
		case "Mayo":
		case "Julio":	
		case "Agosto":	
		case "Octubre":
		case "Diciembre":		
			mensaje = "Este mes tiene 31 dias";
			alert(mensaje);
			break;

		case "Febrero":	
			mensaje = "Este mes tiene 28 dias";
			alert(mensaje);
			break;
		default:
			mensaje = "Este mes tiene 30 dias";
			alert(mensaje);
	}
}