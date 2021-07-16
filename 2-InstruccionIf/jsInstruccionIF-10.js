//alejandro holik
//ejericio 10

/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var nota;
	var minimo;
	var maximo;

	minimo = 1;
	maximo = 10;

	nota = Math.round(Math.random() * (maximo - minimo) + minimo);
	
	if (nota < 4){
		alert("Tu nota es " + nota + " - Vamos, la proxima se puede");
	}
	else 
		if (nota >  8){
			alert("Tu nota es " + nota + " - EXCELENTE");
		}
		else  
		{
			alert("Tu nota es " + nota + " - APROBÓ");
		}
}