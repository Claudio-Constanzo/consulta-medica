const $ = (id) => document.getElementById(id);

// Función para mostrar el estado de validez
function setFieldState(fieldId, { valid, msg = "" }) {
    const input = $(fieldId);
    const errEl = $(`err-${fieldId}`);
    
    console.log(`Validando ${fieldId}: ${msg}`);
    
    input.classList.toggle("is-invalid", !valid);
    input.classList.toggle("is-valid", !!valid);
    input.setAttribute("aria-invalid", String(!valid));
    
    if (errEl) {
        errEl.textContent = msg || "";
        errEl.classList.remove("ok", "error");
        errEl.classList.add(valid ? "ok" : "error");
    }
}

// Validar Primer Nombre en donde no permitimos que el nombre supere los 15 caracteres y que solo permita letras
function validarPrimerNombre() {
    const v = $("primer_nombre").value.trim();
    const ok = v.length > 0 && v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("primer_nombre", { valid: ok, msg: ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}
// Lo mismo, que el nombre no supere 15 caracteres y solo letras
function validarSegundoNombre() {
    const v = $("segundo_nombre").value.trim();
    const ok = v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("segundo_nombre", { valid: ok, msg: ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}
// 15 caracteres y solo letras
function validarPrimerApellido() {
    const v = $("primer_apellido").value.trim();
    const ok = v.length > 0 && v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("primer_apellido", { valid: ok, msg: ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}
// 15 caracteres y solo letras
function validarSegundoApellido() {
    const v = $("segundo_apellido").value.trim();
    const ok = v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    setFieldState("segundo_apellido", { valid: ok, msg: ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}
// Validar que el correo cuente con el formato requerido a@a.a
function validarCorreo() {
    const v = $("email").value.trim();
    const ok = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
    setFieldState("email", { valid: ok, msg: ok ? "✓ Correcto" : "Correo electrónico inválido." });
    return ok;
}
// Validar que la contraseña cuente con minimo 6 caracteres y puede contar con cualquier tipo de contenido, letras, caracteres especiales y numeros
function validarPassword() {
    const v = $("password").value.trim();
    const ok = v.length >= 6;
    setFieldState("password", { valid: ok, msg: ok ? "✓ Correcto" : "La contraseña debe tener al menos 6 caracteres." });
    return ok;
}
// Validar que sea obligatorio
function validarFechaNacimiento() {
    const v = $("fecha_nacimiento").value;
    const ok = v !== "";
    setFieldState("fecha_nacimiento", { valid: ok, msg: ok ? "✓ Correcto" : "La fecha de nacimiento es obligatoria." });
    return ok;
}

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = $("formUsuario");

    form.addEventListener("submit", (ev) => {
        const ok =
            validarPrimerNombre() &&
            validarSegundoNombre() &&
            validarPrimerApellido() &&
            validarSegundoApellido() &&
            validarCorreo() &&
            validarPassword() &&
            validarFechaNacimiento();

        if (!ok) {
            ev.preventDefault();
            const firstInvalid = document.querySelector(".is-invalid");
            if (firstInvalid) firstInvalid.focus();
        }
    });

    // Validación en tiempo real
    ["primer_nombre","segundo_nombre","primer_apellido","segundo_apellido","email","password","fecha_nacimiento"].forEach(id => {
        $(id).addEventListener("input", () => {
            if (id === "primer_nombre") return validarPrimerNombre();
            if (id === "segundo_nombre") return validarSegundoNombre();
            if (id === "primer_apellido") return validarPrimerApellido();
            if (id === "segundo_apellido") return validarSegundoApellido();
            if (id === "email") return validarCorreo();
            if (id === "password") return validarPassword();
            if (id === "fecha_nacimiento") return validarFechaNacimiento();
        });
    });
});
