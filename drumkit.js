window.addEventListener('keydown', function(e) {

  //const for choosing the data-key
  //audio is the, data-key the attribute-selector, ${e.keyCode} = the keyCode binded to the functionparameter for the event
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const drumkey = document.querySelector(`.drumkey[data-key="${e.keyCode}"]`);
  //console.log(audio);
  //console.log(key);
  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0 //rewind(zurückspulen) the audio
  audio.play();
  drumkey.classList.add('playing');
});


//remove playing

//VARIANTE 1
const drumkeys = document.querySelectorAll('.drumkey');

function transitionEnd(e) {
  //console.log(e);
  if (e.propertyName !== 'transform') return; //skip if it's not a transform
  //console.log(e.propertyName);
  //console.log(this); -> this is eqaul to the key
  this.classList.remove('playing');
}
drumkeys.forEach(key => key.addEventListener('transitionend', transitionEnd));


//VARIANTE 2 -> ITs Working too

/*
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', () => {
  key.classList.remove('playing');
}));*/