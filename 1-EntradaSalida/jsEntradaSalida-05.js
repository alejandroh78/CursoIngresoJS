/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	var varNombre;
	var varEdad;

	varNombre = txtIdNombre.value;	
	varEdad = txtIdEdad.value;	

	alert("Usted se llama " + varNombre + " y tiene " + varEdad + " años");
}

