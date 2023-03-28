import { CountUp } from './countUp.js';

window.onload = function () {
    let counters = document.querySelectorAll('.js-counter');

    counters.forEach((counter) => {
        let counterNumber = counter.textContent;
        const options = {
            duration: 4,
        };

        var numAnim = new CountUp(counter, counterNumber, options);
        numAnim.start()
    })

    // let myTarget = document.querySelector('#test');
    // var numAnim = new CountUp(myTarget, 25);
    // numAnim.start()
}