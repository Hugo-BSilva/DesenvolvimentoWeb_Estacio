
//ESTRUTURA DE CONDIÇÃO
function verificarIdade() {   
    var idade = document.getElementById("idade").value
    ValidarCampos(idade)
    if (idade < 16 && idade > 0) {
        var resposta = document.getElementById("demo").innerHTML = "Você é menor de idade, ou seja CRIANÇA"
    }
    else if (idade >= 16 && idade < 18){
        var resposta = document.getElementById("demo").innerHTML = `Você tem ${idade}, ou seja ADOLESCENTE`
    }
    else if(idade >= 18 && idade < 65){
        var resposta = document.getElementById("demo").innerHTML = "Você é maior de idade, ou seja ADULTO"
    }
    else if(idade >= 65){
        var resposta = document.getElementById("demo").innerHTML = `Você tem ${idade}, ou seja IDOSO`
    } 
    else {
        var resposta = document.getElementById("demo").innerHTML = "Não é possível verificar a idade"
    }
}

function Limpar() {
    var idade = document.getElementById("idade").value = ""    
    var resposta = document.getElementById("demo").innerHTML = ""
}

//Verifica se o usuário digitou um número ou não 
function ValidarCampos(i) {
    try {
        if (i == "") {
            throw new TypeError("Ops você não preencheu um campo, favor preencha para obter uma resposta !")
        }
        else if (parseFloat(i) && !parseInt(i)) {
            throw new TypeError("Ops não é um número/não é um número válido, digite novamente !")
        }
        else{
            console.log("Calculado com sucesso !")
        }  
    } catch (error) {
        alert(error.message)
    }
}

