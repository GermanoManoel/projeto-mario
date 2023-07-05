// [X] Capturar todos os elementos e guarda numa variáveis
// [X] Fazer com que o botão de "Veja trailer" abra a modal

var modal = document.getElementsByClassName("modal_mario")[0];
var open = document.getElementsByClassName("botao_mario")[0];
    open.addEventListener("click", abrir_modal);

    function abrir_modal() {
        modal.style.display = "block"
    }


// [X] Fazer com que o botão "Fechar" funcione para fechar a modal

var close = document.getElementsByClassName("botao_fechar")[0];
    close.addEventListener("click", fechar_modal);
        
    function fechar_modal() {
        modal.style.display = "none"
    }