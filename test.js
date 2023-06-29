
//When fix used session storage

const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

var result = 1

let currentTime = 60
let timerId = null



function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
   location.href = "./finish.html"; //goto score page //WORKS!!!
 }

}

let countDownTimerId = setInterval(countDown, 1000)



const incrementScore = () =>  //arrow function
{
    result++
    score.textContent = result + 1
    location.href = "./page2.html" //goto next question //WORKS!!!
    alert('Your score is ' + result)
    if (localStorage.result) 
  {
    localStorage.result = Number(localStorage.result)+1;
  } 
  else 
  {
    localStorage.result = 1;
  }
    document.getElementById("demo").innerHTML = localStorage.result;
   
}

const nextQuestion = () =>  //arrow function
{
  
    location.href = "./page2.html" //goto next question //WORKS!!!
  
   
}



//incrementScore2();
/* P2 */
function incrementScore2 ()
{
    result++
    score.textContent = result + 1

    location.href = "./page3.html"; //goto next question //WORKS!!!
    alert('Your score is ' + result)
  if (localStorage.result) 
  {
    localStorage.result = Number(localStorage.result)+1;
  } 
  else 
  {
    localStorage.result = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.result;
 
}


const incrementScore3 = () =>  //arrow function
{
    result++
    score.textContent = result + 1

    location.href = "./finish.html"; //goto next question //WORKS!!!
  alert('GAME OVER! Your final score is ' + result)
    if (localStorage.result) 
  {
    localStorage.result = Number(localStorage.result)+1;
  } 
  else 
  {
    localStorage.result = 1;
  }
    document.getElementById("demo").innerHTML = localStorage.result;

}

function newGame()
{
    localStorage.getItem(score);
    localStorage.getItem(result);
   
    location.href = "./index.html";
   // localStorage.clear();
}

//let lastname = localStorage.getItem(key); //original

//let score = localStorage.getItem(result);

//localStorage.getItem(score);