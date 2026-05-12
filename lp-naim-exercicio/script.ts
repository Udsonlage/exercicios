const botaoHamb = document.querySelector("#botaoHamb") as HTMLButtonElement
const lista = document.querySelector("#lista")

botaoHamb.addEventListener("click", (evt: MouseEvent): void => {

    if(lista?.classList.contains("listaEscondida")){
        lista?.classList.replace("listaEscondida","listaAtiva")
    }else if(lista?.classList.contains("listaAtiva")){
        lista?.classList.replace("listaAtiva","listaEscondida")
    }
})