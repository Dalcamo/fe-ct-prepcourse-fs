function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   stringToArray = nombre.split("");
   console.log(stringToArray);
   stringToArray[0] = stringToArray[0].toUpperCase();
   //console.log(stringToArray[0]);
   return stringToArray.join("");

}

console.log(mayuscula("alejo"));