(function () {
    'use strict';
    const infobar = nodecg.Replicant('infobar');
    var i = 0;
    var j = 0;
    var speed = 50;
    var welcome = document.getElementById("welcome");
    var nextrun = document.getElementById("nextrun");
    var why = document.getElementById("why");

    var list =  [nextrun,why,welcome];

    var welcomeText = document.getElementById("welcomeText");
    var nextrunText = document.getElementById("nextrunText");
    var whyText = document.getElementById("whyText");

    var listText = [nextrunText,whyText,welcomeText];

    var welcomeValue = infobar.value.welcome;
    var nextrunValue = infobar.value.nextrun;
    var whyValue = infobar.value.why;

    var listValue = [nextrunValue,whyValue,welcomeValue];
    

    setTimeout(showStuff,10000);

    function typeWriter() {
        if (j < listValue[i].length) {
            listText[i].innerHTML += listValue[i].charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        }
        else
        {
            j=0;
            i++;
            setTimeout(showStuff,10000);
        }
    }
    function showStuff()
    {
        if(i==0)
      {
         list[list.length-1].classList.add("hidden");
         listText[list.length-1].innerHTML="";
      }
      else
      {
        list[i-1].classList.add("hidden");
        listText[i-1].innerHTML="";
        if(i==list.length)
        {
            i=0;
        }
      }
      typeWriter();
      list[i].classList.remove("hidden");
    }
})();