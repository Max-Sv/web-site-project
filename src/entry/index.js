const whiteVersion = document.querySelector('.entry__white');
const darkVersion = document.querySelector('.entry__dark');

whiteVersion.addEventListener('click', () => {
    location.assign('../home/index.html');
});
darkVersion.addEventListener('click', () => {
    location.assign('../home/index.html');
});

const bigLove = document.querySelector('.entry__big-love');

let angle = 0;
let x = 0;
let y = 0;
let bool = true;
bigLove.addEventListener('click', () => {
    setInterval(() => {

        bigLove.style.transform = `rotate(${angle}deg) translate(${x}px, ${-y}px)`;

        if(bool) {
            angle +=3;
            x += 5;
            y += 1;
        } else {
            angle +=3;
            x += 5;
            y -= 1;
        }

        if(angle > 90 && bool) {
            bool = false;
        }

        console.log(angle)
    }, 20);
});
