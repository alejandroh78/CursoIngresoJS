/*
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: 
bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: 
bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/

function mostrar()
{
	var estacion;
	var destino;
	var precioEstadia;
	var aumento;
	var descuento;
	var precioFinal;
	var precioCalculo;
	
	estacion = txtIdEstacion.value;
	destino  = txtIdDestino.value;
	precioEstadia = 15000;
	aumento = 0;
	descuento = 0;

	switch (estacion) {
		case "Invierno":
			
			if (destino == "Bariloche"){
				aumento = 20;
			}
			
			if (destino == "Cataratas" || destino == "Cordoba"){
				descuento = 10;
			}

			if (destino == "Mar del plata"){
				descuento = 20;
			}

			break;
		
		case "Verano":

			if (destino == "Bariloche"){
				descuento = 20;
			}
			
			if (destino == "Cataratas" || destino == "Cordoba"){
				aumento = 10;
			}

			if (destino == "Mar del plata"){
				aumento = 20;
			}		

			break;
		
		case "Otoño":
		case "Primavera":
			
			if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata"){
				aumento = 10;
			}

	
			break;		

	}

	if (aumento > 0){
		precioCalculo = (precioEstadia * aumento) /100 ;
		precioFinal = (precioEstadia + precioCalculo);
	}
	
	if (descuento > 0){
		precioCalculo = (precioEstadia * descuento) /100 ;
		precioFinal = (precioEstadia - precioCalculo);
	}	


	alert(precioFinal);
	


/*
en Invierno: 
bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: 
bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento
*/

}