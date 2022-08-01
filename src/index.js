const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.seconds')
const milisecondEl = document.querySelector('.miliseconds')


const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const waitBtn = document.querySelector('.wait')
const resetBtn = document.querySelector('.reset')

startBtn.addEventListener('click', start)
// waitBtn.addEventListener('ondblclick', wait)
waitBtn.ondblclick = wait
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)

let minute = 0;
let seconds = 0;
let miliseconds = 0;
let interval;


function start() {
    clearInterval(interval)
    interval = setInterval(startTimer, 10 )
}

function stop() {
    clearInterval(interval)
    miliseconds = 0
    seconds = 0
    minute = 0
    secondEl.textContent = "00"
    minuteEl.textContent ='00'
    
}


function reset() {
    clearInterval(interval)
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.innerText = `Result: ${minute}:${seconds}`
    results.append(block)
    miliseconds = 0
    seconds = 0
    minute = 0
    secondEl.textContent = "00"
    minuteEl.textContent = '00'
    start()
    

}
function wait() {
    clearInterval(interval)
}

function startTimer() {
    miliseconds += 1;
    if (miliseconds < 9) {
        milisecondEl.innerText = '0' + miliseconds
    }
    if (miliseconds > 9) {
        milisecondEl.innerText =  miliseconds 
    }
  
    if (miliseconds > 99) {
        seconds += 1;
        secondEl.innerText = "0" + seconds
        miliseconds = 0
        miliseconds.innerText = '0' + miliseconds
        
    }
if (seconds < 9) {
        secondEl.innerText = '0' + seconds
    }
    if (seconds > 9) {
        secondEl.innerText =  seconds 
    }
  
    if (seconds > 59) {
        minute += 1;
        minuteEl.innerText = "0" + minute
        seconds = 0
        seconds.innerText = '0' + seconds
        
    }
    
}
