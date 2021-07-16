/*
alejandro holik

IF 
ejercicio 5
*/

function mostrar()
{

	var edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad < 13 || edad > 17){
		alert("Ud no es adolescente");
	}

}