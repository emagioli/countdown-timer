let deadlineInput = document.getElementById("datetimeinfo");
let timerDiv = document.getElementById("timer");

function setTimer() {

    let deadlineDateTime = new Date(deadlineInput.value);
    let currentDateTime = getCurrentDateTime();

    let timeSpanInMilliseconds = subtractDates(deadlineDateTime, currentDateTime);

    let daysLeft = getDaysLeft(timeSpanInMilliseconds);
    let hoursLeft = getHoursLeft(timeSpanInMilliseconds);
    let minutesLeft = getMinutesLeft(timeSpanInMilliseconds);
    let secondsLeft = getSecondsLeft(timeSpanInMilliseconds);

    //buildTimer(timeSpan);
}

function getCurrentDateTime() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let currentDateTime = new Date(date + ' ' + time);
    return currentDateTime;
}

function subtractDates(d1, d2) {
    // let timeSpanInMilliseconds = deadlineDateTime.getTime() - currentDateTime.getTime();
    return d1.getTime() - d2.getTime();
}

function getDaysLeft(timeSpanInMilliseconds) {
    return Math.floor(timeSpanInMilliseconds / (1000 * 60 * 60 * 24));
}

function getHoursLeft(timeSpanInMilliseconds) {
    // let hoursLeft = (totalTime - wholeHours).toHours;
    let totalTime = timeSpanInMilliseconds;

    let totalTimeInHours = totalTime / (1000 * 60 * 60);
    let wholeHours = getDaysLeft(totalTime) * 24; //

    let hoursLeft = Math.floor(totalTimeInHours - wholeHours);
    return hoursLeft;
}

function getMinutesLeft(timeSpanInMilliseconds) {
    let wholeDays = getDaysLeft(timeSpanInMilliseconds);
    let wholeHours = getHoursLeft(timeSpanInMilliseconds);

    let wholeDaysInMinutes = wholeDays * 24 * 60;
    let wholeHoursInMinutes = wholeHours * 60;

    let totalTimeInMinutes = timeSpanInMilliseconds / (1000 * 60);

    let minutesLeft = Math.floor(totalTimeInMinutes - wholeDaysInMinutes - wholeHoursInMinutes);

    return minutesLeft;
}

function getSecondsLeft(timeSpanInMilliseconds) {
    let wholeDays = getDaysLeft(timeSpanInMilliseconds);
    let wholeHours = getHoursLeft(timeSpanInMilliseconds);
    let wholeMinutes = getMinutesLeft(timeSpanInMilliseconds);

    let wholeDaysInSeconds = wholeDays * (24 * 60 * 60);
    let wholeHoursInSeconds = wholeHours * (60 * 60);
    let wholeMinutesInSeconds = wholeMinutes * 60;

    let totalTimeInSeconds = timeSpanInMilliseconds / 1000;

    let secondsLeft = Math.floor(
        totalTimeInSeconds - (wholeDaysInSeconds + wholeHoursInSeconds + wholeMinutesInSeconds)
    );

    return secondsLeft;

}

function buildTimer(days, hours, minutes, seconds) {

}

function testTimer(seconds) {
    let timeShown = seconds;
    
    setInterval(() => {
        if (timeShown >= 0) {
            console.log(timeShown);
            timeShown--;
        }
    }, 1000);


}