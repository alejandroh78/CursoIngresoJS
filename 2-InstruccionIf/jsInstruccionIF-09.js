//alejandro holik
//ejericio 9

/*
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	var valorRandom;
	var minimo;
	var maximo;

	minimo = 1;
	maximo = 20;

	valorRandom = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	if (valorRandom > 0 && valorRandom < 11){
		alert(valorRandom);	
	}
	

}