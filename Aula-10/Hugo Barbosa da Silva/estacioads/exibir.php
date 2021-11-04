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
    <title>Exibir</title>
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

        <div class="row mt-5" id="painel">
            <table class="table col-sm-12 table-dark">
                <thead>
                    <tr>
                        <th class="col-sm-1">Id</th><th class="col-sm-3">Nome</th><th class="col-sm-4">E-mail</th><th class="col-sm-3">Cidade</th><th class="col-sm-1">UF</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $result = $mysqli->query("SELECT * FROM clientes ORDER BY nome DESC");
                        while ($query = $result->fetch_assoc())
                        {
                        echo "<tr style='font-size:90%;'>";
                        echo " <td>".$query["id"]."</td>";
                        echo " <td>".$query["nome"]."</td>";
                        echo " <td>".$query["email"]."</td>";
                        echo " <td>".$query["cidade"]."</td>";
                        echo " <td>".$query["uf"]."</td>";
                        echo "</tr>";
                        }
                        mysqli_close($mysqli);
                    ?>
                </tbody>
            </table>
        </div>    
    </div>
</body>
</html>