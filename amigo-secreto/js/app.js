let amigos = [];
let numeroMinimoAmigos = 4;

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // não permite incluir nome em branco
    if (amigo.value =='') {
        alert("Não é possível incluir um amigo sem definir o nome dele...");
        return;
    }

    amigos.push(amigo.value);

    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';

    atualizarLista();
    atualizarSorteio();

}

function embaralha(lista) {

    // Checagem de quantidade mínima para embaralhar lista de amigos
    if (amigos.length < 1) {
        alert("Não é possível embaralhar a Lista de amigos quando ela só tiver um nome.");
        return;
    } else if (amigos.length < 3 ) {
        alert("É previsível o embaralhamento da lista de amigos com dois nomes, por isso não será embaralhado.");
        return;
    }

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {

    // checagem de número mínimo para sorteio
    if (amigos.length < numeroMinimoAmigos) {
        alert('O mínimo de amigos [' + numeroMinimoAmigos + '] não foi atingido\nNa lista só há [' + amigos.length + '].');
        return;
    }

    // Embaralha o array de amigos
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    // apaga Sorteio anterior
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length -1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
