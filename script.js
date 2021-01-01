let countseconds = 0;
let stopwatch;

const numbers = document.querySelector(".Stopwatch");      
function display(){
    let hours = Math.floor(countseconds/3600);
    let minutes = Math.floor((countseconds%3600)/60);
    let seconds = Math.floor(countseconds % 60);

    let displayHours = (hours < 10) ? '0' + hours : hours;
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds; 

    numbers.textContent = displayHours + " : " + displayMinutes+ " : " + displaySeconds;
    if(displaySeconds%2 == 0){
        numbers.style.color="blue";
    }
    else{
        numbers.style.color="white";
    }
    countseconds++;
    }
const startB = document.querySelector('.start');
const stopB = document.querySelector('.stop');
const resetB = document.querySelector('.reset');

  startB.addEventListener('click', () => {
  stopwatch = setInterval(display, 1000);
  startB.disabled = true;
});

  stopB.addEventListener('click', () => {
  clearInterval(stopwatch);
  startB.disabled = false;
});

  resetB.addEventListener('click', () => {
  clearInterval(stopwatch);
  startB.disabled = false;
  countseconds = 0;

  if (countseconds%2==0){
      
  }
  display();
});
display();  