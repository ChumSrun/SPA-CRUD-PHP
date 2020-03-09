<?php

$hostname = "localhost";
$username = "root";
$password = "";
$dbName = "web_assignment_year_4_job_hunting";

$connection = new mysqli($hostname, $username, $password, $dbName);
if ($connection->connect_error) {
  die("Connection failed");
}
