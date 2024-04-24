document.addEventListener("DOMContentLoaded", function() {
    let words = document.querySelectorAll(".word");
    words.forEach((word) => {
        let letters = word.textContent.split(" ");
        word.textContent = "";
        letters.forEach((letter) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.className = "letter";
            word.append(span);
        });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;

    let changeText = () => {
        let currentWord = words[currentWordIndex];
        let nextWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        let nextWord = words[nextWordIndex];

        Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
                letter.className = "letter out";
            }, i * 80);
        });

        setTimeout(() => {
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });
        }, 1000); // Tiempo de espera antes de que aparezcan las nuevas letras

        currentWordIndex = nextWordIndex;
    };

    changeText();
    setInterval(changeText, 3000);
});
