//alejandro holik
//ejericio 7

/*
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

*/

function mostrar()
{

	var edad;
	var objEstadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	objEstadoCivil = estadoCivil.value;
	
	/*
	if (edad < 18 && objEstadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	} 
	*/

	if (edad < 18){
		if (objEstadoCivil != "Soltero"){
			alert("Es muy pequeño para NO ser soltero");
		}
	} 


}