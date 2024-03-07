//Creates empty target variable
/*var target = 0;
//Creates empty array to track guesses
var guesses = [];
//Generates random number from 1-100 and sets target variable
var generateRandNum = function (){
  target = Math.floor(Math.random() * 100 + 1);
};
//Creates empty 'previous guess' variable to track the last guess
var prevGuess = 0;

//Generates random number needed to start game
generateRandNum();

//Updates 'previous guess' variable
var updatePrevGuess = function(){
  prevGuess = guesses[guesses.length - 1];
};

//Checks to make sure the input is valid. If it is, runs the game
var inputValidator = function(){
  //Pushes guess into guesses array
  guesses.push($('#number-input').val());
  //Updates the 'previous guess' variable
  updatePrevGuess();
  //Creates variable used to check if guess is a repeat
  var repeat = false;
  //Loops through guesses array, checking the last guess again all other guesses in array. If the guess is a repeat, changes the repeat variable to 'true'
  for(var i =0; i < guesses.length -1; i++){
    if(guesses[i] === guesses[guesses.length -1]){
      repeat = true;
    }
  }
  //Parses the previous guess variable from a string to a number
  var num = parseInt(prevGuess);
  //If the guess is out of range, or has been previously guesses, the player is prompted to guess again. If not, the game continues
  if(num < 0 || num > 100){
    alert('Whoooa sorry that number is out of range! Try guessing again');
    resetInputBox();
    //Removes last guess
    guesses.splice(-1,1);
  } else if(repeat == true){
    alert('Wait you already guessed that! Guess again');
      //Removes last guess
      guesses.splice(-1,1);
      resetInputBox();
  } else {
    hotOrCold();
  }
};

//Pushes guess to 'guesses' array and runs 'inputValidator' when 'submit' button is clicked
$('#submit-btn').on('click', inputValidator);

//Makes pressing the 'enter' key also run 'inputValidator' (so users can either hit 'submit' button or press the 'enter' key)
$("input").keypress(function(event) {
    if (event.which == 13) {
        event.preventDefault();
        inputValidator();
    }
});


//Resets the background color
var resetBackground = function(color){
  $('.background').css('background-color', color);
};

//Changes 'helper text' at the top of the page
var changeHelperText = function(text){
  $('#helper-text').text(text);
};

//Creates hot and cool color variables, to be used as background colors
var hotRed = '#FF4136';
var coolBlue = '#7FDBFF';
var burningUp = '#FF0000';
var iceCold = '#C4EFFF';
var warmRed = '#FC6868';

//Lets player know whether they're hot or cold and runs resetInputBox, guessTracker, and displayPrevGuesses
var hotOrCold = function(){
  //Creates empty variable that changes depending on whether the player's guess is low or high
  var lowHigh = '';
  //Creates a variable that gets the absolute distance between the player's guess and the target #
  var range = Math.abs(target - prevGuess);
  //Sets the 'lowHigh' variable
  if(prevGuess < target)
    lowHigh = 'higher.';
  if(prevGuess > target)
    lowHigh = 'lower.';
  //Lets user know whether they are hot or cold, based on how far their guess was from the target
  if(range >0 && range <=5){
    resetBackground(burningUp);
    changeHelperText("You're BURNING UP! Try guessing a little " + lowHigh);
  }
  if(range >5 && range <=10){
     resetBackground(hotRed);
     changeHelperText("You're getting HOT! Try guessing " + lowHigh);
  }
  if(range >10 && range <=15){
    resetBackground(warmRed);
    changeHelperText("You're warming up! Try guessing " + lowHigh);
  }
  if(range >15 && range <=25){
    resetBackground(coolBlue);
    changeHelperText("It's chilly in here... Try guessing " + lowHigh);

  }
  if(range >25){
    resetBackground(iceCold);
    changeHelperText("Brrr...you're ice cold. Try guessing a lot " + lowHigh);
  }

    resetInputBox();
    guessTracker();
    displayPrevGuesses();

    console.log(target);
    console.log(guesses);
    console.log(prevGuess);
};


//Resets guess input box
var resetInputBox = function(){
  document.getElementById("guessing-form").reset();
};

//Tracks amount of guesses and alerts player if game is over
var guessTracker = function(){
  var guessNum = guesses.length;
  //Changes 'Guesses Remaining' number
  $('#guesses-remaining').text(5 - guessNum);
  //Checks if guess is a winner
  if(prevGuess == target){
      prizeGenerator();
  } else{
      //Alerts game over
      if(guessNum === 5){
        alert("Sorry that's all your guesses! The number was " + target);
        startOver();
      }
  }
};

//Displays the players' previous guesses
var displayPrevGuesses = function(){
  var guessStr ='';
  //If there's only been one guess, displays that # as 'previous guess'
  if(guesses.length == 1){
     for(var i =0; i < guesses.length; i++){
      guessStr += guesses[i] + ' ';
     }
    $('#prev-guesses').append("<p id='prev-guess-text'>Your previous guesses are: \n" +guessStr + "</p>");
  //If there have been more than one guesses, displays each guess with a comma separating each
  } else if(guesses.length > 1){
    for(var i =0; i < guesses.length; i++){
      guessStr += guesses[i];
      if(i < guesses.length - 1){
        guessStr += ', ';
      }
     }
    $('#prev-guess-text').text("Your previous guesses are: \n" +guessStr);
  }
};

//Resets the game and starts over
var startOver = function(){
  guesses = [];
  generateRandNum();
  resetBackground('white');
  $(".hide-me").show();
  $('#prev-guesses').empty();
  changeHelperText('Enter a guess from 1-100. Guess right to win a prize!');
  $('#guesses-remaining').text(5);
  $("#prize-image").children('img').remove();
};

//Creates a hint 
var giveHint = function(){
  var strTarget = target.toString();
  var hintNum = '';
  if(strTarget.length == 1){
    hintNum = 'single digits.';
  } else if(strTarget.length == 2){
    hintNum = target.toString()[0] + '0s.';
  } else if(strTarget.length == 3){
    hintNum = target.toString()[0] + '00s.';
  }
  alert("Here's a hint...the number is somehwere in the " + hintNum);
};

//Calls 'start over' function when start over button is clicked
$('#startover-btn').on('click', startOver);
//Calls 'give hint' function when start over button is clicked
$('#hint-btn').on('click', giveHint);

//Generates a 'prize' and alerts the winner they've won
var prizeGenerator = function(){
  //Generate random number 1-3
  var randNum = Math.floor(Math.random() * 5);
  //Creates a 'prizes' object
  var prizes =[{name:'Tamagotchi', link: "<img id='theImg' src='http://php.scripts.psu.edu/dmh5086/t/i/shells/v4/orange_stars.jpg'/>", text: " Remember to change its diapers."},
  {name:'Pet Rock', link: "<img id='theImg' src='http://a.abcnews.go.com/images/Lifestyle/gty_pet_rock_150401_4x3_992.jpg'/>", text: " Be sure to feed it twice a day."},
  {name:'Honeybadger', link: "<img id='theImg' src='http://i.ytimg.com/vi/x9Jr9JKpsX8/maxresdefault.jpg'/>", text: " You're in luck...they love to cuddle."},
  {name:'Dog Snuggie', link: "<img id='theImg' src='http://ep.yimg.com/ay/villagestreetwear/snuggie-for-dogs-the-only-blanket-with-sleeves-for-dogs-56.jpg'/>", text: ' Because what do dogs love more than blankets with sleaves?'},
  {name:'Lifetime supply of Pogs', link: "<img id='theImg' src='http://www.thingsofmyinterest.com/wp-content/uploads/2011/06/Pogs_01.jpg'/>", text: " Oh snap!" }];
  alert('You win! Click OK to see your prize');
      resetBackground('white');
      $("#prize-image").append(prizes[randNum].link);
      $('#prev-guesses').empty();
      $(".hide-me").hide();
      changeHelperText('Congratulations! You won a ' + prizes[randNum].name + '.' + prizes[randNum].text);
      
}


*/
const choices = document.querySelectorAll('.choice');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('.computer-score');
const resultElem = document.querySelector('#result');
const playAgainBtn = document.querySelector('#play-again');
const countdownElem = document.querySelector('#countdown');
const computerChoiceElem = document.querySelector('#computer-choice');

