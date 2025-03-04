const events = [
    { id: "wedding", img: "img/int.png", title: "Wedding", desc: "Celebrate your love with a perfect wedding ceremony." },
    { id: "engagement", img: "img/de.jpg", title: "Engagement", desc: "Mark the beginning of your journey together." },
    { id: "retirement", img: "img/retirement.jpg", title: "Retirement Parties", desc: "A grand farewell to an incredible career." },
    { id: "housewarming", img: "img/house-warming.jpg", title: "Housewarming Parties", desc: "Bless your new home with love and joy." },
    { id: "birthday", img: "img/bdg.jpg", title: "Birthday Parties", desc: "Make birthdays unforgettable with a special celebration." },
    { id: "graduation", img: "img/corpo.jpg", title: "Graduation", desc: "Honor achievements and new beginnings with a joyful event." },
    { id: "babyShower", img: "img/bs.jpeg", title: "Baby Shower", desc: "Welcome the newest family member with love." },
    { id: "anniversaries", img: "img/anni.jpg", title: "Anniversaries", desc: "Celebrate milestones in your journey together." },
    { id: "comingOfAge", img: "img/com.jpg", title: "Coming-of-age Ceremonies", desc: "A special event marking life’s important transitions." },
    { id: "divorce", img: "img/divvv.jpg", title: "Divorce Parties", desc: "A fresh start, celebrated with friends and laughter." }
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
