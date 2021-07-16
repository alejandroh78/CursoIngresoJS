/*
alejandro holik

parcial 2019
ejericio 2

Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/

function mostrar()
{

    var nombreParejaUno;
    var nombreParejaDos;
    var pesoParejaUno;
    var pesoParejaDos;

    var pesoPromedio;
    var pesoTotal;
    var mensaje;

    nombreParejaUno = prompt("Ingrese el nombre suyo");
    nombreParejaDos = prompt("Ingrese el nombre de su pareja");

    pesoParejaUno = prompt("Estimado/a, " + nombreParejaUno + " ingrese su peso en KG");
    pesoParejaDos = prompt("Estimado/a, " + nombreParejaDos + " ingrese su peso en KG");

    pesoParejaUno = parseInt(pesoParejaUno);
    pesoParejaDos = parseInt(pesoParejaDos);

    pesoTotal = (pesoParejaUno + pesoParejaDos);
    pesoPromedio = (pesoTotal / 2);

    mensaje = ("Ustedes se llaman " + nombreParejaUno + " y " + nombreParejaDos + " pesan " + pesoParejaUno + " y " + pesoParejaDos + " kilos, que sumados son " + pesoTotal + " kilos y el promedio de peso es " + pesoPromedio + " kilos");

    alert(mensaje);
    
}
