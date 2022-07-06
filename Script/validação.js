function validar() {
    
    /*Dados Base Const*/
    const name = document.getElementById("nome").value;
    const login = document.getElementById("email").value;
    const tel = document.getElementById("telefone").value;

    /*Sex Const*/
    const sexo = document.getElementById("sex").value;
    const nasc = document.getElementById("birth").value;

    /*Endereço Const*/
    const cep = document.getElementById("cep").value;
    const estado = document.getElementById("estado").value;
    const end = document.getElementById("endereco").value;
    const city = document.getElementById("city").value;

    /*Dados Base Checkage*/

    if (name == ""){
        window.alert("Por Favor preencha a seção Nome");
        return;
    }

    if (login == ""){
        window.alert("Por Favor preencha a seção E-mail");
        return;
    }

    if ((!login.includes("@")) || (!login.includes(".")))  {
        window.alert("Por Favor preencha um E-mail valido");
        return;
    }

    if (tel == ""){
        window.alert("Por Favor preencha a seção telefone");
        return;
    }

    if (tel.length != 9){
        window.alert("Por Favor preencha um telefone valido");
        return;        
    }

    /*Sex Checkage*/

    if (sexo == ""){
        window.alert("Por Favor prencha a seção Sexo");
        return;
    }

    if ((sexo != "M") && (sexo != "F")){
        window.alert("Por Favor insira um Sexo válido");
        return;
    }

    if (nasc == ""){
        window.alert("Selecione sua data de nascimento");
        return;
    }

    if (document.getElementById("rec").checked == false && document.getElementById("elo").checked == false && document.getElementById("info").checked == false && document.getElementById("sug").checked == false){
        window.alert("Selecione uma das opções do Feedback");
        return;
    }

    /*Endereço Checkage*/

    if (cep == ""){
        window.alert("Insira seu CEP");
        return;
    }

    if (cep.length != 8){
        window.alert("CEP Invalido");
        return;
    }
    
    if (estado == ""){
        window.alert("Insira seu Estado");
        return;
    }

    if (end == ""){
        window.alert("Por Favor preencha a seção Endereço");
        return;
    }

    if (city == ""){
        window.alert("Por Favor preencha a seção Cidade");
        return;
    }

    /*Else*/

    else{
        window.alert("Seja bem Vindo " + name);
        return;
    }
}   