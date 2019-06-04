let questionNum = 0;
let answer = 0;

function renderQuestion(){
    $("#questionText").text(QUESTIONS[questionNum].question);
 
    $("#answer0").val(QUESTIONS[questionNum].answers[0]);
    $("#spAns0").text(QUESTIONS[questionNum].answers[0]);
 
    $("#answer1").val(QUESTIONS[questionNum].answers[1]);
    $("#spAns1").text(QUESTIONS[questionNum].answers[1]);
 
    $("#answer2").val(QUESTIONS[questionNum].answers[2]);
    $("#spAns2").text(QUESTIONS[questionNum].answers[2]);
 
    $("#answer3").val(QUESTIONS[questionNum].answers[3]);
    $("#spAns3").text(QUESTIONS[questionNum].answers[3]);
 
 }
 
 function nextQuestion(){
    questionNum++;
 }
 
 function handleStartButton() {
    $('.startButton').click(function(event){
        event.preventDefault();
        $('#startSection').hide();
        $('#answerBox').hide();
        $('#quizSection').show();
    });
 }
 
 function answerQuestion(){
   $('.#js-submit-button').click(function(event){
      event.preventDefault();
      $('#answerBox').show();
      $()
   })
 }
 
 function checkAnswer(){
 
 }
 
 function initializeApp(){
    handleStartButton();
 }
 
 $(initializeApp)