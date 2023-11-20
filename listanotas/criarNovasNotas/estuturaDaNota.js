import criaNota from "./criarNota.js";
import ajustarAlturaTextArea from "../ajustarTamanhoInput/ajustarTamanho.js";
import editarNota from "../editarNota/editarNotas.js";
import removerNota from "../removerNotas/removerNotas.js";

const listaTarefas = document.querySelector('#lista-tarefas');

const estruturaDaNota = (id) => {
    const novaNota = document.createElement("div");
    novaNota.classList.add('container-nota');
    novaNota.id = id || new Date().getTime();

    const textArea = document.createElement('textarea');
    textArea.placeholder = 'Nova nota...';
    textArea.className = 'edit-nota';
    textArea.classList.add('disabled');

    const containerBotoes = document.createElement('div');
    containerBotoes.className = 'container-botoes';

    const botaoSalvar = document.createElement('button');
    botaoSalvar.className = 'salvar';
    botaoSalvar.textContent = 'salvar';

    const botaoEditar = document.createElement('button');
    botaoEditar.className = 'editar';
    botaoEditar.textContent = 'editar';
    botaoEditar.classList.add('esconder');

    const botaoSalvarNotaEditada = document.createElement('button');
    botaoSalvarNotaEditada.className = 'salvarNotaEditada';
    botaoSalvarNotaEditada.textContent = 'salvar';
    botaoSalvarNotaEditada.classList.add('esconder');

    const botaoRemover = document.createElement('button');
    botaoRemover.className = 'remover';
    botaoRemover.textContent = 'remover';

    listaTarefas.appendChild(novaNota);
    novaNota.appendChild(textArea);
    novaNota.appendChild(containerBotoes);
    containerBotoes.appendChild(botaoSalvarNotaEditada);
    containerBotoes.appendChild(botaoSalvar);
    containerBotoes.appendChild(botaoEditar);
    containerBotoes.appendChild(botaoRemover);


    textArea.addEventListener('input', () => {
        ajustarAlturaTextArea(textArea);
    })

    botaoEditar.addEventListener('click', () => {
        editarNota(botaoEditar, textArea, novaNota);
    });
    botaoRemover.addEventListener('click', () => removerNota(novaNota));

    criaNota(novaNota);

}

export default estruturaDaNota;