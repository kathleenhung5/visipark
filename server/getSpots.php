<?php
require_once('./database.php');
header("Content-type:application/json");

// ----- visitor table columns ---- 

        // id INT NOT NULL AUTO_INCREMENT,
        // unit_num INT(3),
        //     FOREIGN KEY (unit_num) 
        //     REFERENCES units(num)
        //     ON UPDATE CASCADE ON DELETE RESTRICT,
        // name VARCHAR(255),
        // plate VARCHAR(7),
        // start_time TIMESTAMP,
        // end_time VARCHAR(255),
        // removed BOOLEAN,
        // pin BOOLEAN,
        // PRIMARY KEY (id)

//---- Query to get the number of current visitors in the entire building 

function getSpotsOccupied(){
    $sql = "
    SELECT COUNT(id) as occupied FROM visitors WHERE removed = 0
    ";
    return runQuery($sql);
}

$occupied = getSpotsOccupied();
$free = 30-$occupied[0]['occupied'];

$json = json_encode($free);
echo $json;