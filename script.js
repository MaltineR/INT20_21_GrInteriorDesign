
//Drag and drop 
function allowDrop(ev) {
    ev.preventDefault();
    }
    
    function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    }
    
    function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    } 
    //Canvas
    window.onload = function() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); 
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); 
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2, true); 
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  
        ctx.stroke();
    }

//Location 
    var x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}
//countdown counter 
var countDownDate = new Date("Jan 31, 2022 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        
    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + "Days "
    document.getElementById("hours").innerHTML = hours + "Hours " 
    document.getElementById("mins").innerHTML = minutes + "Mins " 
    document.getElementById("secs").innerHTML = seconds + "Secs " 
        
    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
    }, 1000);
//startworker 
let w;

function startWorker() {
  if(typeof(w) == "undefined") {
    w = new Worker("demo_workers.js");
  }
  w.onmessage = function(event) {
    document.getElementById("result").innerHTML = event.data;
  };
}

function stopWorker() { 
  w.terminate();
  w = undefined;
}
//what is palette
$(document).ready(function(){
  $("button1").click(function(){
    var div = $("div2");  
    div.animate({left: '800px'}, "slow");
    div.animate({fontSize: '2em'}, "slow");
  });
});

 //colors 

 function myFunction() {

  document.getElementById("demo").innerHTML = "Red,White,black,brown,black";
}
//questions
$(document).ready(function(){
  $("#question-title").click(function(){
    $("#question-text").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#question-title2").click(function(){
    $("#question-text2").slideToggle("slow");
  });
});
$(document).ready(function(){
  $("#question-title3").click(function(){
    $("#question-text3").slideToggle("slow");
  });
});
//color changing 
$(document).ready(function(){
  $("p5").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});
    // function funcClick () {
    //     var array=[red,pink,blue,green,beige,white,black];
    //     var i;
    //     var text=" ";
    //     for(i=0;i<array.length;i++){
    //         text+=array[i]+"<br>";
    //     }
    //     x.innerHTML=text;
    //   }
      


             //clock
    //  window.onload = function showTime(){
    //     var date = new Date();
    //     var h = date.getHours(); // 0 - 23
    //     var m = date.getMinutes(); // 0 - 59
    //     var s = date.getSeconds(); // 0 - 59
    //     var session = "AM";
        
    //     if(h == 0){
    //         h = 12;
    //     }
        
    //     if(h > 12){
    //         h = h - 12;
    //         session = "PM";
    //     }
        
    //     h = (h < 10) ? "0" + h : h;
    //     m = (m < 10) ? "0" + m : m;
    //     s = (s < 10) ? "0" + s : s;
        
    //     var time = h + ":" + m + ":" + s + " " + session;
    //     document.getElementById("MyClockDisplay").innerText = time;
    //     document.getElementById("MyClockDisplay").textContent = time;
        
    //     setTimeout(showTime, 1000);
        
    // }
    
    // showTime();

    //COUNTDOWN 
    
// var countDownDate = new Date("Dec 27, 2021 15:06:25").getTime();


// var x = setInterval(function() {


//   var now = new Date().getTime();
    

//   var distance = countDownDate - now;
    

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
    

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
// //testimonials




