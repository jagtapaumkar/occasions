// Events data with specific vendors for each event type
const events = [
    {
        id: "wedding",
        img: "img/int.png",
        title: "Wedding",
        desc: "Celebrate your love with a perfect wedding ceremony.",
        vendors: [
            { img: "img/mkup.jpg", title: "Makeup Artists", desc: "Stunning makeup for your special day.", link: "#" },
            { img: "img/p4.jpg", title: "Photographers", desc: "Browse galleries to find your perfect vibe.", link: "#" },
            { img: "img/venue.mp4", title: "Venues", desc: "Wedding locations you never knew existed.", link: "#" },
            { img: "img/de.jpg", title: "Decorators", desc: "Expert decorations to light up your occasion.", link: "#" },
            { img: "img/dress.jpg", title: "Wedding Wear", desc: "Explore stunning wedding attire collections.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Diverse selection of dishes for every palate.", link: "#" }
        ]
    },
    {
        id: "engagement",
        img: "img/engagement.jpg",
        title: "Engagement",
        desc: "Celebrate your commitment with an unforgettable engagement ceremony.",
        vendors: [
            { img: "img/mkup.jpg", title: "Makeup Artists", desc: "Special engagement makeup for a radiant look.", link: "#" },
            { img: "img/p4.jpg", title: "Photographers", desc: "Capture the magic of your engagement day.", link: "#" },
            { img: "img/ring.jpg", title: "Ring Designers", desc: "Custom-designed rings to mark your engagement.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Engagement-friendly catering for a perfect celebration.", link: "#" },
            { img: "img/de.jpg", title: "Decorators", desc: "Beautiful decor to complement your engagement day.", link: "#" },
            { img: "img/dress.jpg", title: "Engagement Wear", desc: "Find your perfect engagement outfit.", link: "#" }
        ]
    },
    {
        id: "retirement",
        img: "img/retirement.jpg",
        title: "Retirement Parties",
        desc: "Celebrate the achievements and milestones of a successful career.",
        vendors: [
            { img: "img/boss.jpg", title: "Speakers", desc: "Motivational speakers to celebrate achievements.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Delicious catering for your retirement celebration.", link: "#" },
            { img: "img/de.jpg", title: "Decorators", desc: "Stylish and professional decorations for your party.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture the best moments of your retirement party.", link: "#" },
            { img: "img/venue.mp4", title: "Venues", desc: "Select a perfect venue for your retirement party.", link: "#" }
        ]
    },
    {
        id: "housewarming",
        img: "img/housewarming.jpg",
        title: "Housewarming Parties",
        desc: "Welcome friends and family to your new home with a warm celebration.",
        vendors: [
            { img: "img/de.jpg", title: "Interior Designers", desc: "Design your dream home with expert designers.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Catering services for your housewarming celebration.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture memories in your new home.", link: "#" },
            { img: "img/venue.mp4", title: "Venues", desc: "Find the best venues for your housewarming party.", link: "#" }
        ]
    },
    {
        id: "birthday",
        img: "img/birthday-party.jpg",
        title: "Birthday Parties",
        desc: "Celebrate another year with fun, laughter, and cake.",
        vendors: [
            { img: "img/birthday-cake.jpg", title: "Cake Designers", desc: "Get the most creative and delicious birthday cakes.", link: "#" },
            { img: "img/mkup.jpg", title: "Makeup Artists", desc: "Flawless makeup to celebrate your special day.", link: "#" },
            { img: "img/de.jpg", title: "Decorators", desc: "Create a fun and festive atmosphere for the birthday party.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Amazing catering to delight every guest at your birthday.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture every fun moment from your birthday party.", link: "#" }
        ]
    },
    {
        id: "graduation",
        img: "img/graduation.jpg",
        title: "Graduation",
        desc: "Celebrate your academic achievements with friends and family.",
        vendors: [
            { img: "img/school.jpg", title: "Graduation Caps & Gowns", desc: "High-quality caps and gowns for your graduation.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Celebrate with delicious catering for your graduation party.", link: "#" },
            { img: "img/de.jpg", title: "Decorators", desc: "Elegant decorations for your graduation ceremony.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture your proudest graduation moments.", link: "#" }
        ]
    },
    {
        id: "babyShower",
        img: "img/baby-shower.jpg",
        title: "Baby Shower",
        desc: "Celebrate the upcoming arrival of your little one with family and friends.",
        vendors: [
            { img: "img/baby-gifts.jpg", title: "Gift Designers", desc: "Personalized gifts for the new baby.", link: "#" },
            { img: "img/de.jpg", title: "Decorators", desc: "Decorate with love for the arrival of the baby.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Catering with delicious and baby-friendly options.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture the special moments from the baby shower.", link: "#" }
        ]
    },
    {
        id: "anniversaries",
        img: "img/anniversary.jpg",
        title: "Anniversaries",
        desc: "Celebrate your years of love and commitment with a memorable event.",
        vendors: [
            { img: "img/decor.jpg", title: "Decorators", desc: "Celebrate love with anniversary decor.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Catering to make your anniversary celebration memorable.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture timeless moments from your anniversary event.", link: "#" },
            { img: "img/mkup.jpg", title: "Makeup Artists", desc: "Get glammed up for your anniversary celebration.", link: "#" }
        ]
    },
    {
        id: "comingOfAge",
        img: "img/coming-of-age.jpg",
        title: "Coming-of-age Ceremonies",
        desc: "Mark the transition from childhood to adulthood with a grand ceremony.",
        vendors: [
            { img: "img/de.jpg", title: "Decorators", desc: "Create a memorable coming-of-age atmosphere.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Catering services to complement your coming-of-age celebration.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture this important moment in your life.", link: "#" },
            { img: "img/dress.jpg", title: "Special Wear", desc: "Find the perfect outfit for your coming-of-age event.", link: "#" }
        ]
    },
    {
        id: "divorce",
        img: "img/divorce-party.jpg",
        title: "Divorce Parties",
        desc: "Celebrate a fresh start with a liberating divorce party.",
        vendors: [
            { img: "img/divorce-party.jpg", title: "Party Planners", desc: "Plan a fun and liberating celebration after divorce.", link: "#" },
            { img: "img/cater.mp4", title: "Caterers", desc: "Food to suit every guest at your fresh start party.", link: "#" },
            { img: "img/de.jpg", title: "Decorators", desc: "Decorate for a joyful and fresh beginning.", link: "#" },
            { img: "img/photographer.jpg", title: "Photographers", desc: "Capture the fun moments of your celebration.", link: "#" }
        ]
    },
       
    
    // Add more events as needed...
];

