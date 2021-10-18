try {
  var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var recognition = new SpeechRecognition();
}
catch(e) {
  console.error(e);
  $('.no-browser-support').show();
  $('.app').hide();
}

var noteTextarea = $('#note-textarea');
var noteContent = '';

/*-----------------------------
      Voice Recognition 
------------------------------*/
recognition.continuous = true;
recognition.onresult = function(event) {
  var current = event.resultIndex;
  var transcript = event.results[current][0].transcript;
  var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript);

  if(!mobileRepeatBug) {
    noteContent = transcript;
    noteTextarea.val(noteContent);
  }
};

recognition.onspeechend = function(){
    var value = document.getElementById('note-textarea').value;
        if (value!='')
        {
            window.open('/powel/r/?value='+value,'frame')
        }
}

/*-----------------------------
      App buttons and input 
------------------------------*/
$('#start-record-btn').on('click', function(e) {
  recognition.start();
});

$('#back').on('click', function(e) {
  recognition.start();
});

$('#pause-record-btn').on('click', function(e) {
  recognition.stop();
  document.getElementById('note-textarea').value = '';
});


/*-----------------------------
      Speech Synthesis 
------------------------------*/
function readOutLoud(message) {
	var speech = new SpeechSynthesisUtterance();
	speech.text = message;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  
	window.speechSynthesis.speak(speech);
}