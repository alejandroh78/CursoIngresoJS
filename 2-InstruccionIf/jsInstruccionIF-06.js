//alejandro holik
//ejericio 6

//Al ingresar una edad debemos informar 
// si la persona es mayor de edad (mas de 18 años) 
// o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad < 13){
			alert("Ud es niño");
	}
	else
	{
		if (edad > 17){
			alert("Ud es mayor de edad");
		}
		else{
			alert("Ud es adolescente");
		}

	}

}
