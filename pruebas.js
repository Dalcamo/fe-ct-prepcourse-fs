var string = "Alejanbdrocardonac"
var prohibidas = ["a","b","c","A","B","C"]

 function quitarAbc(string) {
   stringToArray = string.split("");
   console.log(stringToArray);
   var arraySinProhibidas = stringToArray.filter((letra)=> (!prohibidas.includes(letra)));     
   string = arraySinProhibidas.join("");
   console.log(string);
}


quitarAbc("Alejandro Cardona");