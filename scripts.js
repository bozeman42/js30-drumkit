window.addEventListener('keypress',playSound);


function playSound(event) {
  let instrumentElement = document.getElementById(event.key.toLowerCase());
  if (instrumentElement){
    instrumentElement.setAttribute('class', 'instrument-box selected-instrument');
    setTimeout(() => {instrumentElement.setAttribute('class', 'instrument-box')},100);
    let instrument;
    switch (event.key.toLowerCase()) {
      case 'a':
        instrument = 'clap';
        break;
      case 's':
        instrument = 'boom';
        break;
      case 'd':
        instrument = 'hihat';
        break;
      case 'f':
        instrument = 'kick';
        break;
      case 'j':
        instrument = 'openhat';
        break;
      case 'k':
        instrument = 'ride';
        break;
      case 'l':
        instrument = 'snare';
        break;
      case ';':
        instrument = 'tink';
    }
    new Audio(`sounds/${instrument}.wav`).play();
  }
}