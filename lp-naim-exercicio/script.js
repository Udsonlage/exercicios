const botaoHamb = document.querySelector("#botaoHamb");
const lista = document.querySelector("#lista");
botaoHamb.addEventListener("click", (evt) => {
    if (lista?.classList.contains("listaEscondida")) {
        lista?.classList.replace("listaEscondida", "listaAtiva");
    }
    else if (lista?.classList.contains("listaAtiva")) {
        lista?.classList.replace("listaAtiva", "listaEscondida");
    }
});
export {};
//# sourceMappingURL=script.js.map