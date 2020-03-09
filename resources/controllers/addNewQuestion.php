<?php
require "../config/databaseConnection.php";

$sqlQuery = "INSERT INTO questions (question) VALUES('" . addslashes($_POST["questionInput"]) . "')";

if ($connection->query(($sqlQuery))) {

  $answerList = json_decode($_POST['answerInput']);
  $sqlQueryAnswer = 'INSERT INTO answers (answer, question_id) VALUES';
  foreach ($answerList as $key => $value) {
    $sqlQueryAnswer .= '("' . addslashes($value) . '","' . $connection->insert_id . '")';
    if (!($key == count($answerList) - 1)) {
      $sqlQueryAnswer .= ",";
    }
  }

  if ($connection->query($sqlQueryAnswer)) {
    echo "Answer Added[success";
  } else {
    echo "Something Went Wrong[danger";
  }
} else {
  echo "Something Went Wrong[danger";
}
