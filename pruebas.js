function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaDelSeis = [];
   let valor = 6;
   for(var i = 0; i<=10; i++){      
      tablaDelSeis.push(valor*i);      
   }
   return tablaDelSeis;
}

console.log(tablaDelSeis());