//EXERCICIO 1 E 2
function LimparTexto(){
    document.getElementById('texto01').value = "";
}

//EXERCICIO 3 E 4
function TrocarImagem01(){
    var img = document.querySelector("#image")
    var text = document.getElementById("#Exercicio03")

    img.setAttribute('src', '../Exercicios_Hugo_BSilva/img/img01 (2).jpg')
}

function TrocarImagem02(){
    var img = document.querySelector("#image")
    var text = document.getElementById("#Exercicio03")

    img.setAttribute('src', '../Exercicios_Hugo_BSilva/img/img01 (3).jpg')
}



//EXERCICIO 06, 07, 08, 09
var btnSoma = document.getElementById('somar')
var btnSubtracao = document.getElementById('subtrair')
var valorInput = document.querySelector('#texto02')

btnSoma.addEventListener('click', function(){
    var result = parseInt(valorInput.value)
    result += 1
    valorInput.value = result
});

btnSubtracao.addEventListener('click', function(){
    var result = parseInt(valorInput.value)
    result -= 1
    valorInput.value = result
});


