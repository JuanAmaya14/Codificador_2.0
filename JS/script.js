//Funcion que verifica y envia
function VerificarYEnviar(codi_O_deco) {

    var texto = document.getElementById("texto").value.trim();

    if (texto == "") {

        alert("Esta vacio");

    } else {

        if (codi_O_deco == "codificar") {


            resultado = Codificar(texto);

            OcultarImagen();

            document.getElementById("resultado").value = resultado;

        } else if (codi_O_deco == "decodificar") {

            resultado = Decodificar(texto);

            OcultarImagen();

            document.getElementById("resultado").value = resultado;

        }

    }

}

//Funcion que codifica el texto
function Codificar(texto) {

    for (const i in reglas) {

        texto = texto.replaceAll(i, reglas[i]);

    }
    return texto;

}

//Funcion que decodifica el texto
function Decodificar(texto) {

    for (const i in reglas) {

        texto = texto.replaceAll(reglas[i], i);

    }
    return texto;

}

//funcion OcultarImagen
function OcultarImagen() {
    document.getElementById("nulo").style.display = "none";
}

//Objeto para reemplazar caracteres
const reglas = {
    "e": "&&&", "i": "!!!", "a": "**%", "o": "000", "u": "---",
    "E": "&8_+&", "I": "!8_+!", "A": "*8_+!", "O": "08_+0", "U": "-8_+-",

    "b": "1!@", "c": "2@#", "d": "3#", "f": "4$%", "g": "5%&", "h": "6*(",
    "j": "7()", "k": "8_+", "l": "9!#", "m": "10!", "n": "11@",
    "ñ": "12#", "p": "13$", "q": "14%", "r": "15^", "s": "16&", "t": "17*", "v": "18(", "w": "19)",
    "x": "20[", "y": "21]", "z": "21{",

    "B": "1m!", "C": "2k@", "D": "3k#", "F": "4k$", "G": "5k%", "H": "6k*",
    "J": "7k(", "K": "8k_", "L": "9k!", "M": "10k", "N": "11k",
    "Ñ": "12k", "P": "13k", "Q": "14k", "R": "15k", "S": "16k", "T": "17k", "V": "18k", "W": "19k",
    "X": "20k", "Y": "21k", "Z": "21k",
};

//Cuando se precione el boton "codificar"
document.getElementById("codificar").onclick = function (event) {

    event.preventDefault();

    VerificarYEnviar("codificar");
}

//Cuando se precione el boton "decodificar"
document.getElementById("decodificar").onclick = function (event) {

    event.preventDefault();

    VerificarYEnviar("decodificar");
}

//Cuando se precione el boton "copiar"
document.getElementById("copiar").onclick = function (event) {

    event.preventDefault();

    if (document.getElementById("resultado").value == "") {

        alert("No hay nada en el input de salida");

    } else {

        var contenido = document.getElementById("resultado").value;

        navigator.clipboard.writeText(contenido);

    }

}