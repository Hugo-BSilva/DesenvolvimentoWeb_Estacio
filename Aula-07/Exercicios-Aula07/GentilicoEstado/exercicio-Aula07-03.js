function verificarUF() {
    let uf = document.getElementById("uf").value
    
    switch (uf.toUpperCase()) {
        case "AC":
        case "ACRE":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é acriano`
            break;
        case "AL":
        case "ALAGOAS":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é alagoano`
            break;
        case "AP":
        case "AMAPÁ":
        case "AMAPA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é amapaense`
            break;
        case "AM":
        case "AMAZONAS":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é amazonense`
            break;
        case "BA":
        case "BAHIA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é baiano`
            break;
        case "CE":
        case "CEARÁ":
        case "CEARA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é cearense`
            break;
        case "DF":
        case "DISTRITO FEDERAL":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é brasiliense`
            break;
        case "ES":
        case "ESPÍRITO SANTO":
        case "ESPIRITO SANTO":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é  capixaba, espírito-santense`
            break;
        case "GO":
        case "GOIÁS":
        case "GOIAS":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é goiano`
            break;
        case "MA":
        case "MARANHÃO":
        case "MARANHAO":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é maranhense`
            break;
        case "MT":
        case "MATO GROSSO":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é mato-grossense`
            break;
        case "MS":
        case "MATO GROSSO DO SUL":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é sul-mato-grossense`
            break;
        case "MG":
        case "MINAS GERAIS":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é mineiro`
            break;
        case "PA":
        case "PARÁ":
        case "PARA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é paraense`
            break;
        case "PB":
        case "PARAÍBA":
        case "PARAIBA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é paraibano`
            break;
        case "PR":
        case "PARANÁ":
        case "PARANA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é paranaense`
            break;
        case "PE":
        case "PERNAMBUCO":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é pernambucano`
            break;
        case "PI":
        case "PIAUÍ":
        case "PIAUI":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é piauiense`
            break;
        case "RJ":
        case "RIO DE JANEIRO":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é fluminense (carioca é quem é da cidade do Rio de Janeiro)`
            break;
        case "RN":
        case "RIO GRANDE DO NORTE":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é potiguar ou norte-rio-grandense`
            break;
        case "RS":
        case "RIO GRANDE DO SUL":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é gaúcho ou sul-rio-grandense`
            break;
        case "RO":
        case "RONDÔNIA":
        case "RONDONIA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é rondoniano ou rondoniense`
            break;
        case "RR":
        case "RORAIMA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é roraimense`
            break;
        case "SC":
        case "SANTA CATARINA":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é catarinense ou barriga-verde`
            break;
        case "SP":
        case "SÃO PAULO":
        case "SAO PAULO":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é paulista`
            break;
        case "SE":
        case "SERGIPE":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é sergipano`
            break;
        case "TO":
        case "TOCANTINS":
            var resposta = document.getElementById("demo").innerHTML = `Você é de ${uf.toUpperCase()} e é tocantinense`
            break;   
        default:
            var resposta = document.getElementById("demo")
            alert("Ops... DIGITE A UF OU O NOME DE UM ESTADO BRASILEIRO !")
            resposta.style.color= "red"
            resposta.innerHTML = `DIGITE A UF OU O NOME DE UM ESTADO BRASILEIRO`
            break;
    }
}

function Limpar() {
    var uf = document.getElementById("uf").value = ""
    var resposta = document.getElementById("demo").innerHTML = ""
}