function Clock(element) {
    this.element = element;
    this.fullFormat = true;

    this.render = function () {
        if (this.fullFormat) {
            this.element.innerHTML = new Date().toTimeString().split(' ')[0];
        } else {
            this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0,5);
        }
    }

    this.changeFormat = function () {
        this.fullFormat = !this.fullFormat;
    }

    this.element.addEventListener('click', () => {
        this.changeFormat();
    });
}


let firstClock = new Clock(document.querySelector('.first_clock'));
setInterval(() => firstClock.render(), 1000);

let secondClock = new Clock(document.querySelector('.second_clock'));
setInterval(() => secondClock.render(), 1000);
secondClock.changeFormat();