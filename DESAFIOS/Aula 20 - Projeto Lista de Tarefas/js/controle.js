let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="fa-classic fa-circle"></i>
        </div>
        
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
       
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"> 
                <i class="fa-solid fa-trash-can"> Deletar</i>
            </button>
        </div>
    </div>`;

    //ADICIONAR NOVO ITEM NO MAIN
    main.innerHTML += novoItem;
    
    //ZERAR OS CAMPOS
    input.value = "";
    input.focus();
    }
}

function deletar(id) {
    var tareffa = document.getElementById(id);
    tareffa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add('clicado');

        var icone = documente.getElementById('icone_' + id)
        icone.classList.remove('fa-classic fa-circle');
        icone.classList.add('fa-classic fa-circle-check');

    }
}

input.addEventListener("keyup", function(event) {
    //SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
}) 