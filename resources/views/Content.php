<div class="container-fluid p-0">
  <div class="row">
    <div class="col col-12 col-lg-9">
      <div class="container-fluid p-0">
        <div class="row">
          <div class="col col-12 col-md-8 offset-md-2">
            <h1 class="text-center">Job Hunting</h1>
            <p class="paraG">Searching for a job is can be a difficult thing to do, if you don't have experience on doing that. You will turn down for jobs, if you don't know how to prepare or tips for it. Here are the strategies and tips to get a job that you desired easier.</p>
            <div class="col clearfix p-0 stepParag">
              <h4> 1. Checking your material and know what you good at.
              </h4>
              <img src="./public/img/content/1skills.jpg" class=" img-fluid  float-left mr-4">

              <p class="paraG">In this step, you need to know about your skills, interests, experience and the desired career. After your self assessment, mark a detailed list about it. It will help you easier to get an option to choose the right industry and the right career option within the industry you want that match your skills and interests.</p>
            </div>
            <div class="col clearfix p-0 stepParag">
              <h4> 2. Searching for your career option
              </h4>
              <img src="./public/img/content/2search.jpg" class=" img-fluid  float-right ml-4" style="width: 330px">

              <p class="paraG">After you did identify your skills, then research the job markets or use the job search engines to finds job posting by using keywords that match your skills and location where you want to work. You can use job search engines websites such as Camhr, Bong thom and other more. It will help you save a lot of time.</p>
            </div>
            <div class="col p-0 stepParag">
              <h4> 3. Expend your network with other in the industry
              </h4>
              <img src="./public/img/content/3network.jpg" class=" img-fluid mx-auto d-block" style="width: 600px">

              <p class=" paraG">If you can not find the job that you want online, you still have other options. Network is still the one of best option the way most people find jobs. Because only 20% of all available job are posted online and remaining 80% are never posted, they are filled through network or word-of-mouth. So you must connect with everyone you know that you have work in the industry and keep in touch with them. Ask them to keep their eyes on any opportunities for you.</p>
            </div>
            <div class="col clearfix p-0 stepParag">
              <h4> 4. Get your career documents ready
              </h4>
              <img src="./public/img/content/4resume.jpg"" class=" img-fluid float-left" style="width: 550px; margin-right:2em">

              <p class="paraG">Make sure your resume, cover letters and other required document are all ready to go. And you want to be able to quickly customize each document if needed and send it quickly, in case you forget it or have mistakes on that documents such as spelling error, grammatical errors.</p>
              <ul class="mt-n2">
                <li>Always make sure your resume and cover letter is up to date all the time.</li>
              </ul>
            </div>
            <div class="col p-0 stepParag">
              <h4> 5. Prepare for interviews
              </h4>

              <p class="paraG">Prepare job interview questions is essential because it whether make you get a job offer or not. Take the time to prepare for the common interview questions, research about company that you are going to have interview before you go for the interview, make sure dress appropriately, and be confident to impress the interviewer with your skills, experience and expertise.</p><img src="./public/img/content/5prepare.jpg"" class=" img-fluid d-block mx-auto" style="width: 690px">
            </div>

          </div>
        </div>
      </div>
    </div>

    <div class=" col col-12 col-lg-3 ">

      <div class=" card border-success position-fixed shadow">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-muted pb-3" style="border-bottom: 1px solid grey">Interview Questions</h6>
          <table class="table table-borderless mb-n1">
            <tbody>
              <?php
              require "../config/databaseConnection.php";
              $highlightQuestion = "select id, question from questions order by created_date desc LIMIT 5";
              $result = $connection->query($highlightQuestion);
              if ($result->num_rows > 0) {
                $numberList = 0;
                while ($row = $result->fetch_assoc()) {
                  echo " <tr>
                  <th style='border-bottom: 1px solid teal; border-right: 1px solid teal;'>" . strval(++$numberList) . "</th>
                  <td>" . $row['question'] . "</td>
                </tr>";
                }
              } else {
                echo "No questions!";
              }
              ?>
            </tbody>
          </table>
          <a class="btn text-primary  float-right viewAllQuestion" style="cursor: pointer">View All</a>
        </div>
      </div>
    </div>

  </div>