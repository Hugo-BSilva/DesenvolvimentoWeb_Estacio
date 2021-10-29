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
    <title>Excluir</title>
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
                        <th class="col-sm-3">&#8861;ID</th><th class="col-sm-2">Nome</th><th class="col-sm-2">E-mail</th><th class="col-sm-2">Cidade</th><th class="col-sm-1">UF</th>
                    </tr>
                </thead>

                <tbody>
                    <?php
                        $result = $mysqli->query("SELECT * FROM `clientes`");

                        while ($query = $result->fetch_assoc()){
                            echo "
                            <tr style='font-size:90%;'>
                            <td><form action='excluir.php' method='post'><input type='submit' value='&#8861;' class='btn-danger' title='excluir'/><input type='number' class='btn-warning' style='width:50%;' name='id' value='".$query["id"]."' readonly/></form></td>
                            <td>".$query["nome"]."</td>
                            <td>".$query["email"]."</td>
                            <td>".$query["cidade"]."</td>
                            <td>".$query["uf"]."</td>
                            </tr>
                            ";
                        }

                        if(isset($_POST["id"])) {
                            $id = $_POST["id"];
                            $query = "DELETE FROM clientes WHERE id='".$id."';";

                            if(mysqli_query($mysqli, $query) && isset($_POST["id"])){
                                echo "<p class='text-success'>Os dados foram excluídos corretamente. Verifique o resultado na aba Exibir.</p>";
                            } else if(!mysqli_query($mysqli, $query) && !isset($_POST["id"])){
                                echo "<p class='text-danger'>Houve um erro.</p><p>Nenhum dado foi excluído.</p>".mysqli_error($mysqli);
                            }
                        }

                        mysqli_close($mysqli);
                    ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>