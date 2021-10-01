//SOMAR DOIS NÚMEROS
function soma() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let somar = parseInt(a) + parseInt(b);
    alert("Resultado: " + somar);
 } 



 //ESTRUTURA DE CONDIÇÃO, VERIFICAR SE PODE VOTAR OU NÃO
function verificarIdade() {   
    var idade = document.getElementById("idade").value
    if (idade < 16 && idade > 0) {
        var resposta = document.getElementById("demo").innerHTML = "Você é menor de idade e não pode votar"
    }
    else if (idade >= 16 && idade < 18){
        var resposta = document.getElementById("demo").innerHTML = `Você tem ${idade} e pode votar ou não`
    }
    else if(idade >= 18 && idade < 65){
        var resposta = document.getElementById("demo").innerHTML = "Você é maior de idade é obrigatório votar"
    }
    else if(idade >= 65){
        var resposta = document.getElementById("demo").innerHTML = `Você tem ${idade} e não precisa mais votar, mas pode`
    } 
    else {
        var resposta = document.getElementById("demo").innerHTML = "Não é possível verificar a idade"
    }
}

function Limpar() {
    var idade = document.getElementById("idade").value = ""    
    var resposta = document.getElementById("demo").innerHTML = ""
}




