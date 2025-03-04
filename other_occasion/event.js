// Events data with specific vendors for each event type
const events = [
    {
        id: "musicevents",
        img: "img/musicevent.avif",
        title: "Music Events",
        desc: "Embrace the chill vibes of melodic coolness.",
        vendors: [
            { img: "img/food.jpg", title: "Caterers", desc: "Diverse selection of dishes for every palate.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Browse galleries to find your perfect vibe.", link: "#" },
            { img: "img/msecurity.jpeg", title: "Security", desc: "To guarantee the safety of everyone present.", link: "#" },
            { img: "img/mdeco.webp", title: "Decorators", desc: "Expert decorations to light up your occasion.", link: "#" },
            { img: "img/market.jpg", title: "Marketing & Media", desc: "Crafting narratives, driving results.", link: "#" },
            
        ]
    },
    {
        id: "flimfestival",
        img: "img/flim.jpeg",
        title: "Flim Festival",
        desc: "Experience the extraordinary on screen.",
        vendors: [
            { img: "img/food.jpg", title: "Caterers", desc: "Diverse selection of dishes for every palate.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Browse galleries to find your perfect vibe.", link: "#" },
            { img: "img/msecurity.jpeg", title: "Security", desc: "To guarantee the safety of everyone present.", link: "#" },
            { img: "img/mdeco.webp", title: "Decorators", desc: "Expert decorations to light up your occasion.", link: "#" },
            { img: "img/market.jpg", title: "Marketing & Media", desc: "Crafting narratives, driving results.", link: "#" },
            { img: "img/flim.jpeg", title: "venues", desc: "Find your perfect to celebrate.", link: "#" }
        ]
    },
    {
        id: "sportingevents",
        img: "img/sporting.webp",
        title: "Sporting Events",
        desc: "A short, memorable phrase that summarizes the event and encourages people to attend.",
        vendors: [
            { img: "img/sequip.jpeg", title: "Equipments", desc: "Transform your space with creative and elegant decor.", link: "#" },
            { img: "img/food.jpg", title: "Caterers", desc: "Delicious catering for your retirement celebration.", link: "#" },
            { img: "img/mdeco.webp", title: "Decorators", desc: "Expert decorations to light up your Events.", link: "#" },
            { img: "img/msecurity.jpeg", title: "Security", desc: "To guarantee the safety of everyone present.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture the best moments of yours.", link: "#" },
            { img: "img/spevent.webp", title: "Venues", desc: "Select a perfect venue for your Event.", link: "#" },
            { img: "img/market.jpg", title: "Marketing & Media", desc: "Crafting narratives, driving results.", link: "#" },
           
        ]
    },
    {
        id: "carnivalandfairs",
        img: "img/carnival.avif",
        title: "Carnival And Fairs",
        desc: "Where unforgettable memories come to life.",
        vendors: [
            { img: "img/cstall.jpeg", title: "Stalls", desc: "Explore, and experience something special", link: "#" },
            { img: "img/food.jpg", title: "Caterers", desc: "Catering services for your  celebration.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture memories of your enjoyment.", link: "#" },
            { img: "img/carnival.jpg", title: "Venues", desc: "Find the best venues for your celebration.", link: "#" },
            { img: "img/msecurity.jpeg", title: "Security", desc: "To guarantee the safety of everyone present.", link: "#" },
            { img: "img/market.jpg", title: "Marketing & Media", desc: "Crafting narratives, driving results.", link: "#" },
           
           
            
        ]
    },
    {
        id: "internationalteachersday",
        img: "img/teacher.jpeg",
        title: "International Teacher's Day",
        desc: "Mentors who inspire, guide, and shape our future",
        vendors: [
            { img: "img/cake2.jpg", title: "Cake ", desc: "Get the most creative and delicious cakes.", link: "#" },
            { img: "img/tvenue.jpeg", title: "Venues", desc: "Find the perfect setting for your special day.", link: "#" },
            { img: "img/tdecoration.jpg", title: "Decorators", desc: "Transform your space with creative and elegant decor", link: "#" },
            { img: "img/food.jpg", title: "Caterers", desc: "Amazing catering to delight every guest.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture every fun moments", link: "#" },
            { img: "img/tawards.webp", title: "Awards", desc: "Apprication of your best actions", link: "#" }
        ]
    },
    {
        id: "nationaldogsday",
        img: "img/dog.jpg",
        title: "National Dogs Day [August 26]",
        desc: "The love, loyalty, and pawsome joy of our furry friends.",
        vendors: [
            { img: "img/food.jpg", title: "Caterers", desc: "Catering services for your  celebration.", link: "#" },
            { img: "img/dd.jpeg", title: "Events", desc: "More events to praticipate.", link: "#" },
            { img: "img/dactivity.jpeg", title: "Activites", desc: "That makes you feel refresh.", link: "#" },
            { img: "img/ddecoration.jpeg", title: "Decorators", desc: "Transform your space with elegant decor.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture your proudest graduation moments.", link: "#" }
        ]
    },
    {
        id: "internationalwomensday",
        img: "img/women.avif",
        title: "International Women's Day",
        desc: "Empowering and celebrating the strength of every woman.",
        vendors: [
            { img: "img/gifts.jpeg", title: "Gift ", desc: "Personalized gifts for the day.", link: "#" },
            { img: "img/wdecoration.jpeg", title: "Decorators", desc: "Transform your space with elegant decor.", link: "#" },
            { img: "img/food.jpg", title: "Caterers", desc: "Catering with delicious options.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture the special moments.", link: "#" }
        ]
    },
    {
        id: "worldenviornmentday",
        img: "img/enviornment.jpeg",
        title: "World Enviornment Day [5 June]",
        desc: "Celebrate milestones in your journey together.",
        vendors: [
            { img: "img/edecoration.jpg", title: "Decorators", desc: "Transform your space with elegant decor", link: "#" },
            { img: "img/food.jpg", title: "Caterers", desc: "Catering to make your celebration memorable.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture timeless moments from your event.", link: "#" },
            { img: "img/activites.jpeg", title: "Promotions", desc: "Some betterments", link: "#" }
        ]
    },
    {
        id: "internationalpeaceday",
        img: "img/peace.jpeg",
        title: "International Peace Day [21 September]",
        desc: "Spreading kindness, unity, and harmony for a world at peace.",
        vendors: [
            { img: "img/pdecoration.png", title: "Decorators", desc: "Create a memorable atmosphere.", link: "#" },
            { img: "img/food.jpg", title: "Caterers", desc: "Catering services to complement your  celebration.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture this important moment in your life.", link: "#" },
            { img: "img/cake2.jpg", title: "Cake ", desc: "Get the most creative and delicious cakes.", link: "#" },
            
        ]
    },
    {
        id: "pridemonthevent",
        img: "img/prides.jpeg",
        title: "Pride Month Event [28 June]",
        desc: "It's always wrong to hate, but it's never wrong to love",
        vendors: [
            { img: "img/food.jpg", title: "Caterers", desc: "Food to suit every guest at your fresh start party.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture the best moments of yours.", link: "#" },
            { img: "img/pvenue.jpg", title: "Venues", desc: "Select a perfect venue for your celebration.", link: "#" },
            { img: "img/msecurity.jpeg", title: "Security", desc: "To guarantee the safety of everyone present.", link: "#" },
            { img: "img/market.jpg", title: "Marketing & Media", desc: "Crafting narratives, driving results.", link: "#" },
            { img: "img/tphotograper.webp", title: "Photographers", desc: "Capture the best moments of yours.", link: "#" },
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
