/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloPadre = [];

   for (clave in objeto) {
      var arreglohijo = [];
      arreglohijo.push(clave);
      arreglohijo.push(objeto[clave]);
      arregloPadre.push(arreglohijo);
   }

   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
   let objeto = {};
   const stringSorted = string.split('').sort();

   for (i = 0; i < stringSorted.length; i++) {
      if (stringSorted[i] !== stringSorted[i-1]) {
         objeto[stringSorted[i]] = 1;
      } else {
         objeto[stringSorted[i]] += 1;
      }
   }

   return objeto;
}

function capToFront(string) {
   var arregloString = string.split('')                // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   var letrasMayusculas = [];                          // Debes enviar todas las letras en mayúscula al comienzo del string.
   var stringModif = String;                               // Retornar el string.
   var letrasMinusculas = [];
                                                        // [EJEMPLO]: soyHENRY ---> HENRYsoy
   for(letra = 0; letra < arregloString.length; letra ++) {                   // Tu código:
      if (arregloString[letra] === arregloString[letra].toUpperCase()) {
         letrasMayusculas.push(arregloString[letra]);
      } else {
         letrasMinusculas.push(arregloString[letra]);
      }

   }

   stringModif = letrasMayusculas.join('') + letrasMinusculas.join('')

  return stringModif;                                   

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

  let nuevaFrase = frase.split(' ');
  
  for (i = 0; i < nuevaFrase.length; i++){
   nuevaFrase[i] = nuevaFrase[i].split('').reverse().join('');
  }
  
  return nuevaFrase.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   
   let stringNumero = numero.toString();
   let reverseNumero = stringNumero.split('').reverse().join('');

   if (stringNumero === reverseNumero) {
      return 'Es capicua';
   }else {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arrayString = string.split('');
   let nuevoArreglo = [];

   for (i = 0; i < arrayString.length; i++){
      if (arrayString[i] !== 'a' && arrayString[i] !== 'b' && arrayString[i] !== 'c'){
         nuevoArreglo.push(arrayString[i]);
      }
   }

   return nuevoArreglo.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   arrayOfStrings.sort((stringA, stringB)=>{
     return (stringA.length - stringB.length)}
   
   );
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let arregloIntersectado = [];

   for (i = 0; i < array1.length; i++) {
      for (x = 0; x < array2.length; x++){
         if (array1[i] === array2[x]) {
            arregloIntersectado.push(array1[i]);
         }
      }
   }

   return arregloIntersectado;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
