const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = "1 Jan 2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;      // 9778940.781 total seconds

    const days = Math.floor(totalSeconds / 3600 / 24 );    // 113 days
    const hours = Math.floor(totalSeconds / 3600) % 24;   // 4hours
    const mins = Math.floor(totalSeconds / 60) % 60;     
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    if(totalSeconds<0){
    	clearInterval(countdown);
        document.getElementById('id1').innerHTML = "HAPPY NEW YEAR 2021";
    }

}
countdown();
setInterval(countdown,1000);
function formatTime(time){
    return time<10 ? `0${time}` : time;
     //return time<10 ? `0${time}` : time;
}