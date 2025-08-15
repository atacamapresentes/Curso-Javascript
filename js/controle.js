let main = document.getElementById('areaLista');
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let contador = 0;

function addContador(){
    contador++;
}

function addTarefa(){
    let valorInput = input.value;

    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
        let AddContador = contador++;

        let novoItem = `<div id"contador" class="item">
            <div id ="contador" class="item-icone">
               <i class="fa-regular fa-circle"></i>
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
