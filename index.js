let questionNum = 0;
let score = 0;

function renderQuestion(){
    console.log("renderQuestion ran");
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
 
 function scoreTally() {
   score++;
 } 

 function nextQuestion(){
    questionNum++;
 }
 
 function handleStartButton() {
   //starts the quiz and goes to the first question
    $('.startButton').click(function(event){
        event.preventDefault();
        $('#startSection').hide();
        $('#quizSection').show();
    });
 }

 function handleSumbitButton(){
    $('#quizForm').on('click', '#js-submit-button', function(event){
         event.preventDefault();
         $('#quizSection').hide();
         $('#checkingSection').show();
         //let selectedAns = $('input:checked');
         //let answer = selectedAns.val();
         //let correctAns = ;
    });
 }

 function handleNextButton(){

 }

 function answerQuestion(){
   
 }
 
 function checkAnswer(){

 }

 function initializeApp(){
    handleStartButton();
    renderQuestion();
 }
 
 $(initializeApp)