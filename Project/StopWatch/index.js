let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
}


function stopwatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;            
        }

        if (second == 60) {
            minute++;
            second = 0;  
        }

        if (minute == 60) {
            hour++;
            minute = 0;
        }
        

        let hourString = hour;
        let minuteString = minute;
        let secondString = second;
        let countString = count;

        if (hour < 10) {
            hourString = "0" + hourString;
        }

        if (minute < 10) {
            minuteString = "0" + minuteString;
        }

        if (second < 10) {
            secondString = "0" + secondString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById("hour").innerHTML = hourString;
        document.getElementById("minute").innerHTML = minuteString;
        document.getElementById("second").innerHTML = secondString;
        document.getElementById("count").innerHTML = countString;

        setTimeout(stopwatch, 10);
    }
}