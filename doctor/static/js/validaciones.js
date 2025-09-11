const $ = (id) => document.getElementById(id);

// Función para mostrar el estado de validez
function setFieldState(fieldId, { valid, msg = "" }) {
    const input = $(fieldId);
    const errEl = $(`err-${fieldId}`);
    input.classList.toggle("is-invalid", !valid);
    input.classList.toggle("is-valid", !!valid);
    input.setAttribute("aria-invalid", String(!valid));
    if (errEl) {
        errEl.textContent = msg || "";
        errEl.classList.remove("ok", "error");
        errEl.classList.add(valid ? "ok" : "error");
    }
}

// Validar campos del formulario de doctor
function validarNombre1() {
    const v = $("nombre1").value.trim();
    const ok = v.length > 0 && v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("nombre1", { valid: ok, msg: ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

function validarNombre2() {
    const v = $("nombre2").value.trim();
    const ok = v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("nombre2", { valid: ok, msg: ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

function validarApellido1() {
    const v = $("apellido1").value.trim();
    const ok = v.length > 0 && v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("apellido1", { valid: ok, msg: ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

function validarApellido2() {
    const v = $("apellido2").value.trim();
    const ok = v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("apellido2", { valid: ok, msg: ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

function validarRut() {
    const v = $("rut").value.trim();
    const regex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    const ok = regex.test(v);
    setFieldState("rut", { valid: ok, msg: ok ? "✓ Correcto" : "Formato incorrecto de RUT." });
    return ok;
}

function validarCorreo() {
    const v = $("correo").value.trim();
    const ok = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
    setFieldState("correo", { valid: ok, msg: ok ? "✓ Correcto" : "Correo electrónico inválido." });
    return ok;
}

function validarTelefono() {
    const v = $("telefono").value.trim();
    const ok = /^[9]{1}[0-9]{8}$/.test(v); // Solo números y debe ser un número válido de teléfono chileno.
    setFieldState("telefono", { valid: ok, msg: ok ? "✓ Correcto" : "Debe ser un teléfono válido." });
    return ok;
}

function validarEspecialidad() {
    const v = $("especialidad").value;
    const ok = v !== "";
    setFieldState("especialidad", { valid: ok, msg: ok ? "✓ Correcto" : "Debe seleccionar una especialidad." });
    return ok;
}

function validarPassword() {
    const v = $("password").value.trim();
    const ok = v.length >= 6; // Mínimo 6 caracteres
    setFieldState("password", { valid: ok, msg: ok ? "✓ Correcto" : "La contraseña debe tener al menos 6 caracteres." });
    return ok;
}

// Validación al enviar el formulario
document.getElementById("formRegistroDoctor").addEventListener("submit", (ev) => {
    const ok =
        validarNombre1() &&
        validarNombre2() &&
        validarApellido1() &&
        validarApellido2() &&
        validarRut() &&
        validarCorreo() &&
        validarTelefono() &&
        validarEspecialidad() &&
        validarPassword();

    if (!ok) {
        ev.preventDefault();
        const firstInvalid = document.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus();
    }
});

// Validación en tiempo real
["nombre1", "nombre2", "apellido1", "apellido2", "rut", "correo", "telefono", "especialidad", "password"].forEach(id => {
    $(id).addEventListener("input", () => {
        if (id === "nombre1") return validarNombre1();
        if (id === "nombre2") return validarNombre2();
        if (id === "apellido1") return validarApellido1();
        if (id === "apellido2") return validarApellido2();
        if (id === "rut") return validarRut();
        if (id === "correo") return validarCorreo();
        if (id === "telefono") return validarTelefono();
        if (id === "especialidad") return validarEspecialidad();
        if (id === "password") return validarPassword();
    });
});
