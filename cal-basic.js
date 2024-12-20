// calculadora basica
// pedir el tipo de operador ( suma, resta, multiplicacion y division)
// pedir el numero A
// pedir el numero B
// con if ejecutar el script
// dependiendo del operador introducido por el usuario
// debe de imprimir el resultado

// Solicitar la operación
let operador = prompt(
  "¿Qué operación quieres realizar? Ingresa '+', '-', '*', '/'"
);

// Solicitar los números y convertirlos a número (flotante para mayor precisión)
// NOTA: parseFloat sirve para forzar que lo que sea un numero

let num1 = parseFloat(prompt("Ingresa el primer número"));
let num2 = parseFloat(prompt("Ingresa el segundo número"));

// Verificar la entrada ( esta es una valaidacion para que el usuarui no meta numeros invalidos)
if (isNaN(num1) || isNaN(num2)) {
  console.log("Por favor ingresa números válidos.");
} else {
  // Realizar la operación según el operador ingresado
  if (operador == "+") {
    let suma = num1 + num2;
    // 1. Concatenación con el operador "+" (forma clásica)
    console.log("El resultado de la suma es: " + suma);
    // Se utiliza el operador "+" para unir (concatenar) una cadena de texto con el valor de la variable 'suma'.
    // Si 'suma' no es una cadena, se convierte automáticamente a texto.
    // Es más propenso a errores cuando trabajas con muchas concatenaciones.

    // 2. Separación por comas (forma más moderna)
    //console.log('El resultado de la suma es: ', suma);
    // Aquí, el mensaje y la variable 'suma' se pasan como argumentos separados.
    // Esto evita problemas de conversión de tipo y permite que cada argumento se imprima de forma clara y directa.
    // Muy útil para depurar.

    // 3. Template literals con backticks (forma moderna y flexible)
    // console.log(`El resultado de la suma es: ${suma} muy bien`);
    // Usa "template literals" (plantillas de texto) delimitadas por backticks (``).
    // Permite incrustar variables directamente dentro de la cadena utilizando `${}`.
    // Es más legible y soporta saltos de línea directamente dentro de las comillas.
    // También es útil para agregar texto adicional sin concatenar manualmente.
  } else if (operador == "-") {
    let resta = num1 - num2;
    console.log(`El resultado de la resta es: ${resta}`);
  } else if (operador == "*") {
    let multiplicacion = num1 * num2;
    console.log(`El resultado de la multiplicación es: ${multiplicacion}`);
  } else if (operador == "/") {
    // Evitar división entre cero ya que esta es una validacion matematica
    if (num2 !== 0) {
      let division = num1 / num2;
      console.log(`El resultado de la división es: ${division}`);
    } else {
      console.log("No se puede dividir entre cero.");
    }
  } else {
    console.log("No has ingresado una operación válida.");
  }
}