const weapons = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let countdown = 10;
let timeout;

// Function to generate random weapon for computer
function computerPlay() {
  const weaponIndex = Math.floor(Math.random() * weapons.length);
  return weapons[weaponIndex];
}

// Function to update score and display result
function updateScore(playerWeapon, computerWeapon) {
  clearTimeout(timeout);
  if (playerWeapon) {
    computerChoiceElem.innerHTML = `Computer choose: ${computerWeapon}.`;
    if (playerWeapon === computerWeapon) {
      resultElem.innerHTML = "It's a tie!";
    } else if (
      (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
      (playerWeapon === 'paper' && computerWeapon === 'rock') ||
      (playerWeapon === 'scissors' && computerWeapon === 'paper')
    ) {
      resultElem.innerHTML = 'You win!';
      playerScore++;
      playerScoreElem.innerHTML = `Player: ${playerScore}`;
    } else {
      resultElem.innerHTML = 'Computer wins!';
      computerScore++;
      computerScoreElem.innerHTML = `Computer: ${computerScore}`;
    }
    startTimer();
  } else {
    computerChoiceElem.innerHTML = `Game Over`;
    resultElem.innerHTML = 'You did not make a choice! | You lose the game!';
    resultElem.style.color = 'red';
    disableOptions();
  }

  if (playerScore === 5) {
    resultElem.textContent = 'You win the game!';
    resultElem.style.color = 'green';
    computerChoiceElem.innerHTML = 'Game Over';
    disableOptions();
    stopTimer();
  }

  if (computerScore === 5) {
    resultElem.textContent = 'You lose the game!';
    resultElem.style.color = 'red';
    computerChoiceElem.innerHTML = 'Game Over';
    disableOptions();
    stopTimer();
  }
}

// Function to handle player choice
function selectWeapon() {
  clearTimeout(timeout);
  countdownElem.innerHTML = '10';
  countdown = 10;
  const playerWeapon = this.id;
  const computerWeapon = computerPlay();
  updateScore(playerWeapon, computerWeapon);
}

// Function to start countdown timer
function startTimer() {
  countdown--;
  countdownElem.innerHTML = countdown;
  if (countdown === 0) {
    const computerWeapon = computerPlay();
    updateScore(null, computerWeapon);
  } else {
    timeout = setTimeout(startTimer, 1000);
  }
}

function stopTimer() {
  clearInterval(timeout);
  countdown = 10;
  countdownElem.textContent = countdown;
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  countdown = 10;
  playerScoreElem.innerHTML = 'Player: 0';
  computerScoreElem.innerHTML = 'Computer: 0';
  resultElem.innerHTML = 'Choose your weapon!';
  countdownElem.innerHTML = '10';
  resultElem.style.color = '#660033';
  computerChoiceElem.innerHTML = '';
  enableOptions();
  startTimer();
}

function disableOptions() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'none';
  });
}

function enableOptions() {
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'auto';
  });
}

// Event listeners
choices.forEach((choice) => choice.addEventListener('click', selectWeapon));
playAgainBtn.addEventListener('click', resetGame);

// Start countdown timer when page loads
countdownElem.innerHTML = countdown; // Set initial value of countdown in HTML
timeout = setTimeout(startTimer, 1000);