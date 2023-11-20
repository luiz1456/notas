const ajustarAlturaTextArea = (textArea) => {
    textArea.style.height = 'auto';
    textArea.style.height = (textArea.scrollHeight) + 'px';
}

export default ajustarAlturaTextArea;