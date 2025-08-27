 alert("Hola, soy Jairo David");
        console.log("Hola, soy Jairo David");

        // Variables
        let nombre = "Jairo David";
        var edad = 30;
        const esEstudiante = true;  

        // Tipos de datos
        let numero = 10; // Number
        let texto = "Hola, mundo"; // String
        let esVerdadero = false; // Boolean
        let nulo = null; // Null
        let indefinido; // Undefined
        let objeto = { nombre: "Jairo", edad: 30 }; // Object
        let arreglo = [1, 2, 3, 4, 5];
        let fecha = new Date(); // Date
        let simbolo = Symbol("simbolo"); // Symbol
        let bigInt = BigInt(1234567890123456789012345678901234567890); // BigInt
        // Operadores
        let suma = 5 + 3; // Suma
        let resta = 10 - 2; // Resta
        let multiplicacion = 4 * 2; // Multiplicación
        let division = 8 / 2; // División
        let modulo = 10 % 3; // Módulo
        let incremento = 5;
        incremento++; // Incremento
        let decremento = 5;
        decremento--; // Decremento
        let igual = (5 == 5); // Igualdad
        let desigual = (5 != 3); // Desigualdad
        let mayorQue = (5 > 3); // Mayor que
        let menorQue = (3 < 5); // Menor que
        let mayorIgual = (5 >= 5); // Mayor o igual que
        let menorIgual = (3 <= 5); // Menor o igual que
        let yLogico = (true && false); // AND lógico
        let oLogico = (true || false); // OR lógico
        let noLogico = !true; // NOT lógico

        // Estructuras de control
        if (edad >= 18) {
            console.log("Eres mayor de edad");
        }
        else {
            console.log("Eres menor de edad");
        }

        for (let i = 0; i < 5; i++) {
            console.log("Número: " + i);
        }

        let i = 0;
        while (i < 5) {
            console.log("Número: " + i);
            i++;
        } 

        numeros.array.forEach(element => {
            console.log("Elemento del arreglo: " + element);
        });

        numeros.map(element => {
            console.log("Elemento del arreglo mapeado: " + element);
        });

        // Manipulación del DOM        
let contenido= "nombre: " + nombre + "<br>" +
              "edad: " + edad + "<br>" ;
let datos = document.getElementById("datos");
datos.innerHTML = contenido;
let p= document.getElementById("texto");
p.innerHTML = `Hola, soy ${nombre} y tengo ${edad} años de edad soy estudiante: ${esEstudiante}.`;


// Funciones
    function saludar(nombre) {
     console.log("Hola, " + nombre);
     return "Hola, " + nombre;
    }
    saludar("Jairo David");

    function sumar(a, b) {
        console.log("La suma es: " + (a + b));
        return a + b;
    }
    sumar(5, 3);

    // Funciones flecha
    const calcularArea=(base, altura) => {
        if (base <= 0 || altura <= 0) {
            console.log("La base y la altura deben ser mayores que cero.");
            return null;}
        let area = (base * altura) / 2;
        console.log("El área del triángulo es: " + area);
        return area;
    }
    calcularArea(5, 10);
    calcularArea(0, 10); // Caso inválido