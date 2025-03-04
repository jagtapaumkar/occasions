const events = [
    { id: "work", img: "img/Work+party+4.jpg", title: "Work Anniversaries", desc: "Celebrate your achievements and years of hard work." },
    { id: "promotion", img: "img/promotion.jpg", title: "Promotions", desc: "Celebrate career advancements and new opportunities." },
    { id: "teambuilding", img: "img/teambuilding.avif", title: "Team-building events", desc: "Strengthen teamwork and collaboration with fun activities." },
    { id: "companyretreats", img: "img/companyretreats.png", title: "Company retreats", desc: "Take a break to recharge and build better work connections." },
    { id: "productlaunch", img: "img/product-launch-events-salesforce-min.png", title: "Product launches", desc: "Celebrate the release of exciting new products." },
    { id: "endofyear", img: "img/office-end-party-.png", title: "End-of-year parties", desc: "Wrap up the year with festive celebrations and good cheer." },
    { id: "holidayoffice", img: "img/office-holiday.jpeg", title: "Holiday office parties", desc: "Celebrate the holidays together with your office family." },
    { id: "clientappreciation", img: "img/boss-congratulating-employee-in-front-of-others.webp", title: "Client appreciation events", desc: "Show gratitude to clients for their continued partnership." },
    { id: "awards", img: "img/award.jpg", title: "Awards and recognition ceremonies", desc: "Recognize achievements and milestones with prestigious awards." },
    { id: "projectcompletion", img: "img/business-team-celebrating-successful-project-completion_397889-8315.jpg", title: "Successful project completions", desc: "Celebrate the successful completion of major projects." }
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
