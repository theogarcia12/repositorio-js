let usuarioQuiereContinuar = true;
function iniciarCalculadora(){
    while (usuarioQuiereContinuar == true) {
    // Obtener números y operación del usuario
    let num1 = Number(prompt("Ingresa el primer número:"));
    let operacionSeleccionada = prompt("Ingrese la operación (+, -, *, /):");
    let num2 = Number(prompt("Ingresa el segundo número:"));

    let resultado;

    switch (operacionSeleccionada) {
        case "+":
            resultado = (num1 + num2);
            break;
        case "-":
            resultado = (num1 - num2);
            break;
        case "*":
            resultado = (num1 * num2);
            break;
        case "/":
            resultado = (num1 / num2);
            break;
        default:
            alert("Operación no válida");
    }

    // Mostrar resultado al usuario
        alert("El resultado es: " + resultado);

    // Preguntar al usuario si quiere realizar otra operación
        usuarioQuiereContinuar = confirm("¿Desea realizar otra operación?");
    }
}
document.getElementById("btnIniciarCalculadora").addEventListener("click", function() {
    iniciarCalculadora();
});