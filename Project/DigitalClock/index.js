const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const setion = document.getElementById("setion");

setInterval(() => {   
    const d = new Date();

    let H = d.getHours();
    if (H < 10) {
        H = "0" + H;
    }
    else {
        H = H;
    }


    let M = d.getMinutes();
    if (M < 10) {
        M = "0" + M;
    }
    else {
        M = M;
    }


    let S = d.getSeconds();
    if (S < 10) {
        S = "0" + S;
    }
    else {
        S = S;
    }


    let text = "";
    if (H > 12) {
        text = "PM";
    }
    else {
        text = "AM"
    }


    hours.innerHTML = H;
    minutes.innerHTML = M;
    seconds.innerHTML = S;
    setion.innerHTML = text;

}, 1000)