/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let varNumeroDividendo;
	let varNumeroDivisor;
	let varResto;
	let varMensaje;

	varNumeroDividendo = parseInt(txtIdNumeroDividendo.value);	
	varNumeroDivisor = parseInt(txtIdNumeroDivisor.value);	

	varResto = (varNumeroDividendo % varNumeroDivisor);
	varMensaje = "El resto es ";
	alert(varMensaje + varResto);
	
}
