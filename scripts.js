window.addEventListener('keypress', playSound);

window.addEventListener('load', (event) => {
  console.log(event.target.getElementById('a'));
})

function playSound(event) {
  let instrumentElement = document.getElementById(event.key.toLowerCase());
  if (instrumentElement) {
    instrumentElement.setAttribute('class', 'instrument-box selected-instrument');
    setTimeout(() => {
      instrumentElement.setAttribute('class', 'instrument-box')
    }, 100);
  }
  let instrument;
  switch (event.key.toLowerCase()) {
    case 'a':
      instrument = 'clap';
      break;
    case 's':
      instrument = 'hihat';
      break;
    case 'd':
      instrument = 'kick';
      break;
    case 'f':
      instrument = 'openhat';
      break;
    case 'g':
      instrument = 'boom';
      break;
    case 'h':
      instrument = 'ride';
      break;
    case 'j':
      instrument = 'snare';
      break;
    case 'k':
      instrument = 'tom';
      break;
    case 'l':
      instrument = 'tink';
      break;
  }
  new Audio(`sounds/${instrument}.wav`).play();
}
