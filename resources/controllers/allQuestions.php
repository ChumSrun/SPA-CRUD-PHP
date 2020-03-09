<?php

require "../config/databaseConnection.php";
header('content-type: application/json');

$fetchAllData = "SELECT * FROM questions ";

if (!empty($_GET['searchQuery'])) {
  $fetchAllData .= "WHERE question LIKE '%" . addslashes($_GET['searchQuery']) . "%'";
}

$fetchAllData .= " ORDER BY created_date DESC ";

$result = $connection->query($fetchAllData);

$returnData = [];
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $fetchAllAnswers = "SELECT id, answer FROM answers WHERE question_id=" . $row['id'];
    $answerResult = $connection->query($fetchAllAnswers);
    $allAnswer = $answerResult->fetch_all(MYSQLI_ASSOC);
    $row["answers"] = $allAnswer;
    array_push($returnData, $row);
  }
  echo json_encode($returnData);
} else {
  echo json_encode(["message" => "Something Went Wrong[danger"]);
}
