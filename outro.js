function validarFormulario() {
    var form = document.forms['cadastro'];
    var nome = form['cadastro'].value;
    var email = form['email'].value;
    var senha = form['senha'].value;
    var repita = form['senha2'].value;

    if (validaCampo(nome, 'preencha seu nome') &&
        validaCampo(email, 'preencha seu email') &&
        validaCampo(senha, 'preencha sua senha') &&
        validaCampo(repita, 'repita sua senha') &&
        confereSenhas(senha, repita)) {
        alert('Obrigado por se cadastrar');
        return true;
    }
    return false;

}

function validaCampo(campo, mensagem) {
    if (campo == null || campo == "") {
        alert(mensagem);
        return false;
    }
    return true;
}

function confereSenhas(senha, repita) {
    if (senha != repita) {
        alert('As senhas devem ser iguais! presta atenção.');
        return false;
    }
    return true;
}