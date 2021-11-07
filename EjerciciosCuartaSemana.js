function ejercicio1(numero1, numero2){
    var resultado=numero1%numero2==0; 
    alert("El resultado es " + resultado);
    return resultado;
}
//ejercicio1(56,8);

function ejercicio2(numero){
    if (numero<100){
        for (var i=2; i<numero;i++){
            var resultado=numero%i; 
            if (resultado==0){
                alert("El resultado no es primo");      
                return false;
            }
        }
        alert("El número es primo");
        return true;
    }
}
//ejercicio2(37);


function ejercicio3(cadena){
    for(i=0;i<cadena.length;i++){
        alert(cadena.charAt(i)); 
    } 
}
//ejercicio3("caracola");


function ejercicio4(){
    var Alimento=function(){
        this.nombre="cantidad" ;
        this.cantidad=0;
    }
    
    var harina=new Alimento();
    harina.nombre="harina";
    harina.cantidad="200";
    alert("Hay " +harina.cantidad + " gramos de " +harina.nombre);
}
//ejercicio4();


function ejercicio5(lado,altura) {
    var Cuadrilatero=function(){
        this.lado=0;
        this.altura=0;
        this.calcular_area=function(){
            var area=this.lado*this.altura;
            alert("El area es: " +area)
        }
    }
    var cuadrilatero=new Cuadrilatero();
    cuadrilatero.lado=lado;
    cuadrilatero.altura=altura;
    cuadrilatero.calcular_area();
}
//ejercicio5(9,4);


function ejercicio6(){
    var suma=0;
    for(i=1;i<=10;i++){
        var numero= prompt("Escribre un número");
        suma= suma + parseInt(numero);
        var media= suma/i;
        alert("La media es : " +media);
    }
}
//ejercicio6();

function ejercicio7(){
    var Aventurero=function(){
        this.clase="";
        this.nivel=0;
        this.raza="";
        this.muestra_atributos=function(){
            alert ("Clase: " +this.clase +"\nNivel: "+this.nivel+"\nRaza: "+this.raza);
        }
    }
    
    var guerrero=new Aventurero();
    guerrero.clase= "guerrero"
    guerrero.nivel= 22;
    guerrero.raza="elfo"
    guerrero.muestra_atributos();
    
    var hechicero=new Aventurero()
    hechicero.clase="hechicero"
    hechicero.nivel=47;
    hechicero.raza="enano"
    hechicero.muestra_atributos();

    
    var monje=new Aventurero()
    monje.clase="monje";
    monje.nivel="30"
    monje.raza="mediano"
    monje.muestra_atributos();
}
//ejercicio7();


function ejercicio8(){
    do { 
        var operacion =prompt("suma, resta, multiplicación, división, salir");
        var n1=prompt("Elige un número");
        var n2=prompt("Elige otro número");
        switch (operacion) {
            case "suma":
                suma(n1,n2)          
                break;
            case "resta":
                resta(n1,n2)
                break;
            case "multiplicacion":
                multiplicar(n1,n2)
                break;
            case "division":
                dividir(n1,n2)
                break;
            default:
                break;
        } 
    }while (operacion!="salir");
} 
function suma(n1,n2){
    resultado= parseInt(n1)+parseInt(n2);
    alert(resultado);
}
function resta(n1,n2){
    resultado= parseInt(n1)-parseInt(n2);
    alert(resultado);
}
function multiplicar(n1,n2){
    resultado= parseInt(n1)*parseInt(n2);
    alert(resultado); 
}
function dividir(n1,n2){
    resultado= parseInt(n1)/parseInt(n2);
    alert(resultado); 
}
//ejercicio8();

function ejercicio9(){
    do {
        var ejercicio=prompt ("ejercicio1\nejercicio2\nejercicio3\nejercicio4\nejercicio5\nejercicio6\nejercicio7\nejercicio8\nsalir");
        switch (ejercicio) {
            case "ejercicio1":
                var n1=prompt("Escribe un número");
                var n2=prompt("Escribe otro número");
                ejercicio1(n1,n2)
                break;
            case "ejercicio2":
                var n1=prompt("Escribe un número");
                ejercicio2(n1)
                break;
            case "ejercicio3":
                var palabra=prompt("Escribe una palabra");
                ejercicio3(palabra)
                break;
            case "ejercicio4":
                ejercicio4()
                break;
            case "ejercicio5":
                var lado=prompt("Escribe un número");
                var altura=prompt("Escribe un número")
                ejercicio5(lado,altura)
                break;
            case "ejercicio6":
                ejercicio6()
                break;
            case "ejercicio7":
                ejercicio7()
                break;
            case "ejercicio8":  
                ejercicio8()
                break;
            }
    }while (ejercicio!="salir");
}
ejercicio9();