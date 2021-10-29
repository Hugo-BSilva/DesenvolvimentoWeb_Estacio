<?php
    include "conectar.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <title>Incluir</title>
</head>
<body class="bg-dark text-info text-center">
    <div class="container mt-2">
        
        <div class="row">
            <a class="col-sm-2 btn btn-info fw-bold" href="incluir.php">Incluir</a>
            <a class="col-sm-2 btn btn-danger fw-bold" href="excluir.php">Excluir</a>
            <a class="col-sm-2 offset-sm-1 btn btn-primary fw-bold" href="index.php">&#127968;</a>
            <a class="col-sm-2 offset-sm-1 btn btn-warning fw-bold" href="alterar.php">Alterar</a>
            <a class="col-sm-2 btn btn-success fw-bold" href="exibir.php">Exibir</a>
        </div>

        <div class="row mt-5 text-start" id="painel">
            <form action="incluir.php" method="POST">

                <div class="row">
                    <label for="nome" class="col-sm-4">Nome:</label>
                    <input type="text" name="nome" placeholder="Qual seu nome?" class="col-sm-8 rounded-3">
                </div>

                <div class="row mt-1">
                    <label for="email" class="col-sm-4">E-mail:</label>
                    <input type="text" name="email" placeholder="Qual seu e-mail?" class="col-sm-8 rounded-3">
                </div>

                <div class="row mt-1">
                    <label for="cidade" class="col-sm-4">Cidade:</label>
                    <input type="text" name="cidade" placeholder="Qual sua cidade?" class="col-sm-8 rounded-3">
                </div>

                <div class="row mt-1">
                    <label for="uf" class="col-sm-4">UF:</label>
                    <input type="text" name="uf" placeholder="Qual sua UF?" class="col-sm-8 rounded-3">
                </div>

                <div class="row mt-1 mb-2">
                    <input type="hidden" value="-1" name="id">
                    <button type="submit" class="btn btn-info fw-bold col-sm-8 offset-sm-4 fs-6">Incluir</button>
                </div>

            <?php

                if(empty($_POST["nome"])||empty($_POST["email"])||empty($_POST["cidade"])||empty($_POST["uf"])){
                echo "<p class='text-danger'>Preencha todos os campos corretamente</p>";
                exit;
                } else {
                    $nome = $_POST["nome"];
                    $email = $_POST["email"];
                    $cidade = $_POST["cidade"];
                    $uf = $_POST["uf"];
                    $query = "INSERT INTO clientes(`nome`,`email`,`cidade`,`uf`) VALUES ('$nome', '$email','$cidade','$uf')";

                    //Se os dados foram incluídos com sucesso ou não
                    if(mysqli_query($mysqli, $query)){
                        echo "<p class='text-success'>Os dados foram inseridos corretamente. Verifique o resultado na aba Exibir.</p>";
                    } else {
                        echo "<p class='text-danger'>Houve um erro.</p><p>Nenhum dado foi inserido.</p>".mysqli_error($mysqli);
                    }
                }
                //Fecha a conexão com o banco
                mysqli_close($mysqli);
            ?>

            </form>
        </div>
    </div>
</body>
</html>