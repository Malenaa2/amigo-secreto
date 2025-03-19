let nombres = [];

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("El nombre no puede estar vacío");
        return;
    }
    
    nombres.push(nombre);
    let lista = document.getElementById("lista");
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    input.value = "";
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agrega al menos un nombre antes de sortear");
        return;
    }
    let indice = Math.floor(Math.random() * nombres.length);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + nombres[indice];
}
