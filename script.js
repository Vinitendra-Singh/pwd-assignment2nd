function orderNowClicked() {
    alert("Your order has been placed successfully!");
}

function getCurrentDate() {
    const currentDate = new Date();
    return currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getDate();
}

console.log("Page loaded successfully!");

function displayWelcomeMessage() {
    const currentPage = window.location.pathname;

    if (currentPage === '/about-us.html') {
        alert('Welcome to Los Rey del Pollo! Learn more about us on the About Us page.');
    }

    if (currentPage.includes('menu.html')) {
        alert("Welcome to Los Rey del Pollo! Explore our delicious menu.");
    } else if (currentPage === '/contact.html') {
        alert('Welcome! Get in touch with us on the Contact Us page.');
    } else if (currentPage === '/clients.html') {
        alert('Welcome! Explore our variety of services.');
    } else if (currentPage === '/index.html') {
        alert('Welcome to Los Rey del Pollo! Check out our Home page.');
    }
}

function highlightSelectedMenu() {
    if (window.location.pathname.includes('menu.html')) {
        let menuLinks = document.querySelectorAll('.menu-option a');

        menuLinks.forEach(link => {
            if (window.location.href.includes(link.getAttribute('href'))) {
                link.classList.add('selected-menu');
            }
        });
    }
}

function handleFormSubmission(event) {
    if (window.location.pathname.includes('contact.html')) {
        event.preventDefault();
        alert("Thank you for your message! We will get back to you soon.");
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function displayCurrentTime() {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current Time: ${currentTime}`);
}

function displayCurrentLocation() {
    alert('Current Location: Los Rey del Pollo Restaurant, 9/42A Sunrise Public Complex, MK Mohan Road, New Delhi, 110044');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
}

document.addEventListener('DOMContentLoaded', displayRandomQuote);

document.addEventListener('DOMContentLoaded', function () {
    displayWelcomeMessage();
    highlightSelectedMenu();

    if (window.location.pathname.includes('contact.html')) {
        let contactForm = document.querySelector('form');
        if (contactForm) {
            contactForm.addEventListener('submit', handleFormSubmission);
        }
    }

    const darkModeButton = document.getElementById('darkModeButton');
    if (darkModeButton) {
        darkModeButton.addEventListener('click', toggleDarkMode);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    displayRandomQuote();
});

function displayRandomServiceTip() {
    const serviceTips = [
        "Did you know? Our home delivery service is available 24/7 for your convenience!",
        "Enjoy a full refund if your delivery is 45 minutes late. We value your time!",
        "Unlock a 50% discount on every 4th order. It's our way of saying thank you!"
    ];

    const randomIndex = Math.floor(Math.random() * serviceTips.length);
    alert(serviceTips[randomIndex]);
}

function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener('DOMContentLoaded', function () {
    const colorButton = document.getElementById('colorButton');

    if (colorButton) {
        colorButton.addEventListener('click', changeBackgroundColor);
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', function () {
    scrollToTop();
});

document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});
