const hourEl = document.getElementById('hour'),
    minuteEl = document.getElementById('minutes'),
    secondEl = document.getElementById('seconds'),
    ampmEl = document.querySelector('#ampm');

 function  updaClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerHTML = ampm);
    setTimeout(() => {
        updaClock();
    },1000)
} 
 
 updaClock()