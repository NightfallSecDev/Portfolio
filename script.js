document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const words = [ "Developer  ", 
        "Ethical Hacker  ", 
        "Pentester  ", 
        "Cybersecurity Expert  ",  
        "Cybersecurity Researcher  ", 
        "Linux Security Specialist  ", 
        "Web Security Professional  ", 
        "Cloud & API Pentester  ", 
        "Network Security Analyst  ", 
        "Red Team Specialist  "
        , "Cybersecurity Research  "
    ];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const textElement = document.getElementById("changing-text");

    const typingSpeed = 50;  // Typing speed (lower is faster)
    const deletingSpeed = 30; // Deleting speed (lower is faster)
    const pauseTime = 2500;   // Pause time before deleting (longer for longer pause)
    const nextWordDelay = 1000; // Delay before typing next word

    function typeEffect() {
        let currentWord = words[index];

        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex--);
        } else {
            textElement.textContent = currentWord.substring(0, charIndex++);
        }

        textElement.style.opacity = "1"; // Fade in

        let speed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
            speed = pauseTime; // Pause before deleting
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % words.length; // Move to next word
            speed = nextWordDelay; // Pause before typing next word
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
