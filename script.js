let daysEl  = document.getElementById('days');
let hoursEl = document.getElementById('hours');
let minsEl = document.getElementById('mins');
let secEl = document.getElementById('sec');
let currentDateEl = document.getElementById('today');
let newYearEl = document.getElementById('newyear');


let newYears = '1 Jan 2022';


let countdown = () => {
    
    let currentDate = new Date();
    let newYearDate = new Date(newYears);
    let todayDate = currentDate.getDate();
    let todayMonth = currentDate.getMonth() + 1;
    let todayYear = currentDate.getFullYear();
    let todayFullDate = () => `${todayDate} - ${todayMonth} - ${todayYear}`;

    let totalSec = Math.round((newYearDate-currentDate) / 1000);

      
    let days = Math.floor(totalSec/3600/24);
    let hours = Math.floor(totalSec/3600) % 24;
    let mins = Math.floor(totalSec/60) % 60;
    let sec = Math.floor(totalSec % 60);


    // let updateNewYear = () => {
    //     let newYearFullYear = newYearDate.getFullYear();
    //     let yearFullYear = newYearFullYear.toString();
    //     let fullYear = ``;
    //     let todayFullYear = todayYear.toString();
        
    //     if(currentDate = newYearDate){
    //         yearFullYear++;
    //         fullYear = yearFullYear;
    //     }else if(currentDate > newYearDate){
    //         while(todayFullYear => yearFullYear){
    //             yearFullYear++;
    //             fullYear = yearFullYear;
    //         }
    //     }else{
    //         return newYearFullYear;
    //     }
    //     let newFullYear = new Date(fullYear)
    // }
    // updateNewYear();
   
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);
    currentDateEl.innerHTML = formatTime(todayFullDate());
    // newYearEl.innerHTML = formatTime(newYearDate.getFullYear());
    newYearEl.innerHTML = formatTime(newYearDate.getFullYear());

    // console.log(new Date());

}

let formatTime = time => time < 10 ? (`0${time}`) : time; 


countdown();
setInterval(countdown,1000);




