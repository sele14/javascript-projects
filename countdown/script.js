// connect JS to html divs by ID
const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');

const eventDate = '05/14/2021';

function countdown(){
    const eventDate1 = new Date(eventDate);
    const currentDate = new Date();
    const totalSeconds = (eventDate1 - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);
}

// make sure we have times in format '00' (e.g. 02 hours 01 minutes...)
function formatTime(time){
    // if time < 10, return 0 + time, else return the time
    if (time < 10){
        // this notation is same as string formatting in python; f'{varname}'
        return `0${time}`
    } else {
        return time
    }
}

countdown();

setInterval(countdown, 1000);