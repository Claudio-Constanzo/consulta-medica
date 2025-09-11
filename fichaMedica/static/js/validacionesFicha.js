const $ = (id) => document.getElementById(id);

// Función para mostrar el estado de validez
function setFieldState(fieldId, { valid, msg = "" }) {
    const input = $(fieldId);
    const errEl = $(`err-${fieldId}`);
    
    // Depuración: Mostrar el estado de la validación
    console.log(`Validando ${fieldId}: ${msg}`);
    
    input.classList.toggle("is-invalid", !valid);  // Aplica la clase is-invalid
    input.classList.toggle("is-valid", !!valid);   // Aplica la clase is-valid
    input.setAttribute("aria-invalid", String(!valid));  // Asigna aria-invalid para accesibilidad
    
    if (errEl) {
        errEl.textContent = msg || "";  // Muestra el mensaje de error
        errEl.classList.remove("ok", "error");  // Elimina las clases previas
        errEl.classList.add(valid ? "ok" : "error");  // Añade la clase ok (verde) o error (rojo)
    }
}

// Validar ID del paciente (solo números)
function validarIdPaciente() {
    const v = $("id_paciente").value.trim();
    const ok = /^[0-9]+$/.test(v); // Solo números
    setFieldState("id_paciente", { valid: ok, msg: ok ? "✓ Correcto" : "El ID del paciente debe ser solo números." });
    return ok;
}

// Validar nombre completo del paciente (mínimo 40 caracteres, solo letras)
function validarNombrePaciente() {
    const v = $("nombre_paciente").value.trim();
    const ok = v.length >= 40 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v); // Solo letras y mínimo 40 caracteres
    setFieldState("nombre_paciente", { valid: ok, msg: ok ? "✓ Correcto" : "El nombre del paciente debe tener al menos 40 caracteres y solo permite letras." });
    return ok;
}

// Validar teléfono (solo 9 números)
function validarTelefonoPaciente() {
    const v = $("telefono_paciente").value.trim();
    const ok = /^[9]{1}[0-9]{8}$/.test(v); // Solo números, y debe ser un número válido de teléfono chileno (9 seguido de 8 dígitos)
    setFieldState("telefono_paciente", { valid: ok, msg: ok ? "✓ Correcto" : "El teléfono debe ser un número válido de 9 dígitos." });
    return ok;
}

// Validar dirección (solo letras y números)
function validarDireccionPaciente() {
    const v = $("direccion_paciente").value.trim();
    const ok = /^[A-Za-z0-9\s,.-]+$/.test(v); // Permite letras, números y caracteres como espacio, coma, punto y guion
    setFieldState("direccion_paciente", { valid: ok, msg: ok ? "✓ Correcto" : "La dirección solo puede contener letras, números y algunos caracteres especiales." });
    return ok;
}

// Validar título (solo letras)
function validarTitulo() {
    const v = $("titulo").value.trim();
    const ok = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v); // Solo letras
    setFieldState("titulo", { valid: ok, msg: ok ? "✓ Correcto" : "El título solo puede contener letras." });
    return ok;
}

// Validar notas (es obligatorio)
function validarNotas() {
    const v = $("notas").value.trim();
    const ok = v.length > 0; // Obligatorio
    setFieldState("notas", { valid: ok, msg: ok ? "✓ Correcto" : "Las notas son obligatorias." });
    return ok;
}

// Validar hora de ficha (es obligatorio)
function validarHoraFicha() {
    const v = $("hora_ficha").value;
    const ok = v !== ""; // Obligatorio
    setFieldState("hora_ficha", { valid: ok, msg: ok ? "✓ Correcto" : "La hora de la ficha es obligatoria." });
    return ok;
}

// Validación al enviar el formulario
document.getElementById("formFicha").addEventListener("submit", (ev) => {
    console.log("Formulario de Ficha Médica enviado, validando...");
    const ok =
        validarIdPaciente() &&
        validarNombrePaciente() &&
        validarTelefonoPaciente() &&
        validarDireccionPaciente() &&
        validarTitulo() &&
        validarNotas() &&
        validarHoraFicha();

    if (!ok) {
        ev.preventDefault(); // Detiene el envío si hay errores
        const firstInvalid = document.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus(); // Enfoca el primer campo inválido
    }
});

// Validación en tiempo real (mientras el usuario escribe)
["id_paciente", "nombre_paciente", "telefono_paciente", "direccion_paciente", "titulo", "notas", "hora_ficha"].forEach(id => {
    $(id).addEventListener("input", () => {
        if (id === "id_paciente") return validarIdPaciente();
        if (id === "nombre_paciente") return validarNombrePaciente();
        if (id === "telefono_paciente") return validarTelefonoPaciente();
        if (id === "direccion_paciente") return validarDireccionPaciente();
        if (id === "titulo") return validarTitulo();
        if (id === "notas") return validarNotas();
        if (id === "hora_ficha") return validarHoraFicha();
    });
});
