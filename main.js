const form = document.getElementById('form-campos');

const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    
});

function adicionaLinha(){
    const inputNomeDoContato = document.getElementById('nome-contato');
    const inputNumeroDoContato = document.getElementById('numero-contato');

    if (nomes.includes(inputNomeDoContato.value)) {
        alert(`O nome: ${inputNomeDoContato.value} já foi inserido`)
    } else if (numeros.includes(inputNumeroDoContato.value)) {
        alert(`O número: ${inputNumeroDoContato.value} já foi inserido`)
    } else {
        nomes.push(inputNomeDoContato.value);
        numeros.push(inputNumeroDoContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato.value}</td>`;
        linha += `<td>${inputNumeroDoContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;

        inputNomeDoContato.value = '';
        inputNumeroDoContato.value = '';
    }
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

