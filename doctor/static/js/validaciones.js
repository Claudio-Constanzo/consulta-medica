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

// Validar Primer Nombre en donde no permitimos que el nombre supere los 15 caracteres y que solo permita letras
function validarNombre1() {
    const v = $("nombre1").value.trim();
    const ok = v.length > 0 && v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    console.log(`Validación nombre1: ${ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras."}`);
    setFieldState("nombre1", { valid: ok, msg: ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

// Validar Segundo Nombre, lo mismo que el anterior, maximo 15 caracteres y solo letras
function validarNombre2() {
    const v = $("nombre2").value.trim();
    const ok = v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    console.log(`Validación nombre2: ${ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras."}`);
    setFieldState("nombre2", { valid: ok, msg: ok ? "✓ Correcto" : "El nombre no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

// Validar Primer Apellido 15 caracteres, solo letras
function validarApellido1() {
    const v = $("apellido1").value.trim();
    const ok = v.length > 0 && v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    console.log(`Validación apellido1: ${ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras."}`);
    setFieldState("apellido1", { valid: ok, msg: ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

// Validar Segundo Apellido 15 caracteres, solo letras
function validarApellido2() {
    const v = $("apellido2").value.trim();
    const ok = v.length <= 15 && /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(v);
    console.log(`Validación apellido2: ${ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras."}`);
    setFieldState("apellido2", { valid: ok, msg: ok ? "✓ Correcto" : "El apellido no puede superar los 15 caracteres y solo permite letras." });
    return ok;
}

// Validar RUT, aca solo se permite un formato, el cual es XX.XXX.XXX-X, se permiten numeros y la letra K
function validarRut() {
    const v = $("rut").value.trim();
    const regex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    const ok = regex.test(v);
    console.log(`Validación RUT: ${ok ? "✓ Correcto" : "Formato incorrecto de RUT."}`);
    setFieldState("rut", { valid: ok, msg: ok ? "✓ Correcto" : "Formato incorrecto de RUT." });
    return ok;
}

// Validar Correo, tiene un formato, debe contener un @, permite letras, numeros y caracteres especiales, pero como se menciono, debe cumplir con el formato a@a.a
function validarCorreo() {
    const v = $("correo").value.trim();
    const ok = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
    console.log(`Validación correo: ${ok ? "✓ Correcto" : "Correo electrónico inválido."}`);
    setFieldState("correo", { valid: ok, msg: ok ? "✓ Correcto" : "Correo electrónico inválido." });
    return ok;
}

// Validar Teléfono, Solo números y debe ser un número válido de teléfono chileno.
function validarTelefono() {
    const v = $("telefono").value.trim();
    const ok = /^[9]{1}[0-9]{8}$/.test(v); 
    console.log(`Validación teléfono: ${ok ? "✓ Correcto" : "Debe ser un teléfono válido."}`);
    setFieldState("telefono", { valid: ok, msg: ok ? "✓ Correcto" : "Debe ser un teléfono válido." });
    return ok;
}

// Validar Especialidad debe ser obligatoria
function validarEspecialidad() {
    const v = $("especialidad").value;
    const ok = v !== "";
    console.log(`Validación especialidad: ${ok ? "✓ Correcto" : "Debe seleccionar una especialidad."}`);
    setFieldState("especialidad", { valid: ok, msg: ok ? "✓ Correcto" : "Debe seleccionar una especialidad." });
    return ok;
}

// Validar Contraseña debe tener un minimo de 6 caracteres, puede contar con todo tipo de texto, letra, numeros y caracteres especiales
function validarPassword() {
    const v = $("password").value.trim();
    const ok = v.length >= 6; 
    console.log(`Validación contraseña: ${ok ? "✓ Correcto" : "La contraseña debe tener al menos 6 caracteres."}`);
    setFieldState("password", { valid: ok, msg: ok ? "✓ Correcto" : "La contraseña debe tener al menos 6 caracteres." });
    return ok;
}

// Validación al enviar el formulario
document.getElementById("formRegistroDoctor").addEventListener("submit", (ev) => {
    console.log("Formulario enviado, validando...");
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
        ev.preventDefault(); // Previene el envío del formulario si hay errores
        const firstInvalid = document.querySelector(".is-invalid");
        if (firstInvalid) firstInvalid.focus(); // Enfoca el primer campo inválido
    }
});

// Validación en tiempo real para los campos
["nombre1", "nombre2", "apellido1", "apellido2", "rut", "correo", "telefono", "especialidad", "password"].forEach(id => {
    $(id).addEventListener("input", () => {
        console.log(`Evento input disparado en ${id}`);
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
