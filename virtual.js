const start_btn = document.querySelector('#start_btn');

const recon = window.SpeechRecognition || window.webkitSpeechRecognition;

start_btn.addEventListener('click', recordingstart)
const recogntion = new recon();
console.log(recogntion)
if (recon) {
    recogntion.continuous = false;
    recogntion.interimResults = false;
    recogntion.lang = "en-US";
    recogntion.maxAlternatives = 1;

    recogntion.onstart = function () {
        console.log("recongition is started")
    }


    recogntion.onresult = (event) => {
        const newText = event.results[event.results.length - 1][0].transcript;

        console.log("user said", newText);
        processcommand(newText);

    };

}


function speak(text) {
    const utternace = new SpeechSynthesisUtterance(text);
    console.log(utternace)
    utternace.lang = "en-US";
    window.speechSynthesis.speak(utternace);
}


function processcommand(command) {
    const normalizedCommand = command.toLowerCase();

    if (normalizedCommand.includes("echo mind") || normalizedCommand.includes("eco mind")) {
        speak("hello! how can i assist you?");
    }
    else if (normalizedCommand.includes("hello")) {
        speak("please start this service with speak! hello Neo");
    }
    else if (normalizedCommand.includes("hey echo mind ") || normalizedCommand.includes("hey eco mind")) {
        if (normalizedCommand.includes("open youtube")) {
            speak("Opening YouTube for you.");
            window.open("https://www.youtube.com", "_blank");  // Opens YouTube in a new tab
        }
      
        else {
            speak("hello! how can i assist you?");
        }
    }
}

function recordingstart() {
    recogntion.start();
}
