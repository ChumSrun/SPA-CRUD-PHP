class initUI {
  constructor() {
    this.homeBtn = document.querySelectorAll(".homePage");
    this.questionBtn = document.querySelector(".questionAndAnswer");
    this.newBtn = document.querySelector(".newQuestion");
    this.content = document.querySelector("#content");
  }
}

// class fetchHTTP{
//   async post(fileFetch, data){
//     const res = await fetch(`./resources/controllers/${fileFetch}.php`, {
//       method: 'POST',
//       headers: {
//         "content-type": "application/x-www-form-urlencoded"
//       },
//       body:
//     });
//     const data = await res.text();
//   }
// }

const app = (uiCtrl => {

  const loadEventListener = () => {
    // event on HOME button;
    uiCtrl.homeBtn.forEach(el => {
      el.addEventListener("click", async () => {
        await changePage("Content", "Home");
        document
          .querySelector(".viewAllQuestion")
          .addEventListener("click", interviewQuestionPage);
      });
    });
    // event on QUESTION button
    uiCtrl.questionBtn.addEventListener("click", interviewQuestionPage);
    // event on About US button
    uiCtrl.newBtn.addEventListener("click", () => {
      changePage("AboutMe", "About_Us");
    });
  };

  // change page state;
  const changePage = async (filename, titleName) => {
    const res = await fetch(`./resources/views/${filename}.php`);
    const data = await res.text();
    uiCtrl.content.innerHTML = data;
    history.pushState(null, null, `#${titleName}`);
    document.title = titleName;
  };

  //  QUESTION page functions;
  const interviewQuestionPage = async () => {
    await changePage("QuestionAnswer", "Question_List");
    class uiQPageCtrl {
      constructor() {
        this.submitForm = document.querySelector(".formSubmit");
        this.containerAnswer = document.querySelector("#containerAnswer");
        this.questionInput = document.querySelector("#questionInput");
        this.addNewListAnswer = document.querySelector("#addNewListAnswer");
        this.answerInput = document.querySelector("#answerInput");
        this.cardContainer = document.querySelector(".cardContainer");
        this.searchInput = document.querySelector("#searchInput");
      }
      showAlert(message, color, elementClass) {
        let strongtitle = color == "success" ? "Success! " : "Error! ";
        const templateAlert = `<div style="border-radius:20px" class="alert alert-${color} alert-dismissible fade show px-3 text-center" role="alert">
        <strong>${strongtitle}</strong>${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
        document
          .querySelector(`.${elementClass}`)
          .insertAdjacentHTML("afterbegin", templateAlert);
        if (document.querySelector(".alert")) {
          setTimeout(() => {
            document.querySelector(".alert").remove();
          }, 4000);
        }
      }
      clearFormNewQuestion() {
        this.questionInput.value = null;
        this.answerInput.value = null;
        this.containerAnswer.innerHTML = "";
        this.questionInput.focus();
      }
      renderAllCard(data) {
        let sideInsert = 1;
        data.forEach((value, key) => {
          let liAnswer = "";
          let editTextArea = "";
          value.answers.forEach(answer => {
            liAnswer += `<li id="${answer.id}">${answer.answer}</li>`;

            editTextArea += `<div class="input-group mb-1"><textarea class="form-control answerUpdateTextArea" data-id="${answer.id}"  >${answer.answer}</textarea>
            <div class="input-group-prepend d-flex align-items-start">
            <i class="fa fa-times text-danger text-center btn btn-outline-danger deleteEditItem" data-id="${answer.id}"></i>
           </div></div>`;
          });
          const templateCard = `
          <div class="mb-3" id="cardNumber${value.id}">
          <div class="card shadow border-dark ">
            <div class="card-body pb-2">
              <h5 class="card-title">${key + 1}. ${
            value.question
          }<i class="fa fa-times float-right text-danger" data-toggle="modal" data-target="#card${
            value.id
          }" style="cursor: pointer; font-size:1em"></i></h5>
              <p class="card-text">
                <ul class="pl-4">
                  ${liAnswer}
                </ul>
              </p>
              <p class="card-subtitle"><small class="text-muted">Date created: ${
                value.created_date
              }</small> <span style="cursor: pointer" class="btn text-primary float-right pr-0 editQuestion" data-toggle="modal" id="${
            value.id
          }" data-target="#cardEdit${value.id}">Edit</span></p>
            </div>
          </div>
    <!-- Modal edit -->
    <div class="modal fade" id="cardEdit${
      value.id
    }" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalCenterTitle"><span style="color: grey">Edit: </span>${
              value.question
            }</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form class="submitUpdate${value.id}">
            <div class="modal-body submitModalBody${value.id}">
              <div class="form-group">
                <label for="exampleInputEmail1">Question</label>
                <input type="text" value="${
                  value.question
                }" class="form-control" id="questionUpdate${value.id}">
              </div>
              <div class="form-group">
                <label>Answer</label>
                <div id="containerAnswer${value.id}">
                ${editTextArea}
                </div>
                <div class="input-group mb-3">
                  <input type="text" class="form-control" id="answerInput${
                    value.id
                  }" placeholder="Input Your Answer Here">
                  <div class="input-group-append input-group-lg">
                    <button class="btn btn-outline-secondary" type="button" id="addEditNewListAnswer${
                      value.id
                    }"><i class="fa fa-plus"></i></button>
                  </div>
                </div>
                <small class="form-text text-muted">You can add multiple answers by click + sign</small>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>      

