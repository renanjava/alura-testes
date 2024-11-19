import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search)
const nomeDocumento = parametros.get("nome")
const nomePagina = document.getElementById("titulo-documento")
nomePagina.textContent = nomeDocumento || "Documento sem título"
const textoEditor = document.getElementById("editor-texto")

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener("keyup", () => {
    emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export { atualizaTextoEditor }
