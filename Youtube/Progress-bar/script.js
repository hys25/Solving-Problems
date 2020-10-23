// TASK: Progress bar should be filled in for a specified amount of time.The time is set in the function call.
function userProgress(time){
    let start = 0;
    let timeInterval = Math.round(time*10);
    let progressElement = document.getElementById('user-progress');

    let inteervalId = setInterval(function(){
        if (start > 100) {
            clearInterval(inteervalId);
            userProgressCallback();
        } else {
            progressElement.value = start; 
        }
        start++;
    }, timeInterval);
}
function userProgressCallback() {
     document.querySelector('.hidden-block').style.display = 'block';
}

userProgress(1);