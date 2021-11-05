<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="favicon.ico">
    <title>Sintaxe PHP</title>
</head>
<body>
    <h1>Aprendendo PHP</h1>
    <?php

        echo "<script> 
                function exibe(){ 
                    alert('Éco gerando JS');
                } 
              </script> <br>
        <button onclick='exibe()'>Clique</button>";
        $meio = "Ipiranga ouviram o brado retumbante";

        $fim = " de um povo heróico.</h2>";

        echo "<h2>As margens plácidas do ".$meio.$fim;
        $num = 123;

        printf("%.2f", $num);

?>
</body>
</html>