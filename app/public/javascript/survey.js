let questions=['I remember my dreams most of the times.', 'I know myself well','I show care for other through words or actions', 'I show care for others through gifts',  'What I want in life is happiness', 'What I want in life is money and a good career', 'Do you have strong fears?','I know my strengths and weaknesses','for fun I like to read, atlk to people, watch movies','do you have chilhood traumas?', 'I have a clear idea of what my life will look like 10 years from now','Is it hard or easy fro you to admit your worng, make desicions, stand by opinions','Do you run into situation and feel upset and dot  know the cause?','my parents raised me well'];

function questionnaire(questions) {
    const options = $(`<div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Select an option
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">1 (Strongly agree)</a>
      <a class="dropdown-item" href="#">2</a>
      <a class="dropdown-item" href="#">3</a>
  <a class="dropdown-item" href="#">4</a>
  <a class="dropdown-item" href="#">5 (Strongly disagree)</a>
    </div>
  </div>`);

    let questionnaire=
    questions.forEach((quest, index)=> {
        html(`<div><h3>${index} ${quest} </h3>\n ${options} </div>`);
    }
    
);

$(`#questionSpace`).append(questionnaire);
}

console.log(questionnaire);



$(`#submit`).on('click', (event)=>{

var newFriend={
name:$(`#inputName`).val().trim(),
picture:$(`#inputPicture`).val().trim(),
scores:scoresArray,
}

$.post("/api/friends", newFriend, (data)=>{

getFriendsData();

$(`#inputName`).val(``);
$(`#inputPicture`).val(``);
$(`#inputScores`).val(``);
});
});


function getFriendsData(){
$.ajax({
method:`GET`,
URL:`/api/friends`,

}).then(data=>{
//
  console.log(data);

})
}

questionnaire(questions);