/*
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	var mes;
	var mensaje;
	
	mes =txtIdMes.value;

	switch (mes) {

		case "Febrero":	
			mensaje = "Este mes no tiene más de 29 días";
			alert(mensaje);
			break;
		default:
			mensaje = "Este mes tiene 30 o más días";
			alert(mensaje);
	}
}