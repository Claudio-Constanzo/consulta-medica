// Función para buscar pacientes por nombre o apellido
function buscarPaciente() {
    const filtro = document.getElementById('buscar').value.toLowerCase();
    const filas = document.querySelectorAll('#tabla-cuerpo tr');

    filas.forEach(fila => {
        const nombre = fila.cells[0].innerText.toLowerCase();
        if (nombre.includes(filtro)) {
            fila.style.display = '';
        } else {
            fila.style.display = 'none';
        }
    });
}

// Función para mostrar vista previa del paciente
function vistaPrevia(btn) {
    const nombre = btn.closest('tr').cells[0].innerText;
    alert('Vista previa de: ' + nombre);
}

// Función para actualizar la ficha del paciente
function actualizar(btn) {
    const nombre = btn.closest('tr').cells[0].innerText;
    alert('Actualizar ficha de: ' + nombre);
}

// Función para eliminar la fila del paciente
function eliminar(btn) {
    const fila = btn.closest('tr');
    const nombre = fila.cells[0].innerText;
    if (confirm('¿Eliminar ficha de ' + nombre + '?')) {
        fila.remove();
    }
}

// Devolver datos para buscar por nombre o apellido sin necesidad de un boton
document.getElementById('buscar').addEventListener('input', buscarPaciente);
