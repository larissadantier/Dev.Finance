const Modal = {
    open(){
        //Abrir Modal
        document.querySelector(".modal-overlay")
        //Adicionar a class active ao modal
        .classList.add("active");
    },
    close(){
        //Fechar Modal
        document.querySelector(".modal-overlay")
        //Remover a class active ao modal
        .classList.remove("active");
        
    }
}