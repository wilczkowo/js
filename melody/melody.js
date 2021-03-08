class Melody {
    constructor() {
        this.tempo = 150;
    }

    playSound(htmlElement) {
        if (htmlElement.classList.contains('active')) {
            if (htmlElement.classList.contains('kick-pad')) {
                document.querySelector('.kick-sound').currentTime = 0;
                document.querySelector('.kick-sound').play();
            }
            if (htmlElement.classList.contains('snare-pad')) {
                document.querySelector('.snare-sound').currentTime = 0;
                document.querySelector('.snare-sound').play();
            }
            if (htmlElement.classList.contains('hihat-pad')) {
                document.querySelector('.hihat-sound').currentTime = 0;
                document.querySelector('.hihat-sound').play();
            }
        }
    }

    repeat(bitsPerMinute) {


        let index = 0;
        this.padInterval = setInterval(() => {
            let activeBars = document.querySelectorAll(`.b${index}`)
            activeBars.forEach(pad => {
                pad.style.animation = 'playTrack 0.3s alternate ease-in-out 2'
                pad.addEventListener('animationend', (e) => e.target.style.animation = '');
                this.playSound(pad);
            });


            index++;
            index = index === 8 ? 0 : index;
        }, 60000 / bitsPerMinute);

    }

    playMusic(classNameOfButton) {
        let button = document.querySelector(classNameOfButton);
        button.addEventListener('click', () => {

            if (button.innerText === 'Stop') {
                console.log('ala');
                clearInterval(this.padInterval);
                button.innerText = 'Play';
                return;
            }


            if (button.innerText === 'Play') {
                this.repeat(this.tempo);
                button.innerText = 'Stop';
            }

        })
    }

    ActivePad(event) {
        event.target.classList.toggle('active');
    }

    getTempoFromSlider(tempo, event) {
        event.target.parentElement.querySelector("span").innerText = tempo;
        this.tempo = tempo;
        clearInterval(this.padInterval);
        this.repeat(this.tempo);
    }

}

let melody = new Melody();

melody.playMusic('.play');




























