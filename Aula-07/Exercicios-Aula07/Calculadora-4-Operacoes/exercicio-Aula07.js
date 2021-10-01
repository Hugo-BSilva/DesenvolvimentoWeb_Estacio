//SOMA
function Soma() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    ValidarCampos(n1, n2)
    let resultSoma = parseFloat(n1) + parseFloat(n2)
    var resposta = document.getElementById("soma").innerHTML = `${n1} + ${n2} = ` + resultSoma.toString()
}

//SUBTRAÇÃO
function Sub() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    ValidarCampos(n1, n2)
    let resultSub = parseFloat(n1) - parseFloat(n2)
    var resposta = document.getElementById("sub").innerHTML = `${n1} - ${n2} = ` + resultSub.toString()
}

//MULTIPLICAÇÃO
function Multi() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    ValidarCampos(n1, n2)
    let resultMulti = parseFloat(n1) * parseFloat(n2)
    var resposta = document.getElementById("multi").innerHTML = `${n1} * ${n2} = ` + resultMulti.toString()
}

//DIVISÃO
function Divisao() {
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    ValidarCampos(n1, n2)
    let resultDivisao = parseFloat(n1) / parseFloat(n2)
    var resposta = document.getElementById("divisao").innerHTML = `${n1} / ${n2} = ` + resultDivisao.toString()
}

function Limpar() {
    var clear = ""
    var resposta = document.getElementById("soma").innerHTML ="RESULTADO DA SOMA:"
    var resposta = document.getElementById("sub").innerHTML ="RESULTADO DA SUBTRAÇÃO:"
    var resposta = document.getElementById("multi").innerHTML ="RESULTADO DA MULTIPLICAÇÃO:"
    var resposta = document.getElementById("divisao").innerHTML ="RESULTADO DA DIVISÃO:"
}

//Verifica se o usuário digitou um número ou não 
function ValidarCampos(n1, n2) {
    try {
        if (n1 == "" || n2 == "") {
            throw new TypeError("Ops você não preencheu um campo, favor preencha todos para realizar o cáculo !")
        }
        else if ((!parseFloat(n1) || !parseInt(n1)) || (!parseFloat(n2) || !parseInt(n2))) {
            throw new TypeError("Ops não é um número, digite novamente !")
        }
        else{
            console.log("Calculado com sucesso !")
        }  
    } catch (error) {
        alert(error.message)
    }
}