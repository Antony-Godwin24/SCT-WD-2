var timer;
var seconds=0,minutes=0,hours=0;
var istimer=false;

function starttimer(){
    if(!istimer){
        istimer=true;
        timer=setInterval(updatetimer,1000)
    }
}

function stoptimer(){
    istimer=false;
    clearInterval(timer);
}


function resettimer(){
    stoptimer();
    seconds=minutes=hours=0;
    document.querySelector(".timer").innerText="00 : 00 : 00";
}

function updatetimer(){
    seconds++;
    if(seconds>60){
        seconds=0;
        minutes++;
        if(minutes>60){
            minutes=0;
            hours++;
        }
    }

    document.querySelector(".timer").innerText=
    (hours<10 ? "0" + hours:hours) + " : " + (minutes<10? "0"+minutes:minutes)+" : "+(seconds<10? "0"+seconds:seconds); 
}