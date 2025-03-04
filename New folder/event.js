// Events data with specific vendors for each event type
const events = [
    {
        id: "Valentine's Day",
        img: "img/Valentines day.webp",
        title: "Valentine's Day",
        desc: "A Day to Celebrate Love, Romance, and Cherished Connections!",
        vendors: [
            { img: "img/florist.jpg", title: "Florists", desc: "Bringing Love to Life with Every Bloom!", link: "#" },
            { img: "img/choco.jpg", title: "Chocolatiers", desc: "Sweeten Your Day with the Perfect Treat!", link: "#" },
            { img: "img/rest.jpg", title: "Restaurants", desc: "Romantic Dishes, Crafted with Love!", link: "#" },
            { img: "img/photo.jpg", title: "Photographers", desc: "Capturing Moments of Love, Forever.", link: "#" },
            { img: "img/live.jpg", title: "Live Music/Entertainment", desc: "Setting the Perfect Mood for Romance!", link: "#" },
            { img: "img/gift.jpg", title: "Gift Shops", desc: "Thoughtful Gifts for Your One and Only!", link: "#" }
        ]
    },
    {
        id: "Mother's Day",
        img: "img/mothers day.jpg",
        title: "Mother's Day",
        desc: "A Heartfelt Tribute to the Women Who Make Our World Shine.",
        vendors: [
            { img: "img/florist.jpg", title: "Florists", desc: "Flowers That Speak the Language of Love!", link: "#" },
            { img: "img/gift.jpg", title: "Gift Shops", desc: "Special Gifts for the Special Woman in Your Life!", link: "#" },
            { img: "img/cater.jpg", title: "Caterers", desc: "Delicious Meals, Just Like Mom Would Make!", link: "#" },
            { img: "img/photo.jpg", title: "Photographers", desc: "Capturing Every Loving Moment with Mom!", link: "#" },
            { img: "img/jew.jpg", title: "Jewellery Vendors", desc: "Elegant Gifts for the Woman Who Deserves It All!", link: "#" },
            { img: "img/spa.jpg", title: "Spa Services", desc: "Pamper Mom with Relaxation and Rejuvenation!", link: "#" }
        ]
    },
    {
        id: "Father's Day",
        img: "img/fathers day image.jpg",
        title: "Father's Day",
        desc: "Honoring the Strength, Wisdom, and Love of Every Father.",
        vendors: [
            { img: "img/gift.jpg", title: "Gift Shops", desc: "The Perfect Gift for Every Type of Dad!", link: "#" },
            { img: "img/bbq.jpg", title: "Grill & BBQ Vendors", desc: "Grill Masters Serving Up Dad’s Favorite Flavors!", link: "#" },
            { img: "img/photo.jpg", title: "Photographers", desc: "Capturing Family Moments, One Snap at a Time!", link: "#" },
            { img: "img/live.jpg", title: "Live Music or DJs", desc: "Great Music for the Best Dad Vibes!", link: "#" },
            { img: "img/beer.jpg", title: "Beer or Whiskey Tasting Vendors", desc: "Beer or Whiskey Tasting Vendors", link: "#" }
        ]
    },
    {
        id: "Independence Day",
        img: "img/independence.png",
        title: "Independence Day",
        desc: "A Celebration of Freedom, Patriotism, and Unforgettable Memories!",
        vendors: [
            { img: "img/fire.jpg", title: "Fireworks Vendors", desc: "Light Up the Sky with an Explosion of Freedom!", link: "#" },
            { img: "img/ftruck.jpg", title: "Food Trucks", desc: "Delicious Eats, Fresh from the Truck!", link: "#" },
            { img: "img/live.jpg", title: "Live Music Bands", desc: "Rocking the Orange, White, and Green!", link: "#" },
            { img: "img/decor.jpg", title: "Decoration", desc: "Setting the Scene for a Spectacular Celebration!", link: "#" },
            { img: "img/flag.jpg", title: "Flags and Banner", desc: "Flags and Banners to Celebrate the Freedom!", link: "#" }
        
        ]
    },
    {
        id: "Halloween",
        img: "img/hall.jpg",
        title: "Halloween",
        desc: "Get Ready for Spells of Fun, Frights, and Fabulous Surprises!",
        vendors: [
            { img: "img/hcost.jpg", title: "Costume Shops", desc: "Transform into Your Spooky Best!", link: "#" },
            { img: "img/hdecor.jpg", title: "Decorators", desc: "Bringing the Spooky Vibes to Life!", link: "#" },
            { img: "img/hcandy.jpg", title: "Candy Vendors", desc: "Sweet Treats for Trick-or-Treaters and Ghouls!", link: "#" },
            { img: "img/hmake.jpg", title: "Face Painters/Makeup Artists", desc: "From Creepy to Gorgeous – We’ve Got the Looks!", link: "#" },
            { img: "img/hper.jpg", title: "Live Entertainment/Actors", desc: "Spook-tacular Performances That Will Thrill!", link: "#" }
        ]
    },
    {
        id: "Labor Day",
        img: "img/labor day image.jpg",
        title: "Labor Day",
        desc: "Celebrating Hard Work, Dedication, and Well-Deserved Rest.",
        vendors: [
            { img: "img/ftruck.jpg", title: "Food Trucks", desc: "Serving Up Tasty Bites for a Relaxing Day Off!", link: "#" },
            { img: "img/cater.jpg", title: "Caterers", desc: "Celebrate with delicious catering for your party.", link: "#" },
            { img: "img/erent.avif", title: "Event Rentals", desc: "Elegant decorations for your graduation ceremony.", link: "#" },
            { img: "img/enter.jpg", title: "Entertainment Providers", desc: "Fun, Games, and Tunes to Celebrate the Day!", link: "#" },
            { img: "img/decor.jpg", title: "Decorators", desc: "Elegant decorations for your graduation ceremony.", link: "#" },
            { img: "img/photo.jpg", title: "Photographers", desc: "Making Your Labor Day Memories Last Forever!", link: "#" }
        ]
    },
    {
        id: "Veterans Day",
        img: "img/veterans image.jpg",
        title: "Veterans Day",
        desc: "Paying Tribute to the Heroes Who Served and Sacrificed for Our Freedom.",
        vendors: [
            { img: "img/mili.jpg", title: "Military Themed Vendors", desc: "Honoring the Heroes with Every Salute!", link: "#" },
            { img: "img/cater.jpg", title: "Caterers", desc: "A Feast to Honor the Brave!", link: "#" },
            { img: "img/photo.jpg", title: "Photographers", desc: "Capturing the Courage, Honor, and Sacrifice!", link: "#" },
            { img: "img/speak.jpg", title: "Speakers/Performers", desc: "Voices That Echo the Stories of Sacrifice!", link: "#" },
            { img: "img/live.jpg", title: "Live Music/Bands", desc: "Playing Patriotic Tunes to Honor Our Veterans!", link: "#" },
            { img: "img/flag.jpg", title: "Flag Vendors", desc: "Waving Our Flag High in Tribute!", link: "#" }
        ]
    },
    {
        id: "Earth Day",
        img: "img/earth image.jpg",
        title: "Earth Day",
        desc: "Join Us in Protecting Our Planet, One Small Step at a Time.",
        vendors: [
            { img: "img/sus.jpg", title: "Sustainability Vendors", desc: "Eco-Friendly Products for a Greener Tomorrow!", link: "#" },
            { img: "img/farmer.jpg", title: "Farmers Markets", desc: "Fresh, Local, and Earth-Friendly Goodness!", link: "#" },
            { img: "img/recycle.jpg", title: "Recycling Programs", desc: "Turn Trash into Treasure Recycle for a Better World!", link: "#" },
            { img: "img/tree.jpg", title: "Tree Planting Services", desc: "Give Back to Nature, One Tree at a Time!", link: "#" },
            { img: "img/speak.jpg", title: "Educational Speakers", desc: "Inspiring Action for Our Planet’s Future!", link: "#" }
        ]
    },
    {
        id: "Midsummer Festival",
        img: "img/mid.avif",
        title: "Midsummer Festival",
        desc: "Celebrate the Magic of Summer with Joy, Music, and Nature's Beauty!",
        vendors: [
            { img: "img/decor.jpg", title: "Decorators", desc: "Create a memorable atmosphere.", link: "#" },
            { img: "img/cater.jpg", title: "Caterers", desc: "Catering services to complement your celebration.", link: "#" },
            { img: "img/photo.jpg", title: "Photographers", desc: "Capture this important moment.", link: "#" },
            { img: "img/live.jpg", title: "Live Music/Bands", desc: "Bringing Summer Sounds to Life!", link: "#" }
        ]
    },
    {
        id: "Festival of Lights",
        img: "img/festival of lights image.webp",
        title: "Festival of Lights",
        desc: "Experience the Wonder of Lights, Culture, and Uniting Communities!",
        vendors: [
            { img: "img/light.jpg", title: "Light Installation Artists", desc: "Transforming Spaces into Dazzling Light Shows!", link: "#" },
            { img: "img/cater.jpg", title: "Caterers", desc: "Food to suit every guest at your fresh start party.", link: "#" },
            { img: "img/decor.jpg", title: "Decorators", desc: "Decorate for a joyful and fresh beginning.", link: "#" },
            { img: "img/cult.webp", title: "Cultural Performers", desc: "Bringing Light to Life with Music and Dance!", link: "#" },
            { img: "img/fire.jpg", title: "Firework Vendors", desc: "Lighting Up the Sky in a Show of Wonder!", link: "#" },
            { img: "img/gift.jpg", title: "Gift Shops", desc: "Brighten Your Day with a Beautiful, Unique Gift!", link: "#" },
            { img: "img/sweets.jpg", title: "Sweets", desc: "Make Your Festival Sweeeter!", link: "#" }
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
    document.querySelector("h1").innerHTML = `Crafting Unforgettable Moments with Top Vendors for <span class="red-text">${event.title}</span>`;
    
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

// Generate and append event cards dynamically
events.forEach(event => {
    const card = createEventCard(event);
    eventContainer.innerHTML += card;
});

//vendor register
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
