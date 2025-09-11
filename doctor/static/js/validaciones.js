const $ = (id) => document.getElementById(id)

function validarNombre(nombre) {
    if (!nombre || nombre.trim() === "") {
        return {valido: false, mensaje: 'El nombre es obligatorio'}
    }
    if (nombre.length > 15) {
        return {valido: false, mensaje: 'El nombre no puede superar los 15 carácteres'}
    }

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/
    if (!regex.text(nombre)) {
        return {valido: false, mensaje: 'El nombre solo permite letras'}
    }
    return {valido: true, mensaje: 'Nombre válido'}
}

const resultado = validarNombre("Valeria")
console.log(resultado.mensaje)

