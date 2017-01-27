/*Completed 1/7/2017
by Jon Grant
*/

//Create variables
var ranNum = Math.floor(Math.random() * (3 - 0 +1)) + 0;
var solution = [];
var count = 0;
var round = 0;
var turn = 1;
var start = false;
var strict = false;
var userInput = 0;

//Push a random number to array, then log to console
function createSolution(){
solution.push(ranNum = Math.floor(Math.random() * (3 - 0 +1)) + 0);
  console.log(solution);
  console.log(solution[count]);
}

//Resets game and variables
function resetGame(){
  solution = [];
  count = 0;
  round = 0;
  turn = 1;
  $("#turnCount").text("Turn: "+turn);
}

//Determine if player has won
function checkWin(){
  if(solution.length===21){
    alert("YOU WIN!!");
    resetGame();
  }
}

//Toggles strict mode off and on
function strictMode(){
  if(strict===false){
    strict = true;
    $("#strictStatus").text("ON");
  }else{
    strict = false;
    $("#strictStatus").text(" ");
  }
}

//Clicking the play buttons makes sound, sets userInput, and calls checkUserInput
$("#0").mousedown(function(){
  $('#0Snd').get(0).play();
  userInput = 0;
  checkUserInput();
});
$("#1").mousedown(function(){
  $('#1Snd').get(0).play();
  userInput = 1;
  checkUserInput();
});
$("#2").mousedown(function(){
  $('#2Snd').get(0).play();
  userInput = 2;
  checkUserInput();
});
$("#3").mousedown(function(){
  $('#3Snd').get(0).play();
  userInput = 3;
  checkUserInput();
});

//Starts game
$('#startBtn').click(resetGame);
$('#startBtn').click(createSolution);
$('#startBtn').click(compStart);
$("#startBtn").click(function(){
        $("#turnCount").text("Turn: "+turn);
    });

//Calls strictMode on click
$('#strictBtn').mousedown(strictMode);

//Selects first number from solution array, then calls letGoButton after .5 seconds
function compStart(){
  $('#'+solution[count]).css('box-shadow','0 5px #666','transform','translateY(4px)');
  $('#'+solution[count]+'Snd').get(0).play();
  start = true;
  $("#turnCount").text("Turn: "+turn);
  setTimeout(letGoButton,500);
  if(count++<solution.length-1){
    setTimeout(compStart,1000);
  }
};

//Starts next turn
function nextTurn(){
  count = 0;
  round = 0;
  setTimeout(compStart,1500);
};

//Returns button to inactive state
function letGoButton(){
  $('#0,#1,#2,#3').css({'box-shadow':'.1em 1em .1em black'});
};

//Compares userInput to value at array
function checkUserInput(){
   if(userInput===solution[round]){
    round++;
   if(round===solution.length){
        createSolution();
        turn++;
        checkWin();
        nextTurn();
                              } 
  }
   else if(strict === true){
    $('#0Snd').get(0).play();
    $('#1Snd').get(0).play();
    $('#2Snd').get(0).play();
    $('#3Snd').get(0).play();
    $("#turnCount").text("!!!");
    alert("GAME OVER!");
    resetGame();
    }else{
    $('#0Snd').get(0).play();
    $('#1Snd').get(0).play();
    $('#2Snd').get(0).play();
    $('#3Snd').get(0).play();
    $("#turnCount").text("!!!");
    setTimeout(nextTurn(),1000);
    }
   };