window.onload = function () {
    var boundary1 = document.getElementById("boundary1");
    var end = document.getElementById("end");
    var start = document.getElementById("start");
    var status = document.getElementById("status")
    var boundary = document.getElementsByClassName("boundary");
    var x = document.querySelectorAll(".boundary");
    var i;

    end.onmouseover = function () {
        //alert("You Win!!!!");
        status.innerHTML = "you win";
    }
    start.onclick = function () {
        location.reload();

    }


  
    for (i = 0; i < boundary.length; i++) {
        
        x[i].onmouseover = function () {
            //alert("you lose");
            status.innerHTML = "you lose";
            for (var e = 0; e < boundary.length; e++) {
                x[e].className += " youlose";
                

            }
        }
        
    }
  boundary1.onmouseover = function () {
      boundary1.className += " youlose";
      alert("you lose");
    }
   
   
}


