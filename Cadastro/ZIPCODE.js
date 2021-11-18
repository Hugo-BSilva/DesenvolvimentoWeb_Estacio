var submitButton = document.querySelector('#consultarCEP')
var resetButton = document.querySelector('form #clear')
var zipCodeField = document.querySelector('#cep')
var content = document.querySelector('main')
var street = document.querySelector('#street')
var neighborhood = document.querySelector('#neighborhood')
var cityState = document.querySelector('#cityState')
var submitButton2 = document.getElementById('#buttonSubmit')

submitButton.addEventListener('click', run)

function run (event){
    event.preventDefault()

    /* --- VALIDANDO O CEP ---*/
    var zipCode = zipCodeField.value

    zipCode = zipCode.replace(' ', '')
    zipCode = zipCode.replace('.', '')
    zipCode = zipCode.trim()

    axios.get('https://viacep.com.br/ws/'+ zipCode + '/json/')
    .then(function (response){
        if (response.data.error) {
            throw new Error('Invalid zip code')
        }

        street.value = response.data.logradouro
        neighborhood.value = response.data.bairro
        cityState.value = response.data.localidade + '/' + response.data.uf
    })
    .catch(function (error){
        console.log(error)
        if(zipCode == '' ){
            alert("You didn't enter a zip code, try again!")
        }
        else{
            alert('Invalid zip code, try again!')
        }
    })
}

function clear(clean){
    clean.preventDefault()
    content.innerHTML = ''
}
