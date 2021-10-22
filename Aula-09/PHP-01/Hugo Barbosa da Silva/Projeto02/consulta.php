<?php
    //Abrir conexão
    $mysqli = new mysqli("localhost","root","rute","projeto");

    if ($mysqli -> connect_errno) {
        echo "Falha na conexão MySQL: " . $mysqli -> connect_error;
        exit();
    }

    // $query = "SELECT `title`, `description`, `release_year`, `special_features`,  FROM `film` ORDER BY `title`";
    $query = "SELECT title, description, release_year, special_features FROM film ORDER BY title";

    $result = mysqli_query($mysqli, $query);

    //Começo da Tabela
    echo "
        <table class='table table-dark table-striped table-hover'>
            <thead>
                <th>Título</th>
                <th>Descrição</th>
                <th>Ano de lançamento</th>
                <th>Special Features</th>
            </thead>
            <tbody>";

        //Registros da tabela
        while ($row = mysqli_fetch_row($result)) {
            print("<tr> <td>".$row[0]."</td> <td>".$row[1]."</td> <td>".$row[2]."</td> <td>".$row[3]."</td></tr>");
        }
    
    //Fim da tabela
    echo "
            </tbody>
        </table>
    ";

    //Fecha conexão
    $mysqli -> close();
?>