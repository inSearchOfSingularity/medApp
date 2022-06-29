function lg(input) {
  console.log(input);
}
var isTimerOn =false;
$(document).ready(function () {
  var isTimerDone = false;
  // use a verb for funcs
  //var timerLength = 0; // in mins
  function getTimerLength() {
    $(".time5,.time10,.time20").on("click", (event) => {
      timerLength = event.target.innerHTML - 1;
      hateThisShit = timerLength;
      nSecs = timerLength;
      secs = 60;
      kk = 0;
      isTimerOn=true;
    });
  }

  function runTimer() {
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
      } else {
        $(".timer").html(00 + " : " + 00);
        isTimerDone = true;
        isTimerOn=false;
      }
    }, 1000);
  }

  function timerBarMove() {
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
          "Forest Wonders in 4K - Short Preview of the Nature Relax Video.mp4"
        );
        $('.audio').attr("src","frst audio.mp3")
        if(isTimerOn===true & isMute===false){
           document.getElementsByClassName("audio")[0].play();
        }
        vidNum = 2;
      } else if (vidNum === 2) {
        $("#backVideo").attr("src", "beach with fade.mp4");
        
         $(".audio").attr("src", "sea waves sound effects (128 kbps).mp3");
         vidNum = 1;
         if ((isTimerOn === true) & (isMute === false)) {
           document.getElementsByClassName("audio")[0].play();
         }
      }

      // $("#backVideo")[0].load();
    });
  }
  var isMute = false; //prevents audio playing if muted when vid changed.
  function Audio() {
   
    
    var sound = document.getElementsByClassName("audio")[0];

    $(".time5,.time10,.time20").on("click", (event) => {
     if (isMute===false) document.getElementsByClassName("audio")[0].play();
           
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
