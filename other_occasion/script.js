const events = [
    { id: "musicevents", img: "img/musicevent.avif", title: "Music Events", desc: "Embrace the chill vibes of melodic coolness" },
    { id: "flimfestival", img: "img/flim.jpeg", title: "Flim Festival", desc: "Experience the extraordinary on screen." },
    { id: "sportingevents", img: "img/sporting.webp", title: "Sporting Events", desc: "A short, memorable phrase that summarizes the event and encourages people to attend." },
    { id: "carnivalandfairs", img: "img/carnival.avif", title: "Carnival And Fairs", desc: "Where unforgettable memories come to life" },
    { id: "internationalteachersday", img: "img/teacher.jpeg", title: "International Teacher's Day", desc: "Mentors who inspire, guide, and shape our future" },
    { id: "nationaldogsday", img: "img/dog.jpg", title: "National Dogs Day", desc: "The love, loyalty, and pawsome joy of our furry friends." },
    { id: "internationalwomensday", img: "img/women.avif", title: "International Women's Day", desc: "Empowering and celebrating the strength of every woman." },
    { id: "worldenviornmentday", img: "img/enviornment.jpeg", title: "World Enviornment Day", desc: "Celebrate milestones in your journey together." },
    { id: "internationalpeaceday", img: "img/peace.jpeg", title: "International Peace Day", desc: "Spreading kindness, unity, and harmony for a world at peace." },
    { id: "pridemonthevent", img: "img/prides.jpeg", title: "Pride Month Event", desc: "It's always wrong to hate, but it's never wrong to love" }
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
                <a href="event.html?type=${event.id}" class="card__button">Explore</a>
            </div>
        </article>
    `;
}

// Generate and append event cards dynamically
events.forEach(event => {
    const card = createEventCard(event);
    eventContainer.innerHTML += card;
});


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
