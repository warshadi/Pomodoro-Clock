// this control of Break time

let br_time = document.getElementById("b_time");
let br_dec = document.getElementById("b_decr");
let br_inc = document.getElementById("b_incr");

br_dec.addEventListener('click', function () {
    br_time.innerText--;
})
br_inc.addEventListener('click', function () {
    br_time.innerText++;
})


// this control of Work time 

let wo_time = document.getElementById("w_time");
let wo_dec = document.getElementById("w_decr");
let wo_inc = document.getElementById("w_incr");


wo_dec.addEventListener('click', function () {
    wo_time.innerText--;
})

wo_inc.addEventListener('click', function () {
    wo_time.innerText++;
})

// counter 
let count_min = document.getElementById("min")
let count_sec = document.getElementById("sec")

count_min.innerText = wo_time.innerText;

// control of counter 
const str = document.getElementById("start")
const pau = document.getElementById("pause")
const res = document.getElementById("reset")

function timer() {
    if (count_sec.innerText != 0) {
        count_sec.innerText--;
    } else if (count_sec.innerText == 0 && count_min.innerText != 0) {
        count_min.innerText--;
        count_sec.innerText = 59;
    }
};
let start_inter;
function start_timer() {
    start_inter = setInterval(timer, 1000);
}

str.addEventListener("click", start_timer)

function stop_inter() {
    clearInterval(start_inter);
}
pau.addEventListener("click", stop_inter);

res.addEventListener("click", stop);

function stop() {
    count_min.innerText = wo_time.innerText;
    count_sec.innerText = "00";
    stop_inter();
}