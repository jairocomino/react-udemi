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

//Herencia
class   Deportivo extends Coche {
    constructor(marca, modelo, color, antiguead, velocidad, potencia) {
        // Llamar al constructor de la clase padre
        super(marca, modelo, color, antiguead, velocidad);
        // Atributo específico de la clase Deportivo
        this.potencia = potencia;
    }
    aumentarPotencia() {
        // Aumentar la potencia del coche deportivo
        this.potencia += 10;

        console.log(`La velocidad del coche es ${this.potencia}`);
    }

     vajarPotencia() {
        this.potencia -= 10;
        console.log(`La velocidad del coche es ${this.potencia}`);
    }

    mostrarInformacion() {
        // Llamar al método mostrarInformacion de la clase padre
        super.mostrarInformacion();
        console.log(`Potencia: ${this.potencia} caballos de fuerza`);
    }
}
class autobus extends Coche {
    constructor(marca, modelo, color, antiguead, velocidad, capacidadPasajeros) {
        // Llamar al constructor de la clase padre
        super(marca, modelo, color, antiguead, velocidad);
        // Atributo específico de la clase Autobus
        this.capacidadPasajeros = capacidadPasajeros;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Capacidad de pasajeros: ${this.capacidadPasajeros}`);
    }
}