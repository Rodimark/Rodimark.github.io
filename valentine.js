const messages = [
    "Would you like to reconsider?",
    "Perhaps take another moment to think?",
    "I'm quite certain you meant to click the other button",
    "Your cursor seems to have slipped",
    "Let's pretend that didn't happen",
    "This could be the start of something special",
    "I promise there's chocolate involved",
    "What if I told you there's a surprise?",
    "You're breaking my penguin heart 💔",
    "One last chance to make the right choice? 🎀",
    "I've practiced my dance moves just for this",
    "Did I mention I'm great at making coffee?",
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no');
    const yesButton = document.querySelector('.yes');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick(){
    window.location.href="yes.html";
    
}

