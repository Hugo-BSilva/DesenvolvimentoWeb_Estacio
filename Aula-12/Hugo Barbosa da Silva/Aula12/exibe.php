<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Exibe</title>
</head>
<body class="bg-dark text-warning text-center">
    <?php
        $nome = $_GET['nome'];
        $email = $_GET['email'];

        echo "<h1 class='text-warning'> Olá " . $nome ."</h1> <br><br>
                <h2> Seu e-mail é: " . $email . "</h2><br><br>";
                
        echo "<a href='" . $_SERVER['HTTP_REFERER'] . "' class='btn btn-primary rounded-3 col-sm-2 mt-2'>Voltar</a>";
    ?>
</body>
</html>