let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')

function addTarefa() {
    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoItem = `<div class="item">
        <div class="item-icone">
            <i class="fa-classic fa-circle"></i>
        </div>
        
        <div class="item-nome">
            Teste de tarefa
        </div>
       
        <div class="item-botao">
            <button class="delete"> 
                <i class="fa-solid fa-trash-can"> Deletar</i>
            </button>
        </div>
    </div>`;

    main.innerHTML += novoItem;
    
    }
}