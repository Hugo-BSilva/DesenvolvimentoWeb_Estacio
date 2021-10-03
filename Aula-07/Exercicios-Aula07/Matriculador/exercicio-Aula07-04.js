//MOSTRA AS DISCIPLINAS MATRICULADAS NA TEXTAREA
function Matricular() {
    let disciplinas = document.getElementById('disciplinas').value
    discMatriculadas(disciplinas)
}

function discMatriculadas(dados){
    let array = [dados]

    if(array == ""){
        console.log(array)
        alert("Ops... Você não digitou nada, tente novamente !")
    }
    else{
        for (let i = 0; i < array.length; i++) {
            var element = [array[i].split(' ').join(', ')]
            
            console.log(`Você está matriculado em: ${element}.`)
            let disciplinasCadastradas = document.getElementById('disciplinasCadastradas').value = `Você está matriculado em: ${element}.`
        }
    }
}

function Limpar() {
    let disciplinas = document.getElementById('disciplinas').value = ""
    let disciplinasCadastradas = document.getElementById('disciplinasCadastradas').value = ""
}