<!-- Modal Delete -->
<div class="modal fade" id="card${
            value.id
          }" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-danger" id="exampleModalLabel">Are you sure ?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Do you really want to delete this " <strong>${
          value.question
        }</strong> " question? This process cannot be undone.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">Close</button>
        <button type="button" class="btn text-danger deleteQuestion" id="${
          value.id
        }">Delete</button>
      </div>
    </div>
  </div>
</div>
        </div>`;
          if (sideInsert) {
            this.cardContainer.children[0].insertAdjacentHTML(
              "beforeend",
              templateCard
            );
            sideInsert = 0;
          } else {
            this.cardContainer.children[1].insertAdjacentHTML(
              "beforeend",
              templateCard
            );
            sideInsert = 1;
          }
        });
      }
    }
    const uiQuestionPage = new uiQPageCtrl();

    const renderAllCardInDatabase = () => {
      fetch("./resources/controllers/allQuestions.php")
        .then(res => res.json())
        .then(data => {
          uiQuestionPage.cardContainer.children[0].innerHTML = "";
          uiQuestionPage.cardContainer.children[1].innerHTML = "";
          uiQuestionPage.renderAllCard(data);
        });
    };
    // init render Card;
    renderAllCardInDatabase();

    /***********************************************/
    // Add New Question Model;
    // add input answer to the list ;
    uiQuestionPage.addNewListAnswer.addEventListener("click", e => {
      const divTag = document.createElement("div");
      divTag.className = "input-group mb-1";
      if (uiQuestionPage.answerInput.value.trim()) {
        divTag.insertAdjacentHTML(
          "beforeend",
          `
        <textarea class="form-control answerTextArea" >${uiQuestionPage.answerInput.value}</textarea>
        <div class="input-group-prepend d-flex align-items-start">
        <i class="fa fa-times text-danger text-center btn btn-outline-danger deleteItem"></i>
       </div>
      `
        );
        uiQuestionPage.containerAnswer.append(divTag);
      }
      uiQuestionPage.answerInput.value = null;
      uiQuestionPage.answerInput.focus();
    });
    // Control on modal new question;
    uiQuestionPage.containerAnswer.addEventListener("click", e => {
      // delete Answer in container answer;
      if (e.target.classList.contains("deleteItem")) {
        e.target.parentElement.parentElement.remove();
      }
    });
    /***********************************************/
    // submit data from new question modal to Database;
    uiQuestionPage.submitForm.addEventListener("submit", e => {
      e.preventDefault();
      const questionInput = uiQuestionPage.questionInput.value.trim();
      // all answer input push here;
      const answerInputList = [];
      if (uiQuestionPage.answerInput.value.trim()) {
        answerInputList.push(uiQuestionPage.answerInput.value);
      }
      if (document.querySelector(".answerTextArea")) {
        document.querySelectorAll(".answerTextArea").forEach(element => {
          answerInputList.push(element.value);
        });
      }

      if (answerInputList.length && questionInput) {
        fetch("./resources/controllers/addNewQuestion.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `questionInput=${questionInput}&answerInput=${JSON.stringify(
            answerInputList
          )}`
          })
          .then(res => res.text())
          .then(data => {
            let [message, color] = data.split("[");
            uiQuestionPage.showAlert(message, color, "modal-body");
            uiQuestionPage.clearFormNewQuestion();
          });
      } else {
        uiQuestionPage.showAlert(
          "Please Fill Out the Input",
          "danger",
          "modal-body"
        );
      }
    });
    $("#modalNewQuestion").on("hide.bs.modal", function () {
      // fetch new Card;
      renderAllCardInDatabase();
    });

    /***********************************************/
    // event control on Card container
    uiQuestionPage.cardContainer.addEventListener("click", e => {
      // delete Card from cardContainer;
      if (e.target.classList.contains("deleteQuestion")) {
        const cardId = e.target.id;
        fetch("./resources/controllers/deleteQuestion.php", {
            method: "POST",
            headers: {
              "Content-type": "application/x-www-form-urlencoded"
            },
            body: `idQuestion=${cardId}`
          })
          .then(res => res.text())
          .then(data => {
            $(`#card${cardId}`).modal("hide");
            document.querySelector(`#cardNumber${cardId}`).remove();
            const [message, color] = data.split("[");
            uiQuestionPage.showAlert(message, color, "alertContainer");
          });
      }
      // handle event on EDIT modal for each card ;
      if (e.target.classList.contains("editQuestion")) {
        let questionEditId = e.target.id;
        // store delete id answer;
        let deleteIdList = [];
        class uiEditModelCard {
          constructor() {
            this.questionUpdateInput = document.querySelector(
              `#questionUpdate${questionEditId}`
            );
            this.answerUpdateInput = document.querySelector(
              `#answerInput${questionEditId}`
            );
            this.addEditNewListAnswer = document.querySelector(
              `#addEditNewListAnswer${questionEditId}`
            );
            this.submitUpdate = document.querySelector(
              `.submitUpdate${questionEditId}`
            );
            this.containerAnswerUpdate = document.querySelector(
              `#containerAnswer${questionEditId}`
            );
          }
        }
        const uiEditCard = new uiEditModelCard();
        // add answer input into the list on edit modal
        uiEditCard.addEditNewListAnswer.addEventListener("click", () => {
          if (uiEditCard.answerUpdateInput.value.trim()) {
            const template = `
            <div class="input-group mb-1">
            <textarea class="form-control answerTextAreaNew" >${uiEditCard.answerUpdateInput.value}</textarea>
            <div class="input-group-prepend d-flex align-items-start">
            <i class="fa fa-times text-danger text-center btn btn-outline-danger deleteEditItem"></i>
           </div></div>
            `;
            uiEditCard.containerAnswerUpdate.insertAdjacentHTML(
              "beforeend",
              template
            );
          }
          uiEditCard.answerUpdateInput.value = null;
          uiEditCard.answerUpdateInput.focus();
        });
        // delete item and push answer ID to deleteIdList;
        uiEditCard.containerAnswerUpdate.addEventListener("click", e => {
          if (e.target.classList.contains("deleteEditItem")) {
            if (e.target.dataset.id) deleteIdList.push(e.target.dataset.id);
            e.target.parentElement.parentElement.remove();
          }
        });
        // submit change in edit model to database;
        uiEditCard.submitUpdate.addEventListener("submit", e => {
          e.preventDefault();
          const questionInput = uiEditCard.questionUpdateInput.value.trim();
          const answerInputList = [];
          const answerOldInputList = [];

          if (uiEditCard.answerUpdateInput.value.trim()) {
            answerInputList.push(uiEditCard.answerUpdateInput.value);
          }

          if (uiEditCard.containerAnswerUpdate.children.length) {
            document
              .querySelectorAll(".answerUpdateTextArea")
              .forEach(element => {
                if (
                  element.parentElement.parentElement.id ==
                  `containerAnswer${questionEditId}`
                ) {
                  answerOldInputList.push({
                    id: element.dataset.id,
                    answer: element.value
                  });
                }
              });
          }

          // if (uiEditCard.containerAnswerUpdate.children.length) {
          //   Array.from(uiEditCard.containerAnswerUpdate.children).forEach(element => {
          //     if (element.firstElementChild.classList.contains('answerUpdateTextArea')) {
          //       answerOldInputList.push({
          //         id: element.firstElementChild.dataset.id,
          //         answer: element.firstElementChild.value
          //       });
          //     }
          //   });
          // }

          if (document.querySelector(".answerTextAreaNew")) {
            document.querySelectorAll(".answerTextAreaNew").forEach(el => {
              answerInputList.push(el.value);
            });
          }

          fetch("./resources/controllers/updateQuestion.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              body: `idQuestion=${questionEditId}&questionInput=${questionInput}&deleteList=${JSON.stringify(
              deleteIdList
            )}&answerOldList=${JSON.stringify(
              answerOldInputList
            )}&answerList=${JSON.stringify(answerInputList)}`
            })
            .then(res => res.text())
            .then(data => {
              const [message, color] = data.split("[");

              if (color == "danger") {
                uiQuestionPage.showAlert(
                  message,
                  color,
                  `submitModalBody${questionEditId}`
                );
              } else {
                uiQuestionPage.showAlert(message, color, "alertContainer");
                $(`#cardEdit${questionEditId}`).modal("hide");
              }
            });
        });
        // fire whenever the edit modal is close;
        $(`#cardEdit${questionEditId}`).on("hide.bs.modal", function () {
          renderAllCardInDatabase();
        });
      }
    });
    /***********************************************/
    uiQuestionPage.searchInput.addEventListener("keyup", e => {
      // Search Question from database;
      fetch(
          `./resources/controllers/allQuestions.php?searchQuery=${e.target.value}`
        )
        .then(res => res.json())
        .then(data => {
          if (!data.message) {
            uiQuestionPage.cardContainer.children[0].innerHTML = "";
            uiQuestionPage.cardContainer.children[1].innerHTML = "";
            uiQuestionPage.renderAllCard(data);
          } else {
            uiQuestionPage.cardContainer.children[0].innerHTML = `  <div class="col col-12">
          <h4 class='text-center  mt-5 pt-5'><span style="color: grey">There are no results for</span> ${e.target.value}</h4>
        </div> `;
            uiQuestionPage.cardContainer.children[1].innerHTML = `<div class="col col-12">
        <h4 class='text-center '><span style="color: grey">Feel Free to Add One, Up Here</h4>
      </div>`;
          }
        });
    });
  };

  return {
    async init() {
      loadEventListener();
      await changePage("Content", "Home");
      document
        .querySelector(".viewAllQuestion")
        .addEventListener("click", interviewQuestionPage);
    }
  };
})(new initUI());

app.init();