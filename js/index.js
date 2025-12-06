var contenedor = document.querySelector(".container");
var resultadoContenedor = document.querySelector(".resultado");
var actualValue = 0;
var firstNumber = 0;
var resultadoView = 0;
var operacion = "nothing";

const changeValue = (number) => {
  actualValue *= 10;
  actualValue += number;
  let displayValue = contenedor.innerHTML;
  if (displayValue === "0") {
    contenedor.innerHTML = `${number}`;
    return;
  }
  contenedor.innerHTML = `${displayValue}${number}`;
  handleResultado();
};

const handleResultado = () => {
  switch (operacion) {
    case "+":
      resultadoView = firstNumber + actualValue;
      resultadoContenedor.innerHTML = `${resultadoView}`;
      break;
    case "-":
      resultadoView = firstNumber - actualValue;
      resultadoContenedor.innerHTML = `${resultadoView}`;
      break;
    case "*":
      resultadoView = firstNumber * actualValue;
      resultadoContenedor.innerHTML = `${resultadoView}`;
      break;
    case "/":
      resultadoView = firstNumber / actualValue;
      resultadoContenedor.innerHTML = `${resultadoView}`;
      break;
    case "nothing":
      break;
  }
};

const handleOperation = (operator) => {
  switch (operator) {
    case "+":
      {
        if (operacion === "nothing") {
          resultadoView = firstNumber + actualValue;
        }
        let displayValue = contenedor.innerHTML;
        contenedor.innerHTML = `${displayValue} + `;
        firstNumber = resultadoView;
        actualValue = 0;
        operacion = "+";
      }
      break;
    case "-":
      {
        if (operacion === "nothing") {
          resultadoView = actualValue - firstNumber;
        }
        let displayValue = contenedor.innerHTML;
        contenedor.innerHTML = `${displayValue} - `;
        firstNumber = resultadoView;
        actualValue = 0;
        operacion = "-";
      }
      break;
    case "*":
      {
        if (operacion === "nothing") {
          firstNumber = actualValue;
          actualValue = 0;
          operacion = "*";
          let displayValue = contenedor.innerHTML;
          contenedor.innerHTML = `${displayValue} * `;
          return;
        }
        let displayValue = contenedor.innerHTML;
        contenedor.innerHTML = `${displayValue} * `;
        firstNumber = resultadoView;
        actualValue = 0;
        operacion = "*";
      }
      break;
    case "/":
      {
        if (operacion === "nothing") {
          firstNumber = actualValue;
          actualValue = 0;
          operacion = "/";
          let displayValue = contenedor.innerHTML;
          contenedor.innerHTML = `${displayValue} / `;
          return;
        }
        let displayValue = contenedor.innerHTML;
        contenedor.innerHTML = `${displayValue} / `;
        firstNumber = resultadoView;
        actualValue = 0;
        operacion = "/";
      }
      break;
    default:
      break;
  }
  return;
};

const handleEqual = () => {
  if (operacion === "nothing") {
    return;
  }
  contenedor.innerHTML = resultadoContenedor.innerHTML;
  resultadoContenedor.innerHTML = `0`;
};

const clearDisplay = () => {
  operacion = "nothing";
  firstNumber = 0;
  actualValue = 0;
  resultadoView = 0;
  contenedor.innerHTML = `0`;
  resultadoContenedor.innerHTML = `0`;
};
