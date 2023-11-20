const editarNota = (botaoEditar, textArea, nota) => {
    const botaoSalvar = nota.querySelector('.salvarNotaEditada');
    const listaTarefas = JSON.parse(localStorage.getItem('tarefas'));
    botaoEditar.classList.add('esconder');
    textArea.disabled = false;
    textArea.focus();
    botaoSalvar.classList.remove('esconder');
    const novaNota = {};
    novaNota.id = nota.id;

    botaoSalvar.addEventListener('click', () => {
        if (textArea.value != '') {
            const listaTarefasEditada = JSON.parse(localStorage.getItem('tarefas'));
            const indexNota = listaTarefas.findIndex((element) => {
                return element.id == novaNota.id;
            });
            listaTarefasEditada[indexNota].value = textArea.value;
            localStorage.setItem('tarefas', JSON.stringify(listaTarefasEditada));

            botaoSalvar.classList.add('esconder');
            botaoEditar.classList.remove('esconder');
            textArea.disabled = true;
        } else {
            textArea.placeholder = 'Este campo não pode ficar vazio!';
        }
    });
}

export default editarNota;