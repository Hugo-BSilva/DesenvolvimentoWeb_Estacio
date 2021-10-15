function traduzir(){
    let entrada = document.getElementById("palavra").value.toLowerCase();
    const dicionario = [
        ["white", "branco"],
        ["green", "verde"],
        ["white", "branco"],
        ["black", "preto"],
        ["red", "vermelho"],
        ["yellow","amarelo"],
        ["blue","azul"],
        ["green","verde"],
        ["brown","marrom"],
        ["Of","De"],
        ["To","Para"],
        ["And","E"],
        ["Is ","É"],
        ["You","Você"],
        ["He","Ele"],
        ["On","Em"],
        ["With","Com"],
        ["I","Eu"],
        ["At","Em"],
        ["Have","Ter"],
        ["From","De"],
        ["Or","Ou"],
        ["Had","Tinha"],
        ["Hot","Quente"],
        ["Word","Palavra"],
        ["But","Mas"],
        ["What","O que"],
        ["Some","Algum"],
        ["We","Nós"],
        ["Out","Fora"],
        ["Other","Outro"],
        ["There","Lá"],
        ["When","Quando"],
        ["Use","Usar"],
        ["Said","Disse"],
        ["Each","Cada"],
        ["She","Ela"],
        ["Which","Qual"],
        ["If","Se"],
        ["Many","Muitos"],
        ["Then","Então"],
        ["Write","Escrever"],
        ["Her","Ela"],
        ["Long","Longo"],
        ["Make","Fazer"],
        ["Thing","Coisa"],
        ["See","Ver"],
        ["Him","Ele"],
        ["Has","Tem"],
        ["Look","Olhar"],
        ["More","Mais"],
        ["Day","Dia"],
        ["Could","Poderia"],
        ["Go","Ir"],
        ["Come","Vir"],
        ["Sound","Som"],
        ["Know","Saber"],
        ["Water","Água"],
        ["Than","Do que"],
        ["Down","Baixo"],
        ["Side","Lado"],
        ["Now","Agora"],
        ["Find","Encontrar"],
        ["saturday","sábado"],
        ["sunday","domingo"]
    ];

    for (let i = 0; i < dicionario.length; i++) {
        let linha = [dicionario[i][0].toLowerCase(),dicionario[i][1].toLowerCase()];

        if (linha.indexOf(entrada) > -1) {
            if (linha.indexOf(entrada) == 0) {
                var traducao = document.getElementById("traducao").value = linha[1]
                //document.getElementById("traducao").innerHTML = linha[1];
            }
            else if(linha.indexOf(entrada) == 1){
                var traducao = document.getElementById("traducao").value = linha[0]
                //document.getElementById("traducao").innerHTML = linha[0];
            }
        }        
    }
}

function limpar() {
    var palavra = document.getElementById("palavra").value = ""
    var traducao = document.getElementById("traducao").value = ""
}