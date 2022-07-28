var input = document.querySelector(".inputText");
var input2 = document.querySelector(".inputText2");
var playerName = document.querySelector("#name");

var validPara = "bygmester finnegan, of the stuttering hand, freemen's maurer, lived in the broadest way immarginable in his rushlit toofar-back for messuages before joshuan judges had given us numbers or helviticus committed deuteronomy (one yeastyday he sternely struxk his tete in a tub for to watsch the future of his fates but ere he swiftly stook it out again, by the might of moses, the very water was eviparated and all the guenneses had met their exodus so that ought to show you what a pentschanjeuchy chap he was!) and during mighty odd years this man of hod, cement and edifices in toper's thorp piled buildung supra buildung pon the banks for the livers by the soangso."

input2.value=validPara;
var playerNameInput = prompt("Enter your name:");
playerName.innerHTML = playerNameInput;


var alphabets = "abcdefghijklmnopqrstuvwxyz";
// var mix =     "qwertyuiopasdfghjklzxcvbnm";
var mix = alphabets.split('').sort(function(){return 0.5-Math.random()}).join('');
console.log(mix);
// document.write(alphabets+"<br>");
// document.write(mix);
var mixed = {};
// Extra characters
var extra = ` )!,'"?.\n#&:;/(`
var timeStart = false;
for(var i=0;i<extra.length;i++){
    mixed[extra[i]] = extra[i]
}

for(var i=0;i<alphabets.length;i++){
    mixed[alphabets[i]] = mix[i]
    document.getElementById(alphabets[i]).innerHTML = `<strong>${mix[i]}</strong>`;
}

input.addEventListener("keydown",function(e){
  console.log(e.keyCode)
  if (e.keyCode==8 || e.keyCode==32 || e.keyCode==13 || e.keyCode == 16 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 190 || e.keyCode == 123 || e.keyCode == 188 || e.keyCode == 189 || e.keyCode == 186 || e.keyCode == 191 || e.keyCode == 222 || e.keyCode == 220 || e.keyCode==57 || (e.keyCode >= 48 && e.keyCode <= 57)) {
    return;
  }
  if(!timeStart){
    countDownTimer();
    timeStart = true;
  }
  e.preventDefault();
  var key = e.keyCode + 32;
  var letter = String.fromCharCode(key)
  // console.log(String.fromCharCode(key))
  input.value += mixed[letter];
})


// To Stop opening Developer tools.
document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

// Validation

function validatePara(){
  var content = input.value;
  var score = 0;
  for(var i=0;i<validPara.length;i++){
    // console.log(validPara[i],content[i])
    if(validPara[i]===content[i]){
      score++;
    }
  }
  localStorage.setItem(playerNameInput, score);
  alert(`Score: ${score}`);
}

// Timer

var count_timer = 60;
var minutes = parseInt(count_timer/60);
var seconds = parseInt(count_timer%60);
function countDownTimer(){
    if(seconds < 10){
        seconds= "0"+ seconds;
    }if(minutes < 10){
        minutes= "0"+ minutes;
    }
    
    document.querySelector(".time").innerHTML =minutes+":"+seconds;
    if(count_timer < 0){
      input.disabled = "true";
      // alert("Time Over");
      // calculateScore();
      validatePara();
    } else {
      count_timer = count_timer -1 ;
      minutes = parseInt(count_timer/60);
      seconds = parseInt(count_timer%60);
      setTimeout(countDownTimer,1000);
    }
}
// setTimeout(countDownTimer,1000);
// commentsadsf a

// if (e.keyCode==8){
//     return;
//     // var content = input.value;
//     // var lines = content.split("\n");
//     // var lastWord = lines[lines.length-1];
//     // lines[lines.length-1] = lastWord.split(" ").slice(0,-1).join(" ");
//     // input.value = lines.join("\n");
//   } 


