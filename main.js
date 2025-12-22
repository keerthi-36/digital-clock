var todaydate=document.getElementById("date");
console.log(todaydate);
var curmonth=document.getElementById("month");
console.log(curmonth);
var curyear=document.getElementById("year");
console.log(curyear);

var seconds=document.getElementById("sec");
var minute=document.getElementById("min");
var hours=document.getElementById("hour");

var aam=document.getElementById("am");
console.log(aam);
var ppm=document.getElementById("pm");
console.log(ppm);

var sun=document.getElementById("sun");
console.log(sun);
var mon=document.getElementById("mon");
console.log(mon);
var tue=document.getElementById("tue");
console.log(tue);
var wed=document.getElementById("wed");
console.log(wed);
var thu=document.getElementById("thur");
console.log(thu);
var fri=document.getElementById("fri");
console.log(fri);
var sat=document.getElementById("sat");
console.log(sat);



let today=new Date();
console.log(today);


var date=today.getDate();
console.log(date);
todaydate.innerText=date;

let months=["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC "];
var month=months[today.getMonth()];
console.log(month);
curmonth.innerText=month;

var year=today.getFullYear();
console.log(year);
curyear.innerText=year;


let hr=today.getHours();
console.log(hr);
hours.innerText=hr;

var min=today.getMinutes();
console.log(min);
minute.innerHTML=min;


//ssec
var sec=today.getSeconds();
console.log(sec);
// var a=seconds.innerHTML=sec

ms=setInterval(timer,1000);

seconds.innerText=sec;
minute.innerText=min;
hours.innerText=hr;


function timer(){
    if(sec<9){
        sec++;
        seconds.innerText="0"+sec;
    }
    else if(sec>=9 && sec<59){
        sec++;
        seconds.innerText=sec;
    }
    else{
       clearInterval(seconds);
       sec=0;
       if(min<9){
        min++;
        minute.innerText="0"+min;
       

         }
        else if(min>=9 && min<59){
            min++;
            minute.innerText=min;
           
    
         }

    else{
       clearInterval(minute);
       min=0;
       if(hr<9){
        
        hr++;
        hours.innerHTML="0"+hr;
        }
        else if(hr>=9 && hr<23){
        
            hr++;
            hours.innerHTML=hr;
            }
        else{
            clearInterval(hours);
            hr=0;
            }
    }
    }
}




if(hr<12){
   aam.style.color="red";
   
}
else{
   ppm.style.color="red"; 
  
}


var day=today.getDay();
console.log(day);


// let days=["sun","mon","tue","wed","thu","fri","sat"];


// days[day].style.color="red";

 if(day==0){
    sun.style.color="red";
 }
else if(day==1){
    mon.style.color="red";
 }
 else if(day==2){
tue.style.color="red";
 }
 else if(day==3){
    wed.style.color="red";
 }
else if(day==4){
    thu.style.color="red";
 }
 else if(day==5){
     fri.style.color="red";
 }
else if(day==6){
    sat.style.color="red";
}