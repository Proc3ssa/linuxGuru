<?php
header('Content-Type : application/json');
header('Access-Control-Allow-Origin : *');
header('Access-Control-Allow-Methods : GET');
header('Access-Control_Allow-Headers : Content-Type');

$connection = new mysqli('localhost', 'root', '*126*mysql#', 'linuxguru');

if($_SERVER['REQUEST_METHOD']){

    $id = $_GET['id'];

    $SELECT = "SELECT *FROM commands WHERE name = '$id'";
    $QUERY = mysqli_query($connection, $SELECT);

    if($QUERY -> num_rows != 0){
        $RES = mysqli_fetch_assoc($QUERY);
        echo json_encode(['status' => true, 'data' => $RES]);
    }
    else{
        echo json_encode(['status' => false, 'data' => 'commad not found']);
    }
    

    

}
else{
    echo json_encode(['success' => false, 'message' => 'Wrong request method']);
}

?>