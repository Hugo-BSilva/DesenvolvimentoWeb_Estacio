let bt = alert("Hello World")
function inicio(){
    let botao = document.createElement("button");
    document.getElementById("principal").appendChild(botao);
    document.getElementsByTagName("button")[0].innerHTML = "Clique";
    document.getElementsByTagName("button")[0].id = "botao0";
    //botao.addEventListener("click", bt); 
    botao.addEventListener('click', function() {
        alert('Hello World')
    })
}



function botao(){
    let cor = document.getElementById("botao").style.backgroundColor;
    if(cor != "red"){
    document.getElementById("botao").style.backgroundColor = "red";
    } else {
    document.getElementById("botao").style.backgroundColor = "yellow";
    }
}