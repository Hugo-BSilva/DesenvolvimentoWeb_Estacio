<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
</head>
<body class="bg-dark text-info text-center">
    <script>
        function chamaTexto(){
            var xhttp = new XMLHttpRequest(); //Cria uma requisição
            xhttp.onreadystatechange = function() { //Aguarda resposta do servidor
                if (this.readyState == 4 && this.status == 200) { 
                    document.getElementById("ajax").innerHTML = this.responseText; //Coloca texto dentro da div ajax
                }
            };
            xhttp.open("GET", "ajax.txt", true); //Abre a requisição
            xhttp.send(); //Envia a requisição ao servidor
        }

        function passaDados(){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("ajax").innerHTML = this.responseText;
                }
            };
            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let url = "exibe.php?nome="+nome+"&email="+email;
            xhttp.open("GET", url, true);
            xhttp.send();            
        }
        function passaDadosPost(){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("ajax").innerHTML = this.responseText;
                }
            };
            let nome = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let url = "nome="+nome+"&email="+email;
            xhttp.open("POST", "exibePost.php", true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(url);
        }
        function chamaXML(){
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    ajeita(this);
                }
            };
            xhttp.open("GET", "alunos.xml", true);
            xhttp.send();        
        }
        function ajeita(xml) {
            var xmlDoc = xml.responseXML;
            var table="<tr><th>Aluno(a)</th><th>E-mail</th></tr>";
            var x = xmlDoc.getElementsByTagName("aluno");
            for (var i = 0; i <x.length; i++) {
                table += "<tr><td>" +
                x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
                "</td></tr>";
            }
            document.getElementById("tabela").innerHTML = table;
        }
    </script>
    <div class="container mt-5" id="ajax">
        <h2>Clique no botão para usar Ajax</h2>
        <button onclick="chamaTexto()" class="btn btn-success rounded-3">Mudar a página</button>
        <div class="row mt-2">
            <label for="nome" class="col-sm-2 fs-3">Nome:</label>
            <input type="text" name="nome" id="nome" class="col-sm-3 rounded-3 bg-secondary">
            <label for="email" class="col-sm-2 fs-3">Email:</label>
            <input type="text" name="email" id="email" class="col-sm-3 rounded-3 bg-secondary">            
        </div>
        <button onclick="passaDados()" class="btn btn-primary rounded-3 col-sm-2 mt-2">Enviar GET</button>
        <button onclick="passaDadosPost()" class="btn btn-primary rounded-3 col-sm-2 mt-2">Enviar POST</button>
        <div class="mt-2">
            <button onclick="chamaXML()" class="btn btn-warning rounded-3">Alunos</button>
            <table id="tabela" class="table table-dark"></table>
        </div>
    </div>
</body>
</html>