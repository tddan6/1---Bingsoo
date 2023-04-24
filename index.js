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


// const sr = ScrollReveal ({
//     distance: '65px',
//     duration: 2600,
//     delay: 450,
//     reset: true
// });

// sr.reveal('.landing-heading',{delay:200, origin:'top'});
// sr.reveal('.left-container p',{delay:450, origin:'top'});
// sr.reveal('.right-container',{delay:600, origin:'right'});
// sr.reveal('.secondary-content',{delay:800, origin:'left'});


