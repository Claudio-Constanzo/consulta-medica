const $ = (id) => document.getElementById(id);

function calcEdad(iso){
  if(!iso) return null;
  const hoy = new Date();
  const d = new Date(iso + "T00:00:00");
  let e = hoy.getFullYear() - d.getFullYear();
  const m = hoy.getMonth() - d.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < d.getDate())) e--;
  return e;
}

// Marca visual del campo + label + mensaje
function setFieldState(fieldId, {valid, msg=""}){
  const input = $(fieldId);
  const label = document.querySelector(`label[for="${fieldId}"]`);
  const errEl = $(`err-${fieldId}`) || $(`err-${fieldId.replace("fecha_nacimiento","fecha")}`);

  // input
  input.classList.toggle("is-invalid", !valid);
  input.classList.toggle("is-valid", !!valid);
  input.setAttribute("aria-invalid", String(!valid));

  // label
  if (label){
    label.classList.toggle("invalid", !valid);
    label.classList.toggle("valid", !!valid);
  }

  // mensaje
  if (errEl){
    errEl.textContent = msg || "";
    errEl.classList.remove("ok","error");
    errEl.classList.add(valid ? "ok" : "error");
  }
}

// Validadores individuales
function validateNombre(){
  const v = $("nombre").value.trim();
  const ok = v.length >= 2;
  setFieldState("nombre", {valid: ok, msg: ok ? "✓ Correcto" : "Mínimo 2 caracteres."});
  return ok;
}

function validateApellido(){
  const v = $("apellido").value.trim();
  const ok = v.length >= 2;
  setFieldState("apellido", {valid: ok, msg: ok ? "✓ Correcto" : "Mínimo 2 caracteres."});
  return ok;
}

function validateFecha(){
  const iso = $("fecha_nacimiento").value;
  const edad = calcEdad(iso);
  $("edad").value = edad ?? "";
  const ok = iso && edad !== null && edad >= 0 && edad <= 100;
  setFieldState("fecha_nacimiento", {valid: ok, msg: ok ? `✓ Edad: ${edad}` : "Edad entre 0 y 100 años."});
  // si tu HTML usa err-fecha en lugar de err-fecha_nacimiento, también lo actualizamos:
  const aliasErr = $("err-fecha");
  if (aliasErr && !$("err-fecha_nacimiento")) {
    aliasErr.textContent = ok ? `✓ Edad: ${edad}` : "Edad entre 0 y 100 años.";
    aliasErr.classList.remove("ok","error");
    aliasErr.classList.add(ok ? "ok" : "error");
  }
  return ok;
}

function validateDireccion(){
  const v = $("direccion").value.trim();
  const ok = v.length >= 5;
  setFieldState("direccion", {valid: ok, msg: ok ? "✓ Correcto" : "Mínimo 5 caracteres."});
  return ok;
}

function validateTelefono(){
  const v = $("telefono").value.trim();
  const ok = /^\d{8,12}$/.test(v);
  setFieldState("telefono", {valid: ok, msg: ok ? "✓ Correcto" : "Solo números (8–12 dígitos)."});
  return ok;
}

function validatePrevision(){
  const v = $("prevision").value;
  const ok = !!v;
  setFieldState("prevision", {valid: ok, msg: ok ? "✓ Correcto" : "Selecciona una previsión."});
  return ok;
}

// Real-time: validar mientras el usuario escribe / cambia
["nombre","apellido","direccion","telefono"].forEach(id=>{
  $(id).addEventListener("input", () => {
    if (id==="nombre") return validateNombre();
    if (id==="apellido") return validateApellido();
    if (id==="direccion") return validateDireccion();
    if (id==="telefono") return validateTelefono();
  });
});
$("fecha_nacimiento").addEventListener("change", validateFecha);
$("prevision").addEventListener("change", validatePrevision);

// Submit final: valida todo
document.getElementById("formRegistro").addEventListener("submit", (ev)=>{
  const ok =
    validateNombre() &
    validateApellido() &
    validateFecha() &
    validateDireccion() &
    validateTelefono() &
    validatePrevision();

  if (!ok) {
    ev.preventDefault();
    // foco en el primer inválido
    const firstInvalid = document.querySelector(".is-invalid");
    if (firstInvalid) firstInvalid.focus();
  }
});
// Añadir este script al HTML con:
