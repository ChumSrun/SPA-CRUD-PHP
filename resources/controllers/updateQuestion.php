<?php
require "../config/databaseConnection.php";

$idQuestion = $_POST['idQuestion'];
$questionInputValue = $_POST['questionInput'];
$deleteList = json_decode($_POST['deleteList']);
$answerNewList = json_decode($_POST['answerList']);
$answerOldListUpdate = json_decode($_POST['answerOldList']);

if (!empty($questionInputValue) && (!empty($answerNewList) || !empty($answerOldListUpdate))) {
  $messageReturn = "";
  // Update Old Answer 
  if (!empty($answerOldListUpdate)) {
    foreach ($answerOldListUpdate as $value) {
      $updateAnswerQ = "UPDATE answers SET answer='" . addslashes($value->answer) . "' WHERE id=" . $value->id;
      if ($connection->query($updateAnswerQ)) {
        $messageReturn = "changes saved successfully[success";
      } else {
        $messageReturn = "Something Went Wrong[danger";
      }
    }
  }
  // delete Old answer;
  if (!empty($deleteList)) {
    foreach ($deleteList as $id) {
      $deleteAnswerQ = "DELETE FROM answers WHERE id=" . $id;
      if ($connection->query($deleteAnswerQ)) {
        $messageReturn = "changes saved successfully[success";
      } else {
        $messageReturn = "Something Went Wrong[danger";
      }
    }
  }
  // insert new answer;
  if (!empty($answerNewList)) {
    $insertAnswerQ = "INSERT INTO answers (answer, question_id) VALUES ";
    foreach ($answerNewList as $key => $value) {
      $insertAnswerQ .= "('" . addslashes($value) . "'," . $idQuestion . ")";
      if ($key < count($answerNewList) - 1) $insertAnswerQ .= ",";
    }
    if (!($connection->query($insertAnswerQ))) $messageReturn = "Something Went Wrong[danger";
  }

  // Update question
  $updateQuestionQ = "UPDATE questions SET question='" . addslashes($questionInputValue) . "' WHERE id=" . $idQuestion;
  if ($connection->query($updateQuestionQ)) {
    $messageReturn = "changes saved successfully[success";
  } else {
    $messageReturn = "Something Went Wrong[danger";
  }
  echo $messageReturn;
} else {
  echo "Please Fill Out the Input[danger";
}
