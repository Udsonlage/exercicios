// Menu Hamburguer
class MenuHamburguer {
    botao;
    lista;
    constructor(idBotao, idLista) {
        this.botao = document.querySelector(idBotao);
        this.lista = document.getElementById(idLista);
        this.alternarMenu();
    }
    alternarMenu() {
        this.botao.addEventListener("click", (evt) => {
            this.lista.classList.toggle("listaAtiva");
        });
    }
}
const meuMenu = new MenuHamburguer("#botaoHamb", "lista");
export {};
//# sourceMappingURL=script.js.map