
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num3"); 
const resultadoText = document.createElement("p"); 

document.body.appendChild(resultadoText); 

let operacionSeleccionada = ""; 


function seleccionarOperacion(operacion) {
    operacionSeleccionada = operacion;
}


function calcularResultado() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultadoText.textContent = "Por favor, ingrese ambos números.";
        return;
    }

    let resultado;
    switch (operacionSeleccionada) {
        case "Sumar":
            resultado = num1 + num2;
            break;
        case "Restar":
            resultado = num1 - num2;
            break;
        case "Multiplicar":
            resultado = num1 * num2;
            break;
        case "Dividir":
            if (num2 === 0) {
                resultadoText.textContent = "Error: No se puede dividir entre 0.";
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            resultadoText.textContent = "Seleccione una operación primero.";
            return;
    }

    resultadoText.textContent = `Resultado: ${resultado}`;
}


document.querySelectorAll("#CajaBotones button").forEach((boton) => {
    boton.addEventListener("click", function () {
        seleccionarOperacion(this.textContent);
    });
});


document.querySelector("#CajaBotones2 button").addEventListener("click", calcularResultado);
