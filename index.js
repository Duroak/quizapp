let questionNum = 0;
let score = 0;
let questionNumber = 0;

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
 
 function scoreAdd() {
   score ++;
 } 

 function scoreChange() {
   scoreAdd();
   $('.score').text(score);
 }

 function updateQuestionNum(){
    questionNum ++;
 }

 function updateQuestionDisplay() {
    questionNumber ++;
 }

 function changeQuestion() {
    updateQuestionDisplay();
    $('.questionNumberDisplay').text(questionNumber);
 }

 function nextQuestion() {
    changeQuestion();
    updateQuestionNum();
 }
 
 function handleStartButton() {
   //starts the quiz and goes to the first question
    $('.startButton').click(function(event){
        event.preventDefault();
        $('#startSection').hide();
        $('#quizSection').show();
        changeQuestion();
    });
 }

 function handleSubmitButton() {
    //submits answers and checks answer selected
    $('#quizForm').on('submit', function (event){
         event.preventDefault();
         let selectedAns = $('input:checked').val();
         let correctAns = `${QUESTIONS[questionNum].correctAnswer}`;
         if(selectedAns === correctAns) {
            correctMessage();
            scoreChange();
         } else {
            incorrectMessage();
         }        
    });
 }

 function correctMessage() {
    $('#checkingSection').show();
    $('#quizSection').hide();
    $('#resultMesg').html( `${QUESTIONS[questionNum].correctAnswer}` + ' is correct!');
 }

 function incorrectMessage(){
   $('#checkingSection').show();
   $('#quizSection').hide();
   $('#resultMesg').html('Wrong the correct answer is ' + `${QUESTIONS[questionNum].correctAnswer}`);
 }

 function handleNextButton(){
   //Goes to next question or final results view
   $('#checkingSection').on('click', 'js-next,button', function (event){
      if (questionNumber === 10) {
         renderResults();
      } else {
         $('#quizSection').show();
         $('#checkingSection').hide();
         nextQuestion();
         renderQuestion();
      }
      //if (questionNum < QUESTIONS.length) {
      //   $('#quizSection').show();
      //   $('#checkingSection').hide();
      //   nextQuestion();
      //   renderQuestion();
      //} else {
      //   renderResults();      
  });
 }

  //doesn't pop up when quiz ends 
  function renderResults() {
    $('#totalScoreSection').show();
    $('#checkingSection').hide();
    $('#userScore').text('Final Score: ' + score);
 }

 function initializeApp(){
    handleNextButton();
    handleStartButton();
    handleSubmitButton();
    renderQuestion();
 }
 
 $(initializeApp)