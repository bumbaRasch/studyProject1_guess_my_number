 "use strict";

 console.group('Guess the number DRY');

// DISPLAY 

 let num = Math.floor(Math.random() * 20) + 1;
 
 // add high score
 let highScore = 0;
 
 //guess number
 const guessNumber = document.querySelector('.guess__number');
 
 //btn check
 
 const btnCheck = document.querySelector(".btn__check");
 
 //output
 const numOut = document.querySelector(".sectionRight__title");
 
 //scoreWin
 const scoreWin = document.querySelector(".sectionRight__highscore");
 
 //score Lose
 const scoreLose = document.querySelector(".sectionRight__score");
 let score = 20;

// FUNCTIONS 

 // function message
const displayMessage = function(message){
  numOut.textContent = message;
}


const restartBody = ()  => {
  num = Math.floor(Math.random() * 21);
     displayMessage('Start guessing...');
     guessNumber.textContent = '?';
     document.querySelector('.app__container').style.backgroundColor = 'rgb(231, 231, 135)';
     document.querySelector('.app__container').style.transition = 'background-color 2s ease';
     score = 20;
     scoreLose.textContent = score;
     document.querySelector('.sectionLeft__guess').value = '';
};
restartBody();



 console.log(num);
 
 
 // check and add input;
 btnCheck.addEventListener('click', function(){
   const numbInput = Number(document.querySelector(".sectionLeft__guess").value);
    if(numbInput === 0) {
      displayMessage (`Enter a number from 1 to 20!`);
      return
    }
    if(Number.isNaN(numbInput)){
     displayMessage (`Not a Number!`);
 
     //win
    } else if(numbInput === num){
     guessNumber.textContent = num;
     scoreWin.textContent = score;
     document.querySelector('.app__container').style.backgroundColor = 'rgb(43, 206, 106)';
     document.querySelector('.app__container').style.transition = 'background-color 2s ease';
     displayMessage('You Win 🎉 🎉 🎉');


     //text high score
       if(score > highScore){
       highScore = score;
       scoreWin.textContent = highScore;
       }
     }  else if(numbInput !== num) {
          if(score > 1){ //your number is higher
            displayMessage(numbInput > num ? 'Your number is over' : 'Your number is lower');
            score--;
            scoreLose.textContent = score;
          } else {
            displayMessage('You lost the game 💥');
            document.querySelector('.app__container').style.backgroundColor = 'red';
            document.querySelector('.app__container').style.transition = 'background-color 2s ease';
            scoreLose.textContent = 0;
          }
        } 
      }  
 );
 
 //btn Go (again)
 const btnGo = document.querySelector(".btn__again");
 btnGo.addEventListener('click', ()=>{
     restartBody()
     
     console.log(num);
 });


 
 console.groupEnd();
  
 
console.group("Guess my number");

/* // or Math.trunc(Math.random() * 20) + 1)
let num = Math.floor(Math.random() * 21);
console.log(num);
let highScore = 0;

//guess number
const guessNumber = document.querySelector('.guess__number');

//btn check

const btnCheck = document.querySelector(".btn__check");

//output
const numOut = document.querySelector(".sectionRight__title");

//scoreWin
const scoreWin = document.querySelector(".sectionRight__highscore");

const scoreLose = document.querySelector(".sectionRight__score");
let score = 20;



// check and add input;
btnCheck.addEventListener('click', function(){
  const numbInput = Number(document.querySelector(".sectionLeft__guess").value);
  
   if(Number.isNaN(numbInput)){
    numOut.textContent = `Not a Number!`;

    //win
   } else if(numbInput === num){
    guessNumber.textContent = num;
    scoreWin.textContent = score;
    document.querySelector('.main').style.backgroundColor = 'green';
    document.querySelector('.main').style.transition = 'background-color 2s ease';
    
    numOut.textContent = 'You Win';
    //text high score
    if(score > highScore){
      highScore = score;
      scoreWin.textContent = highScore;
    }
    //your number is higher
   } else if(numbInput > num){
        if(score > 1){
            score--;
            scoreLose.textContent = score;
            numOut.textContent = 'Your number is over';
           
        } else {
            numOut.textContent = 'Are you idiot? You lost the game';
            scoreLose.textContent = 0;
        }
      //your number is lower
   } else if(numbInput < num){
        if(score > 1){
        score--;
        scoreLose.textContent = score;
        numOut.textContent = 'Your number is lower';
      } else {
          numOut.textContent = 'Are you idiot? You lost the game';
          scoreLose.textContent = 0;
      }
  }
});

//btn Go (again)
const btnGo = document.querySelector(".btn__again");
btnGo.addEventListener('click', ()=>{
    num = Math.floor(Math.random() * 21);
    numOut.textContent = 'Start guessing...';
    guessNumber.textContent = '?';
    document.querySelector('.main').style.backgroundColor = 'grey';
    document.querySelector('.main').style.transition = 'background-color 2s ease';
    score = 20;
    scoreLose.textContent = score;
    document.querySelector('.sectionLeft__guess').value = '';
    
    console.log(num);
});
 */
console.groupEnd();

