function cambiarTexto() {
    const parrafo = document.getElementById("parrafo");
    // Alterna entre dos estilos con transición
    if (parrafo.style.color === "yellow") {
        parrafo.style.color = "white";
        parrafo.style.fontSize = "16px";
    } else {
        parrafo.style.color = "yellow";
        parrafo.style.fontSize = "22px";
    }
}
