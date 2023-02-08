const playSound = (path)=>{
    const sound = new Audio(path)
    sound.play()
}

const playClapSound = ()=>{
    const sound = new Audio('./drums/'+currentClap+'.wav')
    sound.play()
}
const playHatsSound = ()=>{
    const sound = new Audio('./drums/'+currentHats+'.wav')
    sound.play()
}
const playKickSound = ()=>{
    const sound = new Audio('./drums/'+currentKick+'.wav')
    sound.play()
}
const playSnareSound = ()=>{
    const sound = new Audio('./drums/'+currentSnare+'.wav')
    sound.play()
}
const playPercSound = ()=>{
    const sound = new Audio('./drums/'+currentPerc +'.wav')
    sound.play()
}
const playTronSound = ()=>{
    const sound = new Audio('./drums/tron.wav')
    sound.play()
}

const addClickEvent  = (selector,callback)=>{
    selector.addEventListener('click',()=>{
        callback()
    })
}

const clap = document.getElementById('clap')
const hats = document.getElementById('hats')
const kick = document.getElementById('kick')
const snare = document.getElementById('snare')
const perc = document.getElementById('perc')
const tron = document.getElementById('tron')

currentClap = 'clap-7';
currentHats = 'hats-4';
currentKick = 'kick-3';
currentSnare = 'snare-5';
currentPerc = 'perc-2';

addClickEvent(clap,playClapSound);
addClickEvent(hats,playHatsSound);
addClickEvent(kick,playKickSound);
addClickEvent(snare,playSnareSound);
addClickEvent(perc,playPercSound);
addClickEvent(tron,playTronSound);

const clapHandler = (e)=>{
    document.querySelectorAll('.clap-button').forEach(function(button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("clapform"));
    var clapValue = form.get("clap");
    currentClap = clapValue
}
const snareHandler = (e)=>{
    document.querySelectorAll('.snare-button').forEach(function(button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("snareform"));
    var snareValue = form.get("snare");
    currentSnare = snareValue
}

const kickHandler = (e)=>{
    document.querySelectorAll('.kick-button').forEach(function(button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("kickform"));
    var kickValue = form.get("kick");
    currentKick = kickValue
}

const percHandler = (e)=>{
    document.querySelectorAll('.perc-button').forEach(function(button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("percform"));
    var percValue = form.get("perc");
    currentPerc = percValue
}

const hatsHandler = (e)=>{
    document.querySelectorAll('.hats-button').forEach(function(button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("hatsform"));
    var hatsValue = form.get("hats");
    currentHats = hatsValue
}

document.onkeyup = function(e) {
    if (e.key == 'a' || e.key == 'A') {
      clap.click();
      clap.classList.add('active-instrument')
      setTimeout(() => {
        clap.classList.remove('active-instrument')
      }, 100);
    } 
    else if (e.key == 's' || e.key == 'S') {
      hats.click();
      hats.classList.add('active-instrument')
      setTimeout(() => {
        hats.classList.remove('active-instrument')
      }, 100);
    } 
    else if (e.key == 'd' || e.key == 'D') {
      kick.click();
      kick.classList.add('active-instrument')
      setTimeout(() => {
        kick.classList.remove('active-instrument')
      }, 100);
    } 
    else if (e.key == 'z' || e.key == 'Z') {
      snare.click();
      snare.classList.add('active-instrument')
      setTimeout(() => {
        snare.classList.remove('active-instrument')
      }, 100);
    } 
    else if (e.key == 'x' || e.key == 'X') {
      perc.click();
      perc.classList.add('active-instrument')
      setTimeout(() => {
        perc.classList.remove('active-instrument')
      }, 100);
    } 
    else if (e.key == 'c' || e.key == 'C') {
      tron.click();
      tron.classList.add('active-instrument')
      setTimeout(() => {
        tron.classList.remove('active-instrument')
      }, 100);
    } 
  };