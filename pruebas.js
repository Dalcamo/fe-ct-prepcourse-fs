class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
   }
   detalle(){
      let persona = {
         nombre: this.nombre,
         apellido: this.apellido,
         edad: this.edad,
         domicilio: this.domicilio,
      }
      return persona;
   }    
   
}



function crearInstanciaPersona(nombreInstancia, nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   nombreInstancia = new Persona (nombre,apellido,edad,domicilio);
   return nombreInstancia;
}

console.log(crearInstanciaPersona("instancia1","Alejo", "Cardona", 37,"Calle falsa 123"));
