class   Coche{
  
    // Constructor
    constructor(marca, modelo, color, antiguead, velocidad ){
      // Atributos
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.antiguead = antiguead;
    }
    // Metodos

    aumentarVelocidad(){
        this.velocidad += 10;
        console.log(`La velocidad del coche es ${this.velocidad}`);
    }
    frenar(){
        if (this.velocidad > 0) {
            this.velocidad -= 10;
            console.log(`La velocidad del coche es ${this.velocidad}`);
        } else {
            console.log("El coche ya está detenido");
        }
    }
    mostrarInformacion(){
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Antigüedad: ${this.antiguead} años, Velocidad: ${this.velocidad} km/h`);
    }
}

// Ejemplo de uso de la clase Coche

const miCoche = new Coche("Toyota", "Corolla", "Rojo", 5, 0);
miCoche.aumentarVelocidad();
miCoche.frenar();
miCoche.mostrarInformacion();
console.log(miCoche);
miCoche,aumentarVelocidad();
miCoche,aumentarVelocidad();

alert("Hola, soy Jairo David, estudiante de programación. Mi coche es un " + miCoche.marca + " " + miCoche.modelo + " de color " + miCoche.color + ".");
const coche1 = new Coche("Ford", "Focus", "Azul", 3, 0);
coche1.aumentarVelocidad(); 
coche1.frenar();
coche1.mostrarInformacion();
