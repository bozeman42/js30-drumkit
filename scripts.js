window.addEventListener('keypress',playSound);
const clapAddress = 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav';
const boomAddress = 'https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav';

function playSound(event) {
  let sound;
  let instrumentElement = document.getElementById(event.key.toLowerCase());
  if (instrumentElement){
    instrumentElement.setAttribute('class', 'instrument-box selected-instrument');
    setTimeout(() => {instrumentElement.setAttribute('class', 'instrument-box')},100);
    switch (event.key.toLowerCase()) {
      case 'a':
        sound = new Audio(clapAddress);
        sound.play();
        break;
      case 's':
        sound = new Audio(boomAddress);
        sound.play();
    }
  }
}