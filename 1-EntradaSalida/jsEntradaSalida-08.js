/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var resto;
	var mensaje;

	numeroDividendo = parseInt(txtIdNumeroDividendo.value);	
	numeroDivisor = parseInt(txtIdNumeroDivisor.value);	

	resto = (numeroDividendo % numeroDivisor);
	mensaje = "El resto es ";
	alert(mensaje + resto);
	
}
