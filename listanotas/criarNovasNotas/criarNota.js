import salvarNota from "../salvarNotas/salvarNotas.js";

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

export default criaNota;

