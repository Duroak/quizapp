let questionNum = 0;
let score = 0;
let questionNumber = 0;

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
            $('.answer').prop('checked', false);
         } else {
            incorrectMessage();
            $('.answer').prop('checked', false);
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
  });
 }

  function handleRestartButton() {
     $('#js-restart-button').on('click', function (event) {
        score = 0;
        questionNum = 0;
        questionNumber = 0;
        $('#totalScoreSection').hide();
        $('.bottomBanner').show();
        $('#startSection').show();
        $('.score').text(score);
        renderQuestion();
   });
  }
 
  function renderResults() {
    // Renders final results to the view 
    $('#totalScoreSection').show();
    $('#checkingSection').hide();
    $('.bottomBanner').hide();
    $('#userScore').text('Final Score: ' + score);
      if (score >= 7) {
         $('#finalMessage').html(`<p>Brilliant, "football" must be your religion.</p>`);
         } else if (score < 7 && score >= 4) {
         $('#finalMessage').html(`<p>Good job, to know this much you must be the causual Soccer fan.</p>`);
         } else {
         $('.finalMessage').html(`<p>Nice try, watch games on the weekends or even play FIFA to gain more knowledge about the beautiful game. </p>`);
      }
 }

 function initializeApp(){
    handleRestartButton();
    handleNextButton();
    handleStartButton();
    handleSubmitButton();
    renderQuestion();
 }
 
 $(initializeApp);