

function sumar(num1, num2) {
  return num1 + num2;
}

function restar(num1, num2) {
  return num1 - num2;
}

function multiplicar(num1, num2) {
  return num1 * num2;
}

function dividir(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "No se puede dividir por 0";
  }
}

function calculadora(num1, num2, operación) {
  switch (operación) {
    case "sumar":
      return sumar(num1, num2);
    case "restar":
      return restar(num1, num2);
    case "multiplicar":
      return multiplicar(num1, num2);
    case "dividir":
      return dividir(num1, num2);

    default:
      return "Operación no válida";
  }
}

const num1 = parseFloat(prompt("Ingrese el primer número: "));
const num2 = parseFloat(prompt("Ingrese el segundo número: "));
const operación = prompt(
  "Escriba la operación que desea realizar (sumar/restar/multiplicar/dividir): "
);
const resultado = calculadora(num1, num2, operación);
console.log(`El resultado de la operación es: ${resultado}`);
alert(`El resultado de la operación es: ${resultado}`);
