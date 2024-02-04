function pedirNota(mensaje) {
    let nota;
    do {
        nota = parseFloat(prompt(mensaje));
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert("Por favor, ingresa una nota válida (entre 0 y 10).");
        }
    } while (nota < 0 || nota > 10 || isNaN(nota));
    return nota;
}

function calcularPromedio(notas) {
    let suma = notas.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    return suma / notas.length;
}

function main() {
    let nombreAlumno = prompt("Ingresa el nombre del alumno:");
    let notas = [];

    for (let i = 1; i <= 3; i++) {
        notas.push(pedirNota(`Ingresa la nota ${i}:`));
    }

    let promedio = calcularPromedio(notas);

    if (promedio >= 7) {
        alert(`${nombreAlumno}, ¡felicidades! Has aprobado con un promedio de ${promedio.toFixed(2)}.`);
    } else {
        alert(`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(2)}.`);
    }
}

main();
