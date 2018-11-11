let questions = ['I remember my dreams most of the times.', 'I know myself well', 'I show care for other through words or actions', 'I show care for others through gifts', 'What I want in life is happiness', 'What I want in life is money and a good career', 'I have strong fears', 'I know my strengths and weaknesses', 'I have a clear idea of what my life will look like 10 years from now', 'It is hard for me to admit Im wrong', 'I feel upset without knowing the cause', 'My parents have raised me well'];

function questionnaire(questions) {


  const options = ` <div class="form-group">
  <select class="form-control id="combo" placeholder="Select Option">
    <option selected>Select Option</option>
    <option type=input>1 (Strongly Disagree)</option>
    <option type=input>2</option>
    <option type=input>3</option>
    <option type=input>4</option>
    <option type=input>5 (Strongly Agree)</option>
  </select>
</div>`;

  questions.forEach((quest, index) => {
    $(`#questionSpace`).append(`<div><h3>${index + 1}. ${quest} </h3>\n ${options} </div>\n`);
  }
  );
}

$(`#submit`).on('click', (event) => {
  event.preventDefault();

  let scoresArray = [];


  let scoresArray = [];
  scoresArray.push($('#combo :selected').text())

  var newFriend = {
    name: $(`#inputName`).val().trim(),
    picture: $(`#inputPicture`).val().trim(),
    scores: scoresArray
  }

  $.post("/api/friends", newFriend, (data) => {

    getFriendsData();

    $(`#inputName`).val(``);
    $(`#inputPicture`).val(``);
    $(`#inputScores`).val(``);
  });
});

function getFriendsData() {
  $.ajax({
    method: `GET`,
    URL: `/api/friends`,

  }).then(data => {
    //
    console.log(data);

  })
}

questionnaire(questions);