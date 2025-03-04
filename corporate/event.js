// Events data with specific vendors for each event type
const events = [
    {
        id: "work",
        img: "img/work_anniversary.jpg",
        title: "Work Anniversaries",
        desc: "Celebrate your achievements and years of hard work.",
        vendors: [
            { name: "Decoration", img: "img/decoration.jpeg", desc: "Unique decorations for your event" },
            { name: "Drinks", img: "img/drinks.jpeg", desc: "Beverages and drink vendors" },
            { name: "Gifts", img: "img/gift.jpg", desc: "Gift & memento vendors" },
            { name: "Music", img: "img/mic.jpg", desc: "Live DJ and mic setup" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Professional photography services" }
        ]
    },
    {
        id: "promotion",
        img: "img/promotion.jpg",
        title: "Promotions",
        desc: "Celebrate career advancements and new opportunities.",
        vendors: [
            { name: "Venue", img: "img/venue.jpg", desc: "Venue for your promotion party" },
            { name: "Catering", img: "img/catering.jpg", desc: "Delicious catering options for your celebration" },
            { name: "Music & Entertainment", img: "img/music-entertainment.jpg", desc: "Entertainment and music for the event" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Capture the joy and success of the event" },
            { name: "Gift Bags", img: "img/gift-bags.jpg", desc: "Gift bags for the promoted team members" }
        ]
    },
    {
        id: "teambuilding",
        img: "img/teambuilding.avif",
        title: "Team-building events",
        desc: "Strengthen teamwork and collaboration with fun activities.",
        vendors: [
            { name: "Activity Facilitators", img: "img/team-building-activity.jpg", desc: "Facilitators to guide your activities" },
            { name: "Catering", img: "img/catering.jpg", desc: "Catering services for meals and snacks" },
            { name: "Transport", img: "img/transport.jpg", desc: "Transport services for the team" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Capture memories with professional photos" },
            { name: "Entertainment", img: "img/music-entertainment.jpg", desc: "Music and games for entertainment" }
        ]
    },
    {
        id: "companyretreats",
        img: "img/companyretreats.png",
        title: "Company retreats",
        desc: "Take a break to recharge and build better work connections.",
        vendors: [
            { name: "Venue", img: "img/venue.jpg", desc: "Location for the retreat" },
            { name: "Catering", img: "img/catering.jpg", desc: "Meal and drink services" },
            { name: "Transportation", img: "img/transport.jpg", desc: "Travel arrangements for everyone" },
            { name: "Team Building", img: "img/team-building-activity.jpg", desc: "Facilitators for team-building exercises" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Capture the moments of your retreat" }
        ]
    },
    {
        id: "productlaunch",
        img: "img/product-launch-events-salesforce-min.png",
        title: "Product launches",
        desc: "Celebrate the release of exciting new products.",
        vendors: [
            { name: "Product Display", img: "img/product-display.jpg", desc: "Stand and display for your product" },
            { name: "Catering", img: "img/catering.jpg", desc: "Catering for guests and media" },
            { name: "Press Coverage", img: "img/press.jpg", desc: "Media and press event coordination" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Professional photography for your launch" },
            { name: "Video Production", img: "img/video-production.jpg", desc: "Video production for promotional materials" }
        ]
    },
    {
        id: "endofyear",
        img: "img/office-end-party-.png",
        title: "End-of-year parties",
        desc: "Wrap up the year with festive celebrations and good cheer.",
        vendors: [
            { name: "Decorations", img: "img/decoration.jpeg", desc: "Set the right mood with decorations" },
            { name: "Catering", img: "img/catering.jpg", desc: "Delicious meals and snacks for everyone" },
            { name: "DJ", img: "img/mic.jpg", desc: "Music and entertainment for your party" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Capture the fun moments" },
            { name: "Party Favors", img: "img/gift.jpg", desc: "Memorable gifts for your guests" }
        ]
    },
    {
        id: "holidayoffice",
        img: "img/office-holiday.jpeg",
        title: "Holiday office parties",
        desc: "Celebrate the holidays together with your office family.",
        vendors: [
            { name: "Decorations", img: "img/decorartion.jpeg", desc: "Christmas and holiday decorations" },
            { name: "Catering", img: "img/catering.jpg", desc: "Festive meal options" },
            { name: "DJ", img: "img/dj.jpg", desc: "Holiday music and party entertainment" },
            { name: "Gift Wrapping", img: "img/gift.jpg", desc: "Gift wrapping services for your guests" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Capture holiday moments" }
        ]
    },
    {
        id: "clientappreciation",
        img: "img/boss-congratulating-employee-in-front-of-others.webp",
        title: "Client appreciation events",
        desc: "Show gratitude to clients for their continued partnership.",
        vendors: [
            { name: "Venue", img: "img/venue.jpg", desc: "Location for your appreciation event" },
            { name: "Gifts", img: "img/gift.jpg", desc: "Handpicked gifts for your clients" },
            { name: "Catering", img: "img/catering.jpg", desc: "Catering for your event" },
            { name: "Event Coordinator", img: "img/event-coordinator.jpg", desc: "Professional event coordination services" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Capture the moments of appreciation" }
        ]
    },
    {
        id: "awards",
        img: "img/award.jpg",
        title: "Awards and recognition ceremonies",
        desc: "Recognize achievements and milestones with prestigious awards.",
        vendors: [
            { name: "Awards", img: "img/awards.jpg", desc: "Custom-designed awards for winners" },
            { name: "Audio-Visual", img: "img/music-entertainment.jpg", desc: "Professional audio-visual setup" },
            { name: "Catering", img: "img/catering.jpg", desc: "Catering for guests" },
            { name: "Stage Setup", img: "img/stage-setup.jpg", desc: "Stage and decoration setup for the ceremony" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Professional photography for the ceremony" }
        ]
    },
    {
        id: "projectcompletion",
        img: "img/business-team-celebrating-successful-project-completion_397889-8315.jpg",
        title: "Successful project completions",
        desc: "Celebrate the successful completion of major projects.",
        vendors: [
            { name: "Venue", img: "img/venue.jpg", desc: "Venue for the celebration" },
            { name: "Catering", img: "img/catering.jpg", desc: "Catering for guests" },
            { name: "Decorations", img: "img/decoration.jpeg", desc: "Decorations to match the success theme" },
            { name: "Photography", img: "img/photographer.jpg", desc: "Capture the celebration moments" },
            { name: "Entertainment", img: "img/music-entertainment.jpg", desc: "Music and entertainment for your event" }
        ]
    }
];

// Get the event type from the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get('type'); // This will get the event type (e.g., 'work', 'promotion')

// Find the matching event from the array
const event = events.find(e => e.id === eventId);

if (event) {
    // Set the event title dynamically in the page
    document.querySelector("h1").innerHTML = `Handpick the finest vendors to craft your dream <span class="red-text">${event.title}</span>`;
    
    // Set the breadcrumb dynamically
    document.querySelector(".breadcrumb-item.active").textContent = event.title;

    // Set the event-specific vendor categories
    const vendorContainer = document.getElementById('vendor-container');
    event.vendors.forEach(vendor => {
        const card = document.createElement("div");
        card.classList.add("col-md-3", "mb-4");
        card.innerHTML = `
            <div class="vendor-card">
                <img src="${vendor.img}" alt="${vendor.name}">
                <h4>${vendor.name}</h4>
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
