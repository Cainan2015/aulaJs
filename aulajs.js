//var helloWorld ='Hello, World';
//var x = 0;
//var y ='0';
//var z = 1;
//alert(helloWorld);
//alert(x!==y);
//x=y>>z;
//y=(x===1)?1:(x===0)?0:2;
//alert(y)
//document.getElementById("titulo").innerHTML='eai?';
function horas() {

    document.getElementById('demo').innerHTML = Date();
}

function titulo() {
    document.getElementById('titulo').innerHTML = 'veja a hora e data atual';
}

function validarFormulario() {
    var form = document.forms['cadastro'];
    var nome = form['cadastro'].value;
    var email = form['email'].value;
    var senha = form['senha'].value;
    var repita = form['senha2'].value;

    if (nome == null || nome == "") {
        alert('preencha seu nome ');
        return false;
    }
    if (email == null || email == "") {
        alert('preencha seu email ');
        return false;
    }
    if (senha == null || senha == "") {
        alert('preencha sua senha ');
        return false;
    }
    if (repita == null || repita == "") {
        alert('preencha sua senha');
        return false;
    }
    if (senha != repita){
        alert('As senhas devem ser iguais! presta atenção.');
        return false;
    }
    alert('Obrigado por se cadastrar!');
    return true;
}