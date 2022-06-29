
//if global var needed define out function no need window
function lg(input) {
  console.log(input);
}

$(document).ready(function () {
  var isTimerDone = false;
  var isTimerOn = false;
  var isMute = false; //prevents audio playing if muted when vid changed.
  var sound = document.getElementsByClassName("audio")[0];
  // use a verb for funcs
  
  function getTimerLength() { // get the len of timer from inner html of button
    $(".time5,.time10,.time20").on("click", (event) => {
      timerLength = event.target.innerHTML - 1;
      hateThisShit = timerLength;
      nSecs = timerLength;
      secs = 60;
      kk = 0;
      isTimerOn=true;
    });
  }

  function runTimer() {// do the count down
    getTimerLength();
    setInterval(() => {
      if (window.nSecs >= 0) {
        $(".timer").html(window.timerLength + " : " + window.secs);
        window.secs--;
        isTimerDone = false;
        if (window.secs <= 0) {
          (window.secs = 60), window.timerLength--;
          window.nSecs--;
        }
      } 
     
      else {
        $(".timer").html(00 + " : " + 00);
        isTimerDone = true;
        isTimerOn=false;
       
        document.getElementsByClassName("audio")[0].pause();
      }
      if(window.timerLength===0&&window.secs===5)document.getElementsByClassName("timerEndBell")[0].play();
    }, 1000);
  }
 

  function timerBarMove() {// show the timer bar progress
    var style = getComputedStyle(document.body);
    var timerBarWidth = style.getPropertyValue("--timerBarWidth");

    setInterval(() => {
      if (isTimerDone === false) {
        if (window.kk <= 100) {
          document.documentElement.style.setProperty(
            "--timerBarWidth",
            window.kk + "%"
          );
        }
        if (window.hateThisShit == 4) {
          // sometimes the === wont work use double

          window.kk = window.kk + 0.29;
        }
        if (window.hateThisShit == 9) {
          // sometimes the === wont work use double
          lg("fd");
          window.kk = window.kk + 0.155;
        }
        if (window.hateThisShit == 19) {
          // sometimes the === wont work use double
          lg("fd");
          window.kk = window.kk + 0.0799;
        }
      }
    }, 1000);
  }
 
  function changeBkg() {//change the video and audio
    var vidNum = 1;
    $(".arrowClickArea").on("click", () => {
      if (vidNum === 1) {
        $("#backVideo").attr(
          "src",
          "forest vid.mp4"
        );
        $('.audio').attr("src","bird sounds.mp3")
        if(isTimerOn===true & isMute===false){
           sound.play();
        }
        vidNum = 2;
      } else if (vidNum === 2) {
        $("#backVideo").attr("src", "sunset beach.mp4");
        
         $(".audio").attr("src", "waves sound.mp3");
         vidNum = 1;
         if ((isTimerOn === true) & (isMute === false)) {
           sound.play();
         }
      }

    });
  }
 
  function Audio() { // playing and muting 
   
   
    if(isTimerDone===true) sound.pause();

    $(".time5,.time10,.time20").on("click", (event) => {
     
     if (isMute===false & isTimerOn===true) sound.play();
           
      console.log(sound.src);
    });

    $(".muteAudio").on("click", (event) => {
       if (isTimerOn === true) {
          if (isMute === false) {
            sound.pause();
            isMute = true; 
            $(".iconVol").html("volume_mute");
          } else if (isMute === true) {
            sound.play();
            isMute = false;
            $(".iconVol").html("volume_up");
          }
       }
      
    });
  }

  // run the goddamn functions first
  timerBarMove();
  runTimer();
  changeBkg();
  Audio();
 
});
