const start_btn = document.querySelector('#start_btn');

const recon = window.SpeechRecognition || window.webkitSpeechRecognition;

start_btn.addEventListener('click', recordingstart)
const recogntion = new recon();
console.log(recogntion)
if (recon) {
    recogntion.continuous = false;
    recogntion.interimResults = true;
    recogntion.lang = "en-US";
    recogntion.maxAlternatives = 1;

    recogntion.onstart = function () {
        console.log("recongition is started")
    }

    recogntion.onresult = (event) => {
   
            const newText = event.results[event.results.length - 1][0].transcript;
            console.log("User said:", newText); 
           processcommand(newText);
    };

    recogntion.onspeechend = () => {
        recogntion.stop();
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

    if (normalizedCommand === "hello eco mind") {
        speak("hello! How can I assist you?");
    } 
    else if (normalizedCommand === "open youtube") {
        speak("Opening YouTube for you.");
        window.open("https://www.youtube.com", "_blank");
    } 
    else if (normalizedCommand === "open whatsapp") {
        speak("Opening WhatsApp for you.");
        window.open("https://www.whatsapp.com", "_blank");
    } 
    else if (normalizedCommand === "open linkedin") {
        speak("Opening linkedin for you.");
        window.open("https://www.linkedin.com", "_blank");
    } 
    else if (normalizedCommand === "open steam") {
        speak("Opening steam for you.");
        window.open("https://store.steampowered.com", "_blank");
    } 
    else if (normalizedCommand === "open telegram") {
        speak("Opening telegram for you.");
        window.open("https://web.telegram.org/a/", "_blank");
    } 
    else if (normalizedCommand === "open chatgpt") {
        speak("Opening chat gpt for you.");
        window.open("https://chatgpt.com/", "_blank");
    } 
    else if (normalizedCommand === "open ai tool") {
        speak("Opening ai tools for you.");
        window.open("https://topai.tools/top-100-ai-tools", "_blank");
    } 
    
}


function recordingstart() {
    recogntion.start();
}
