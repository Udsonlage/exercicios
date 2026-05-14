// Menu Hamburguer
class MenuHamburguer{

    private botao: HTMLButtonElement;
    private lista: HTMLElement;

    constructor(idBotao: string,idLista: string){
        this.botao = document.querySelector(idBotao) as HTMLButtonElement
        this.lista = document.getElementById(idLista) as HTMLElement

        this.alternarMenu()
    }

    private alternarMenu(): void {

        this.botao.addEventListener("click",(evt: MouseEvent): void =>{
            this.lista.classList.toggle("listaAtiva")
        })

    }
}

const meuMenu = new MenuHamburguer("#botaoHamb", "lista")