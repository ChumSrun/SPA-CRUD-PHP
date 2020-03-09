<?php
require "../config/databaseConnection.php";

$idQuestion = $_POST['idQuestion'];

$deleteQuery = "DELETE FROM questions WHERE id=" . $idQuestion;

if ($connection->query($deleteQuery)) {
  echo "Question deleted successfully[success";
} else {
  echo "Something Went Wrong[danger";
}
