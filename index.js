const clap = document.getElementById('clap')
const hats = document.getElementById('hats')
const kick = document.getElementById('kick')
const snare = document.getElementById('snare')
const perc = document.getElementById('perc')
const tron = document.getElementById('tron')

const playSound = (path) => {
    const sound = new Audio(path)
    sound.play()
}

const makeActive = (selector) =>{
    selector.classList.add('active-instrument')
    setTimeout(() => {
       selector.classList.remove('active-instrument')
    }, 100);
}

const playClapSound = () => {
    makeActive(clap)
    const sound = new Audio('./drums/' + currentClap + '.wav')
    sound.play()
}
const playHatsSound = () => {
    makeActive(hats)
    const sound = new Audio('./drums/' + currentHats + '.wav')
    sound.play()
}
const playKickSound = () => {
    makeActive(kick)
    const sound = new Audio('./drums/' + currentKick + '.wav')
    sound.play()
}
const playSnareSound = () => {
    makeActive(snare)
    const sound = new Audio('./drums/' + currentSnare + '.wav')
    sound.play()
}
const playPercSound = () => {
    makeActive(perc)
    const sound = new Audio('./drums/' + currentPerc + '.wav')
    sound.play()
}
const playTronSound = () => {
    makeActive(tron)
    const sound = new Audio('./drums/tron.wav')
    sound.play()
}

const addClickEvent = (selector, callback) => {
    selector.addEventListener('click', () => {
        callback()
    })
}

currentClap = 'clap-7';
currentHats = 'hats-4';
currentKick = 'kick-3';
currentSnare = 'snare-5';
currentPerc = 'perc-2';

addClickEvent(clap, playClapSound);
addClickEvent(hats, playHatsSound);
addClickEvent(kick, playKickSound);
addClickEvent(snare, playSnareSound);
addClickEvent(perc, playPercSound);
addClickEvent(tron, playTronSound);

const clapHandler = (e) => {
    document.querySelectorAll('.clap-button').forEach(function (button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("clapform"));
    var clapValue = form.get("clap");
    currentClap = clapValue
}
const snareHandler = (e) => {
    document.querySelectorAll('.snare-button').forEach(function (button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("snareform"));
    var snareValue = form.get("snare");
    currentSnare = snareValue
}

const kickHandler = (e) => {
    document.querySelectorAll('.kick-button').forEach(function (button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("kickform"));
    var kickValue = form.get("kick");
    currentKick = kickValue
}

const percHandler = (e) => {
    document.querySelectorAll('.perc-button').forEach(function (button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("percform"));
    var percValue = form.get("perc");
    currentPerc = percValue
}

const hatsHandler = (e) => {
    document.querySelectorAll('.hats-button').forEach(function (button) {
        button.classList.remove('active')
    });
    e.srcElement.labels[0].classList.add('active')
    var form = new FormData(document.getElementById("hatsform"));
    var hatsValue = form.get("hats");
    currentHats = hatsValue
}

document.onkeyup = function (e) {
    if (e.key == 'a' || e.key == 'A') {
        clap.click();
        makeActive(clap)
    }
    else if (e.key == 's' || e.key == 'S') {
        hats.click();
        makeActive(hats)

    }
    else if (e.key == 'd' || e.key == 'D') {
        kick.click();
        makeActive(kick)
    }
    else if (e.key == 'z' || e.key == 'Z') {
        snare.click();
        makeActive(snare)
    }
    else if (e.key == 'x' || e.key == 'X') {
        perc.click();
        makeActive(perc)
    }
    else if (e.key == 'c' || e.key == 'C') {
        tron.click();
        makeActive(tron)
    }
};

const song1 = ['a', 's', 'd', 'a', 's', 'd']
const song2 = ['x', 's', 'x', 's', 'x', 'v']
const song3 = ['z', 'a', 'z', 'z', 'a', 's']
const song4 = ['s', 'a', 'c', 'z', 'a', 'd']

instruments = [clap,hats,kick,snare,perc,tron]
var interval;
var paused = true;
document.querySelector('.select-form').addEventListener('submit', async function (e) {
    e.preventDefault()
    if(!paused){
        document.querySelector('.play-button img').src = 'play.png'
        paused = true
        clearInterval(interval)
        return
    }else{
        document.querySelector('.play-button img').src = 'pause.png'
    }
    paused = !paused
    if(interval) clearInterval(interval)

    var song = document.querySelector('#song-select').value
    var currentSong = song1
    switch (song) {
        case 'song-1': currentSong = song1;
            break;
        case 'song-2': currentSong = song2;
            break;
        case 'song-3': currentSong = song3;
            break;
        case 'song-4': currentSong = song4;
            break;
    }

    var idx = 0
    interval = setInterval(()=>{
        var note = currentSong[idx%currentSong.length]
        switch (note) {
            case 'a': index = 0;
                break;
            case 's': index = 1;
                break;
            case 'd': index = 2;
                break;
            case 'z': index = 3;;
                break;
            case 'x': index = 4;
                break;
            case 'c': index = 5;
                break;
        }

        var currentInstrument = instruments[index]
        currentInstrument.click();
        idx++;
        currentInstrument.classList.add('active-instrument')
        setTimeout(() => {
                currentInstrument.classList.remove('active-instrument')
        }, 100);
    },500)

})

const clapConfig = (e)=>{
    e.stopImmediatePropagation();
    let myModal = new bootstrap.Modal(document.getElementById('clapModal'), {});
    myModal.show();
}

const snareConfig = (e)=>{
    e.stopImmediatePropagation();
    let myModal = new bootstrap.Modal(document.getElementById('snareModal'), {});
    myModal.show();
}

const kickConfig = (e)=>{
    e.stopImmediatePropagation();
    let myModal = new bootstrap.Modal(document.getElementById('kickModal'), {});
    myModal.show();
}

const percConfig = (e)=>{
    e.stopImmediatePropagation();
    let myModal = new bootstrap.Modal(document.getElementById('percModal'), {});
    myModal.show();
}

const hatsConfig = (e)=>{
    e.stopImmediatePropagation();
    let myModal = new bootstrap.Modal(document.getElementById('hatsModal'), {});
    myModal.show();
}
