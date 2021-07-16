/*4.	
alejandro holik
TP 4

Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
    y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
    var objCantidad;
    var objMarca;
    var precioLampara;   
    var precioFinal; 
    var subtotal;
    var descuento;
    var calcularDescuento;
    var IIBB;
    var precioControlIIBB;
    var calculoIIBB;

    objCantidad = txtIdCantidad.value;
    objCantidad = parseInt(objCantidad);
    objMarca = Marca.value;
    
    precioLampara = 35;
    descuento = 0;
    precioControlIIBB = 120;
    IIBB = 0.10;

    subtotal = (objCantidad * precioLampara);    
    
    if (objCantidad > 5)
    {
        descuento = 0.50;
    }
    else
    {
        if (objCantidad == 5 )
        {
            if (objMarca == "ArgentinaLuz" )
            {
                descuento = 0.40;
            }
            else
            {
                descuento = 0.30;
            }            
        }
        else{

            if (objCantidad == 4)
            {
                if (objMarca == "ArgentinaLuz" || objMarca == "FelipeLamparas")
                {
                    descuento = 0.25;
                }
                else
                {
                    descuento = 0.20;
                }
            }
            else
            {
                if (objCantidad == 3)
                {
                    if (objMarca == "ArgentinaLuz")
                    {
                        descuento = 0.15;
                    }
                    else
                    {
                        if (objMarca == "FelipeLamparas")
                        {
                            descuento = 0.10;
                        }
                        else
                        {
                            descuento = 0.05;
                        }
                    }
                }
            }
        }
    }

    calcularDescuento = (subtotal * descuento);
    alert(calcularDescuento);
    precioFinal = (subtotal - calcularDescuento);
    alert(precioFinal);
    /* precio mayor a 120 calcula IIBB*/
    if (precioFinal > precioControlIIBB)
    {
        calculoIIBB = (precioFinal * IIBB);
        precioFinal = precioFinal + calculoIIBB;
        alert("Ud pago " + calculoIIBB + " en concepto de IIBB");
    }
    
    txtIdprecioDescuento.value = precioFinal;    
    
}

/*
Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 %
    y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    si es  “FelipeLamparas” se hace un descuento del 10 % 
    y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/













/*
function CalcularPrecio () 
{
 	
    var objCantidad;
    var objMarca;
    var precioLampara;
    var IIBB;
   	var subtotal;
    var precioFinal; 
    var calculoIIBB;
    var descuento;

    objCantidad = txtIdCantidad.value;
    objCantidad = parseInt(objCantidad);

    objMarca = Marca.value;

    precioLampara = 35;
    IIBB = 0.10;

    subtotal = (objCantidad * precioLampara);    
    
    if (objCantidad >= 6){
        descuento = (subtotal) * 0.50;
    }
    else if (objCantidad == 5 ){
            if (objMarca == "ArgentinaLuz"){
                descuento = (subtotal) * 0.40;
            }
            else
            {
                descuento = (subtotal) * 0.30;
            }
    }
    else if (objCantidad == 4 ){
            if (objMarca == "ArgentinaLuz" || objMarca == "FelipeLamparas"){
                descuento = (subtotal) * 0.25;
            }
            else
            {
                descuento = (subtotal) * 0.20;
            }
    }

   else if (objCantidad == 3 ){
            if (objMarca == "ArgentinaLuz"){
                descuento = (subtotal) * 0.15;
            }
            else if (objMarca == "FelipeLamparas"){
                descuento = (subtotal) * 0.10;
            }
            else{
                descuento = (subtotal) * 0.05;
            }
    }   
    else{
        descuento = 0;
    }

    precioFinal = (subtotal - descuento);

    if (precioFinal > 120){
        
        calculoIIBB = (precioFinal * IIBB);
        precioFinal = precioFinal + calculoIIBB;
        alert("IIBB Usted pago " + calculoIIBB);        
    }
 
    txtIdprecioDescuento.value = precioFinal;
    
}
*/