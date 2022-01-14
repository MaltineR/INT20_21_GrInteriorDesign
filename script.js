
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
//what forms
$(document).ready(function(){
  $("button1").click(function(){
    var div = $("div2");  
    div.animate({left: '800px'}, "slow");
    div.animate({fontSize: '2em'}, "slow");
  });
});

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
      $(this).css("background-color", "lightgreen");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "pink");
    }  
  });
});
//WHAT WE OFFER
$(document).ready(function(){  
  $("#btn2").click(function(){  
      $("ol1").append("<li><b>CONCEPTS FROM MULTIPLE TOP DESIGNERS</b></li>");  
           $("ol1").append("<li><b>ONE-ON-ONE INTERIOR DESIGN CONSULTATION</b></li>");
           $("ol1").append("<li><b>3D MODEL OF YOUR SPACE</b></li>"); 
            $("ol1").append("<li><b>COLOR PALETTE AND FLOOR PLAN</b></li>");  

  });  
});  

      


    





