function encriptar() {
  let frase = document.getElementById("textoEncriptado").value.toLowerCase();

  let textoEncriptado = frase.replace(/a/gim, "ar");
  let textoEncriptado1 = textoEncriptado.replace(/e/gim, "enter");
  let textoEncriptado2 = textoEncriptado1.replace(/i/gim, "imes");
  let textoEncriptado3 = textoEncriptado2.replace(/o/gim, "ober");
  let textoEncriptado4 = textoEncriptado3.replace(/u/gim, "ufat");

  document.getElementById("textoDesencriptado").innerHTML = textoEncriptado4;
  document.getElementById("textoEncriptado").value = "";
}

let btnEcriptar = document.getElementById("botonEncriptado");

btnEcriptar.addEventListener("click", (e) => {
  e.preventDefault();

  encriptar();
});

function desencriptar() {
  let frase = document.getElementById("textoEncriptado").value.toLowerCase();

  let textoEncriptado = frase.replace(/ar/gim, "a");
  let textoEncriptado1 = textoEncriptado.replace(/enter/gim, "e");
  let textoEncriptado2 = textoEncriptado1.replace(/imes/gim, "i");
  let textoEncriptado3 = textoEncriptado2.replace(/ober/gim, "o");
  let textoEncriptado4 = textoEncriptado3.replace(/ufat/gim, "u");

  document.getElementById("textoDesencriptado").innerHTML = textoEncriptado4;
}

let btnDesencriptar = document.getElementById("botonDesencriptado");

btnDesencriptar.addEventListener("click", (e) => {
  e.preventDefault();

  desencriptar();
});

let btnCopiar = document.getElementById("botonCopiar");

function copiarTextoAlPortaPapeles() {
  const textarea = document
    .getElementById("textoDesencriptado")
    .value.toLowerCase();

  navigator.clipboard
    .writeText(textarea)
    .then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto copiado al portapapeles",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      console.error("Error al copiar el texto: ", error);
    });
}

btnCopiar.addEventListener("click", copiarTextoAlPortaPapeles);

let btnReset = document.getElementById("botonReset");

btnReset.addEventListener("click", () => {
  document.getElementById("textoEncriptado").value = "";
  document.getElementById("textoDesencriptado").value = "";
});
