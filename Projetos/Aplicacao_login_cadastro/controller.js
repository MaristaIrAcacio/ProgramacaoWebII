//Código JavaScript para armazenamento de dados sem uso de BD
var dadosLista = [];	//Cria um array vazio
//Cria função 
function salvarUser() {

    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
    dadosLista.push(nomeUser);
    criaLista();
    document.getElementById("nomeUser").value = "";
    } else {
        alert("Usuário favor preencher o campo nome");
    }
}

function criaLista() {
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuario</th><th>Ações</th></tr>";
    for(let i = 0; i <= (dadosLista.length -1); i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button> <button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById("tabela").innerHTML = tabela;
    }
}
 
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
    }
}
function excluir(i) {
    dadosLista.splice((i -1), 1);
    document.getElementById("tabela").deleteRow(i);
}
function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i -1)];
    dadosLista.splice(dadosLista[(i -1)], 1);
}
