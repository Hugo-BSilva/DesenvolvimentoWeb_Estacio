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
    <title>CRUD com PHP + MySQL</title>
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

        <div class="row mt-3 mb-3">
            <h1 class="col-sm-12 fs-1 fw-bold text-primary">CRUD com Apache, MySQL e PHP</h1>
        </div>

        <div class="row mt-1" id="painel">
            <label id="logo" class="bg-info col-sm-12 text-white fw-bold rounded-3 mt-5" style="font-size:300%;">ADS - Estácio</label>
        </div>
        
    </div>
</body>
</html>