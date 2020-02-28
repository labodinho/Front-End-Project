let wakeuptime = 7;
let noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 2;
let partytime;
let evening = 18;

//Getting to show current time on the page

let showCurrentTime = () => {
    //display the string on the website
   let clock =  document.getElementById("clock");

   let currentTime = new Date();
    //console.log(currentTime);


   //return the hour,according to local time
   let hours = currentTime.getHours();
   //console.log(hours)

   let minutes = currentTime.getMinutes();
   let seconds = currentTime.getSeconds();
   let meridian = "AM"

   //set hours

   if (hours >= noon) {
    meridian = "PM"
   }
    
   if (hours > noon) {
       hours = hours - 12
   }


   //set minutes 
   if (minutes < 10) {
       minutes = "0" + minutes;
   }

    //set seconds 
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

   //put together the string that display the time

   let clockTime = hours + ':' + minutes + ':' + seconds + '' + meridian + '!';

   clock.innerHTML = clockTime;

};

// showCurrentTime();

//get the clock to increment  on its own and change out messgaes and pictures

let updateClock = () => {
    let time = new Date().getHours(); //time is the present hour
    let messageText;
    let image = 'c';

    let timeEventJS = document.getElementById("timeEvent");
    let lolcatImageJS = document.getElementById("lolcatImage")

    if (time == partytime) {
        image = './image/catPartyTime.jpg';
        messageText = "Let Party"
    }
    else if (time == wakeuptime) {
        image = './image/cat2.jpg';
        messageText = "wake up!"
    }
    else if (time == lunchtime) {
        image = './image/cat3.jpg';
        messageText = "Let's have some lunch"
    }
    else if (time == naptime) {
        image = './image/Cat_sleep.jpg';
        messageText = "Sleep Time"
    }
    else if (time < noon) {
        image = './image/cat5.jpeg';
        messageText = "Good Morning"
    }
    else if (time >= evening) {
        image = './image/cat4.jpg';
        messageText = "Good Evening"
    }
    else {
        image = './image/cat.jpg';
        messageText = "Good afternoon"
    }
    
    console.log(messageText);
    timeEventJS.innerHTML = messageText;
    lolcatImageJS.src = image;
    
    showCurrentTime();
};

updateClock();

let oneSecond = 1000;
setInterval (updateClock, oneSecond);



//define party time

let partyButton = document.getElementById("partyTimeButton");

let partyEvent = () => {
    if (partytime < 0) {
        partytime = new Date.getHours();
        partyButton.innerHTML = "Party Over";
        partyButton.style.backgroundColor = "#0ABDAB";

    }
    else{
        partytime = -1;
        partyButton.innerHTML = "Party Time";
        partyButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


//activate wake up selector

let wakeUpTimeSelector = document.getElementById("WakeUpTimeSelector");

let wakeupEvent = () => {
    wakeuptime = wakeUpTimeSelector.value;
}

wakeUpTimeSelector.addEventListener("change",wakeupEvent) //(event,on which function to act)
wakeupEvent();


//activate lunch time selector

let LunchTimeSelector = document.getElementById("LunchTimeSelector");

let lunchTimeEvent = () => {
    lunchtime = LunchTimeSelector.value;
}

LunchTimeSelector.addEventListener("change",lunchTimeEvent)
lunchTimeEvent();


//activate Nap time selector

let NapTimeSelector = document.getElementById("NapTimeSelector");

let NapTimeEvent = () => {
    naptime = NapTimeSelector.value;
}

NapTimeSelector.addEventListener("change",NapTimeEvent)
NapTimeEvent();









