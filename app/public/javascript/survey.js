//create array of options with unique ids
var optArray = [];
for (var i = 0; i < 10; i++) {
  var options = `<div class="form-group">
  <select class="form-control combo" placeholder="Select Option" id=${i}>
    <option>Select Option</option>
    <option value=1>1 (Strongly Disagree)</option>
    <option value=2>2</option>
    <option value=3>3</option>
    <option value=4>4</option>
    <option value=5>5 (Strongly Agree)</option>
  </select>
</div>`;
  optArray.push(options)
}

//array of questions
let questions = ['I remember my dreams most of the times', 'I know myself well', 'I show care for other through words or actions', 'I show care for others through gifts', 'What I want in life is happiness', 'What I want in life is money and a good career', 'I have strong fears', 'I know my strengths and weaknesses', 'I have a clear idea of what my life will look like 10 years from now', 'It is hard for me to admit Im wrong'];

//dinamically append questions and answers
function questionnaire() {
  for (var i = 0; i < questions.length; i++) {
    $(`#questionSpace`).append(`<div><h4>${i + 1}. ${questions[i]} </h4>\n  ${optArray[i]} </div>`);
  }
}

//on submit questionnaire 
$(document.body).on("click", '#submit', (event) => {
  event.preventDefault();

  if ($(`#inputName`).val().trim() === "" || $(`#inputPicture`).val().trim() === "") {
    $("#modalName").text("You have to enter a valid name and photo URL before submitting!");
    $("#modalImg").remove();
    return true;
  }

  const scoreArray = [];
  var val;
  for (var i = 0; i < 10; i++) {
    val = $(`#${i} :selected`).val();
    if (isNaN(val)) val = 0;
    scoreArray.push(parseInt(val))
  }

  const newFriend = {
    name: $(`#inputName`).val().trim(),
    photo: $(`#inputPicture`).val().trim(),
    scores: scoreArray
  }

  $.post("/api/friends", newFriend, (data) => {
    console.log(data);
    //modal pop to display picture and name
    if (data) {
      $("#modalName").text(`Your new friend's name is ${data.name}`);
      console.log(data.name);
      $("#modalImg").attr("src", data.picture);
    } else {
      //if there isn't response, ERROR msg
      $("#modalImg").remove();
      $("#modalName").text("We apologize, an ERROR has occurred. Please try again.");
    }

    $("#close").click(function () {
      window.location.reload(true);
    });
  });
});

questionnaire();