// Get the event type from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('type'); // This will get the event type (e.g., 'wedding', 'birthday')

// Find the matching event from the array
const event = events.find(e => e.id === eventId);

if (event) {
    // Set the event title dynamically in the page
    document.querySelector("h1").innerHTML = `Handpick the finest vendors to craft your dream <span class="red-text">${event.title}</span>`;
    
    // Set the breadcrumb dynamically
    document.querySelector(".breadcrumb-item.active").textContent = event.title;

    // Set the vendor categories section
    // const vendorCategories = document.getElementById('vendor-categories');
    // vendorCategories.innerHTML = `
    //     <h3>Find the Best Vendors for Your ${event.title}</h3>
    //     <p>${event.desc}</p>
    // `;
    
    // Set the event-specific vendor categories
    const vendorContainer = document.getElementById('vendor-container');
    event.vendors.forEach(vendor => {
        const card = document.createElement("div");
        card.classList.add("col-md-3", "mb-4");
        card.innerHTML = `
            <div class="vendor-card">
                <img src="${vendor.img}" alt="${vendor.title}">
                <h4>${vendor.title}</h4>
                <p>${vendor.desc}</p>
                 <a href="vendor.html?vendor=${encodeURIComponent(vendor.link)}">Explore</a>
            </div>
        `;
        vendorContainer.appendChild(card);
    });
} else {
    // Handle the case where the event type does not exist in the events array
    document.querySelector("main").innerHTML = "<h2>Event Not Found</h2>";
}

// Show More/Show Less functionality for vendor section
document.addEventListener("DOMContentLoaded", function () {
    const hiddenContent = document.getElementById("hidden-content");
    const showMoreArrow = document.getElementById("show-more-arrow");

    showMoreArrow.addEventListener("click", function () {
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "flex"; // Make it visible
            showMoreArrow.classList.remove("bi-arrow-down-circle-fill");
            showMoreArrow.classList.add("bi-arrow-up-circle-fill"); // Change arrow direction
        } else {
            hiddenContent.style.display = "none"; // Hide it again
            showMoreArrow.classList.remove("bi-arrow-up-circle-fill");
            showMoreArrow.classList.add("bi-arrow-down-circle-fill"); // Reset arrow
        }
    });
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
