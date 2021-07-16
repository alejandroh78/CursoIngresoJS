//alejandro holik
//ejericio 8

/*
Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{
	var edad;
	var objEstadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	
	objEstadoCivil = estadoCivil.value;

	/*
	marina encontre dos opciones para resolverlo
	*/
	
	//opcion con un IF
	if (edad > 17 && objEstadoCivil == "Soltero"){
		alert("Es soltero y no es menor");
	} 

	//otra forma de resolver pero con dos IF
	if (edad > 17){
		if (objEstadoCivil == "Soltero"){
			alert("Es soltero y no es menor");
		}
	} 
}

