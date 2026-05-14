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
            
            if(this.lista?.classList.contains       ("listaEscondida")){
                this.lista?.classList.replace("listaEscondida","listaAtiva")
            }else if(this.lista?.classList.contains("listaAtiva")){
                this.lista?.classList.replace("listaAtiva","listaEscondida")
            }
        })

    }
}

const meuMenu = new MenuHamburguer("#botaoHamb", "lista")