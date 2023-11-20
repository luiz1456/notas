import { botaoAddNota, mensagemSemNotas, botaoRemoverTudo } from './referenciasHtml/referencias.js';
import estruturaDaNota from "./criarNovasNotas/estuturaDaNota.js";
import ajustarAlturaTextArea from "./ajustarTamanhoInput/ajustarTamanho.js";

const carregarTarefasSalvas = () => {
    const listaTarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (listaTarefas && listaTarefas != '') {
        listaTarefas.forEach((Element) => {
            const id = Element.id;
            estruturaDaNota(id);
            const notaSalva = document.getElementById(id);
            const input = notaSalva.querySelector('.edit-nota');
            input.value = Element.value;
            input.disabled = true;
            const botoesSalvar = notaSalva.querySelector('.salvar');
            botoesSalvar.classList.add('esconder');
            const botaoEditar = notaSalva.querySelector('.editar')
            botaoEditar.classList.remove('esconder')
            ajustarAlturaTextArea(input);
        });
    } else if (!listaTarefas || listaTarefas == '') {
        mensagemSemNotas.classList.remove('esconder');
        botaoRemoverTudo.classList.add('esconder');
    }
}

document.addEventListener('DOMContentLoaded', carregarTarefasSalvas);

botaoAddNota.addEventListener('click', () => {
    mensagemSemNotas.classList.add('esconder');
    estruturaDaNota();
    botaoRemoverTudo.classList.remove('esconder');
});