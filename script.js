const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const hourText = document.querySelector('#hour b');
const minText = document.querySelector('#min b');
const secText = document.querySelector('#sec b');

function displayTime() {
    let date = new Date();
    // console.log(date.());

    // get hours, minutes and seconds
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30*hh + mm/2;
    let mRotate = 6*mm;
    let sRotate = 6*ss;


    hour.style.transform = `rotate(${hRotate}deg)`;
    min.style.transform = `rotate(${mRotate}deg)`;
    sec.style.transform = `rotate(${sRotate}deg)`;

    hourText.style.transform = `translateY(-75px) rotate(-${hRotate}deg)`;
    minText.style.transform = `translateY(-75px) rotate(-${mRotate}deg)`;
    secText.style.transform = `translateY(-75px) rotate(-${sRotate}deg)`;
    

}

setInterval( displayTime , 1000);