const events = [
    { id: "Valentine's Day", img: "img/Valentines day.webp", title: "Valentine's Day", desc: "A Day to Celebrate Love, Romance, and Cherished Connections!"},
    { id: "Mother's Day", img: "img/mothers day.jpg", title: "Mother's Day", desc: "A Heartfelt Tribute to the Women Who Make Our World Shine." },
    { id: "Father's Day", img: "img/fathers day image.jpg", title: "Father's Day", desc: "Honoring the Strength, Wisdom, and Love of Every Father." },
    { id: "Independence Day", img: "img/independence.png", title: "Independence Day", desc: "A Celebration of Freedom, Patriotism, and Unforgettable Memories!" },
    { id: "Halloween", img: "img/hall.jpg", title: "Halloween", desc: "Get Ready for Spells of Fun, Frights, and Fabulous Surprises!" },
    { id: "Labor Day", img: "img/labor day image.jpg", title: "Labor Day", desc: "Celebrating Hard Work, Dedication, and Well-Deserved Rest." },
    { id: "Veterans Day", img: "img/veterans image.jpg", title: "Veterans Day", desc: "Paying Tribute to the Heroes Who Served and Sacrificed for Our Freedom." },
    { id: "Earth Day", img: "img/earth image.jpg", title: "Earth Day", desc: "Join Us in Protecting Our Planet, One Small Step at a Time." },
    { id: "Midsummer Festival", img: "img/mid.avif", title: "Midsummer Festival", desc: "Celebrate the Magic of Summer with Joy, Music, and Nature's Beauty!" },
    { id: "Festival of Lights", img: "img/festival of lights image.webp", title: "Festival of Lights", desc: "Experience the Wonder of Lights, Culture, and Uniting Communities!" }
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
