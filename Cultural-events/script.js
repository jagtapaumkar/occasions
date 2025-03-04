const events = [
    { id: "Makar Sankranti", img: "images/events/makar-sankrant1.jpg", title: "Makar Sankranti", desc: "A harvest festival celebrated with kites, sweets, and prayers for prosperity." },
    { id: "Mahashivaratri", img: "images/events/shivratri.jpg", title: "Mahashivaratri", desc: "A sacred night devoted to Lord Shiva, marked by fasting, prayers, and meditation." },
    { id: "Janmashtami", img: "images/events/janmashtami1.jpg", title: "Janmashtami", desc: "Celebrates Lord Krishna’s birth with fasting, devotional songs, and joyful cultural events." },
    { id: "Ganesh Chaturthi", img: "images/events/ganesh.jpg", title: "Ganesh Chaturthi", desc: "Honors Lord Ganesha with vibrant decorations, prayers, and grand idol immersion processions." },
    { id: "Navaratri", img: "images/events/navratri.jpg", title: "Navaratri", desc: "Nine days of devotion with prayers, fasting, and energetic Garba and Dandiya dances." },
    { id: "Dussehra", img: "images/events/dussehara3.jpg", title: "Dussehra", desc: "Celebrates good’s victory over evil with Ramlila plays and Ravana effigy burnings." },
    { id: "Diwali", img: "images/events/diwali1.jpg", title: "Diwali", desc: "Festival of lights celebrated with diyas, sweets, and prayers for happiness and success." },
    { id: "New Year’s Day", img: "images/events/new year.jpg", title: "New Year’s Day", desc: "New Year’s Day marks the start of a fresh calendar year with celebrations and resolutions." },
    { id: "Christmas", img: "images/events/chirstmus.jpg", title: "Christmas", desc: "Christmas celebrates the birth of Jesus Christ with joy, carols, and gift-giving." },
    //{ id: "Hanukkah", img: "images/events/hanukah.jpg", title: "Hanukkah", desc: "Hanukkah is the Jewish Festival of Lights, celebrated with menorahs, prayers, and special foods." },
    //{ id: "Eid al-Fitr", img: "images/events/eid a.jpg", title: "Eid al-Fitr", desc: "Eid al-Fitr marks the end of Ramadan with feasts, prayers, and acts of charity" },
    { id: "Lunar New Year", img: "images/events/LUNAR1.jpg", title: "Lunar New Year", desc: "The Lunar New Year celebrates new beginnings with family reunions, feasts, and traditions." },
    { id: "Thanksgiving", img: "images/events/thanksgiving4.jpg", title: "Thanksgiving", desc: "Thanksgiving is a day to express gratitude with feasts, family gatherings, and festive joy." },
    //{ id: "Eid al-Adha", img: "images/events/eid-el-fitr.jpg", title: "Eid al-Adha", desc: "Eid al-Adha honors the spirit of sacrifice with prayers, feasts, and charity." },
    { id: "Ramadan", img: "images/events/RAMDAN1.jpg", title: "Ramadan", desc: "Ramadan is a month of fasting, prayer, and reflection for Muslims worldwide." },
];

// Select the container
const eventContainer = document.getElementById("event-container");

// Template for card creation
function createEventCard(event) {
    return `
        <article class="card">
            <img class="card__background" src="${event.img}" alt="${event.title}" width="1920" height="2193" />
            <div class="card__content flow">
                <div class="card__content--container flow">
                    <h2 class="card__title">${event.title}</h2>
                    <p class="card__description">${event.desc}</p>
                </div>
                <a href="event.html?type=${event.id}" class="card__button">Read more</a>
            </div>
        </article>
    `;
}

//vendor register
// Generate and append event cards dynamically
events.forEach(event => {
    const card = createEventCard(event);
    eventContainer.innerHTML += card;
});
// When the form is submitted
document.getElementById('vendorRegistrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Optionally, you can add form validation here

    // Show the success modal
    var myModal = new bootstrap.Modal(document.getElementById('successModal'));
    myModal.show();

    // Optionally, clear the form after submission
    document.getElementById('vendorRegistrationForm').reset();
});

//planosaurus
// JavaScript for handling the registration button click
document.querySelector('#registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Hide the registration modal
    var myModal = new bootstrap.Modal(document.getElementById('registerModal'));
    myModal.hide();
    
    // Show the success modal
    var successModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
    successModal.show();
});

// login form popup
// Open the login popup
function openModal() {
    document.getElementById("popupForm").style.display = "flex";
}

// Close the login popup
function closeModal() {
    document.getElementById("popupForm").style.display = "none";
}

// Show Forgot Password Form
function showForgotPassword() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("forgotPasswordForm").style.display = "block";
}

// Show Register Form
function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
}

// Show Login Form
function showLoginForm() {
    document.getElementById("forgotPasswordForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}
