<?php
require_once('./database.php');
header("Content-type:application/json");

// Functions to get Units, Visitors and Reports
function getUnits(){
    $sql = "SELECT * FROM units";
    return runQuery($sql);
}

function getVisitors(){
    $sql = 'SELECT * FROM visitors';
    return runQuery($sql);
}

function getReports(){
    $sql = 'SELECT * FROM reports';
    return runQuery($sql);
}


// Get all data and put them in variables
//put the variables together into an array and send it back 
$units = getUnits();
$visitors = getVisitors();
$reports = getReports();
    
$data = array(
    "units"=> $units,
    "visitors"=> $visitors,
    "reports"=> $reports
);
        
$json = json_encode(["data"=>$data]);
echo $json;