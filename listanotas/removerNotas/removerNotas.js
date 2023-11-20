import { botaoRemoverTudo, listaTarefas, mensagemSemNotas } from '../referenciasHtml/referencias.js';

botaoRemoverTudo.addEventListener('click', () => {
    localStorage.clear();

    const tarefas = listaTarefas.querySelectorAll('.container-nota');
    tarefas.forEach(element => element.parentElement.removeChild(element));
    mensagemSemNotas.classList.remove('esconder');
    botaoRemoverTudo.classList.add('esconder')
});

const removerNota = (nota) => {
    nota.parentElement.removeChild(nota);
    const listaTarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const listanotas = listaTarefas.querySelectorAll('.container-nota');
    const indexNota = listaTarefasSalvas.findIndex((element) => {
        return element.id == nota.id;
    });
    listaTarefasSalvas.forEach(element => {
        if (element.id === nota.id) {
            listaTarefasSalvas.splice(indexNota, 1);
            localStorage.setItem('tarefas', JSON.stringify(listaTarefasSalvas));
        }
    })
    if (listanotas.length == 0) {
        mensagemSemNotas.classList.remove('esconder');
        botaoRemoverTudo.classList.add('esconder');
    }
}

export default removerNota;