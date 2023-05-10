const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("#hacker-effect").onmouseover = event => {

    let iterations = 0;

    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if(index < iterations) {
                return event.target.dataset.value[index];
            }


            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

        if(iterations >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iterations += 1 / 3;

    }, 30);

      
}


const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: false
});

sr.reveal('.landing-heading',{delay:100, origin:'top'});
sr.reveal('.left-container p',{delay:350, origin:'top'});
sr.reveal('.coming-soon',{delay:400, origin:'top'});
sr.reveal('.right-container',{delay:500, origin:'right'});
sr.reveal('.secondary-content',{delay:700, origin:'left'});
sr.reveal('.fancy-text',{delay:600, origin:'left'});
sr.reveal('.polaroid-2',{delay:400, origin:'right'});
sr.reveal('.polaroid-1',{delay:500, origin:'left'});
sr.reveal('#note-1',{delay:500, origin:'top'});
sr.reveal('#note-2',{delay:550, origin:'top'});
sr.reveal('#note-3',{delay:600, origin:'top'});
sr.reveal('#note-4',{delay:650, origin:'top'});
sr.reveal('#note-5',{delay:700, origin:'top'});
sr.reveal('.bingsoo-sticker-1',{delay:800, origin:'right'});


