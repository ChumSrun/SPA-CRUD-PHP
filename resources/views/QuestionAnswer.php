<div class="container-fluid p-0">
  <div class="row">
    <div class="col">
      <h1 class="text-center mb-2 pb-2 mx-n3">Interview Question</h1>
      <div class="row">
        <div class="col col-12 col-sm-6 offset-sm-3 mb-2">
          <div class="input-group">
            <input type="text" class="form-control" id="searchInput" placeholder="Search The Questions">
            <div class="input-group-append input-group-lg">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-search"></i></button>
            </div>
          </div>

        </div>
        <div class="newQuestionBtn mb-2">
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary text-center" data-toggle="modal" data-target="#modalNewQuestion">
            New Question
          </button>
          <!-- Modal -->
          <div class="modal fade" id="modalNewQuestion" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog " role="document">
              <div class="modal-content">

                <div class="modal-header">

                  <h5 class="modal-title" id="exampleModalCenterTitle">New Question Form</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <form class="formSubmit">

                  <div class="modal-body">

                    <div class="form-group">
                      <label for="exampleInputEmail1">Question</label>
                      <input type="text" class="form-control" id="questionInput">

                    </div>
                    <div class="form-group">
                      <label>Answer</label>
                      <div id="containerAnswer">
                      </div>
                      <div class="input-group mb-3">


                        <input type="text" class="form-control" id="answerInput" placeholder="Input Your Answer Here">
                        <div class="input-group-append input-group-lg">
                          <button class="btn btn-outline-secondary" type="button" id="addNewListAnswer"><i class="fa fa-plus"></i></button>
                        </div>
                      </div>
                      <small class="form-text text-muted">You can add multiple answers by click + sign</small>
                    </div>

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="alertContainer mx-auto w-50"></div>

      <div class="row cardContainer p-0">
        <div class="col col-12 col-lg-6"></div>
        <div class="col col-12 col-lg-6"></div>
      </div>


    </div>
  </div>
</div>