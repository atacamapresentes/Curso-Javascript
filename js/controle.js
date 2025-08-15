let main = document.getElementById('areaLista');
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');

function addTarefa(){
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let novoItem = `<div class="item">
            <div class="item-icone">
               <i class="fa-regular fa-circle"></i>
            </div>
            <div class="item-nome">
                Teste de Tarefa
            </div>
            <div class="item-botao">
                <button class="delete"><i class="fa-solid fa-trash"></i>Deletar</button>
            </div>
        </div>
        <div class="item clicado">
            <div class="item-icone">
               <i class="fa-solid fa-circle-check"></i>
            </div>
            <div class="item-nome">
                Teste de Tarefa
            </div>
            <div class="item-botao">
                <button class="delete"><i class="fa-solid fa-trash"></i>Deletar</button>
            </div>
        </div>`
    main.innerHTML += novoItem;
    }    
    }