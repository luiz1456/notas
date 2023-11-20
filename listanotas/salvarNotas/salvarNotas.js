const salvarNota = (novaNota) => {
    const arrayNotas = JSON.parse(localStorage.getItem('tarefas')) || [];
    arrayNotas.push(novaNota);
    localStorage.setItem('tarefas', JSON.stringify(arrayNotas));

}

export default salvarNota;