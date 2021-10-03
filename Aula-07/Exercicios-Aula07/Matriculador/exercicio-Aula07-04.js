

function Matricular() {
    let disciplinas = document.getElementById('disciplinas').value
    let array = []
    //let disciplinasCadastradas = document.getElementById('disciplinasCadastradas').value = `Você está matriculado em: ${disciplinas.replace(' ', ', ')}.`

    alert(`${disciplinas}`)

    for (let index = 0; index < disciplinas.length; index++) {
        let elementos = disciplinas[index].replace(' ', ', ');
        array = disciplinas[index]
        console.log(array)
        //console.log(elementos)
        let disciplinasCadastradas = document.getElementById('disciplinasCadastradas').value = `Você está matriculado em: ${array}.`
    }
}