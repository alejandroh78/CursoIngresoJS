/*3.	
nombre: Alejandro
apellido: Holik

Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    temperatura = temperatura - 32;
    temperatura = temperatura * 5;
    temperatura = temperatura / 9;
    
    alert(temperatura);

}

function CentigradosFahrenheit () 
{

    var temperatura;
    temperatura = txtIdTemperatura.value;
    temperatura = parseInt(temperatura);

    temperatura = temperatura * 1.800;
    temperatura = temperatura + 32;
    
    alert(temperatura);
}
