<<<<<<< HEAD
import { botaoAddNota, mensagemSemNotas, botaoRemoverTudo } from './referenciasHtml/referencias.js';
import estruturaDaNota from "./criarNovasNotas/estuturaDaNota.js";
import ajustarAlturaTextArea from "./ajustarTamanhoInput/ajustarTamanho.js";
=======
const botaoAddNota = document.querySelector('#botao-add');
const listaTarefas = document.querySelector('#lista-tarefas');
const mensagemSemNotas = document.querySelector('#mensagem0notas');

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

const criaNota = (notaCriada) => {
    const botaoSalvar = notaCriada.querySelector('.salvar');
    const input = notaCriada.querySelector('.edit-nota');
    const botaoEditar = notaCriada.querySelector('.editar');
    const novaNota = {}
    novaNota.id = notaCriada.id;
    input.focus();

    input.addEventListener('input', () => {
        novaNota.value = input.value;
    });
    botaoSalvar.addEventListener('click', () => {
        if (input.value != '') {
            botaoSalvar.classList.add('esconder');
            salvarNota(novaNota);
            input.disabled = true;
            botaoEditar.classList.remove('esconder');
        } else {
            input.placeholder = 'Este campo não pode ficar vazio!'
        }
    });
}

const salvarNota = (novaNota) => {
    const arrayNotas = JSON.parse(localStorage.getItem('tarefas')) || [];
    arrayNotas.push(novaNota);
    localStorage.setItem('tarefas', JSON.stringify(arrayNotas));

}
const botaoRemoverTudo = document.getElementById('remover-tudo');

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


botaoRemoverTudo.addEventListener('click', () => {
    localStorage.clear();

    const tarefas = listaTarefas.querySelectorAll('.container-nota');
    tarefas.forEach(element => element.parentElement.removeChild(element));
    mensagemSemNotas.classList.remove('esconder');
    botaoRemoverTudo.classList.add('esconder')
});

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
>>>>>>> f0cf9947f9cd50bc6bbc7e22815dac670ef1783a

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
<<<<<<< HEAD
});
=======
});

const ajustarAlturaTextArea = (textArea) => {
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight) + 'px';
}
>>>>>>> f0cf9947f9cd50bc6bbc7e22815dac670ef1783a
