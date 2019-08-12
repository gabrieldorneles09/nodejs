let tabelaJogador = document.querySelector('#tabelaJogador');

tabelaJogador.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;


    if(elementoClicado.dataset.type = 'remocao'){
        idJogador = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/jogadores/${idJogador}`, { method: 'DELETE' })
        .then(resposta => {
            let tr = elementoClicado.closest(`#jogador_${idJogador}`);
            tr.remove();
        });
    }

});