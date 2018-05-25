window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

function setbackground()
      {
      window.setTimeout( "setbackground()", 5000); // 5000 milliseconds delay
      
      var index = Math.round(Math.random() * 5);
      
      var ColorValue = "AFD275"; // default color - white (index = 0)
      
      
      if(index == 1)
      ColorValue = "64485C";      
      if(index == 2)
      ColorValue = "1A1A1D";
      if(index == 3)
      ColorValue = "66FCF1";
      if(index == 4)
      ColorValue = "116466";
      if(index == 5)
      ColorValue = "17252A";            
      document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
      
      }

      