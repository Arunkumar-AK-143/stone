<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html >
  <head>
    <meta charset="UTF-8">
    <title>Guessing Game - JS 1</title>
    
    
    
    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <link rel="stylesheet" href="gamepage.css">

    
    
    
  </head>

<body >
 <!--  <div class="container-fluid">
    <div class="center">
      
      <h1>Guessing Game</h1>
      <p id='helper-text'>Enter a guess from 1-100. Guess right to win a prize!</p>

      <form id="guessing-form">
        <div>
         
          <input class='hide-me' id="number-input" type="text" placeholder="Enter a guess" autocomplete="off">
          <br>
       
          <button id="hint-btn" class="btn btn-default hide-me" type="button">Give a hint</button>
       
          <button id='submit-btn' class="btn btn-lg btn-primary hide-me" type="button">Submit</button>
       
          <button id='startover-btn' class="btn btn-default" type="button">Start Over!</button>
        </div>
      </form>
      <div id='prev-guesses' class='hide-me'></div>
     
      <div class='hide-me'><p>Remaining Guesses:</p><h4 id="guesses-remaining">5</h4></div>
      <div id="prize-image"></div>
    </div>
  </div> -->

  <a href="https://www.codewithfaraz.com/" class="logo" target="_blank">
		<img src="https://www.codewithfaraz.com/InstaPic.png" alt="">
</a><h1>Rock, Paper, Scissors</h1>
  <div class="scoreboard">
    <div class="player-score">Player: 0</div>
    <div class="computer-score">Computer: 0</div>
  </div>
  <div class="choices">
    <div class="choice" id="rock">
      <i class="fas fa-hand-rock"></i>
    </div>
    <div class="choice" id="paper">
      <i class="fas fa-hand-paper"></i>
    </div>
    <div class="choice" id="scissors">
      <i class="fas fa-hand-scissors"></i>
    </div>
  </div>
  <div class="result" id="result">
    <p>Choose your weapon!</p>
  </div>
  <div id="computer-choice"></div>
  <div class="timer" id="timer">
    <p>Time left: <span id="countdown">10</span>s</p>
  </div>
  <button class="play-again" id="play-again">Play Again</button>
  <script src="script.js"></script>

        <script src="gamepage.js"></script>

    
    
    
  </body>
</html>
