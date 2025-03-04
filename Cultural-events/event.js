// Events data with specific vendors for each event type
const events = [
    {
        id: "Makar Sankranti",
        img: "images/makar-sankrant.jpg",
        title: "Makar Sankranti",
        desc: "A harvest festival celebrated with kites, sweets, and prayers for prosperity.",
        vendors: [
            { img: "images/makar/sweet.png", title: "Sweet Vendors", desc: "Spreading sweetness with every sesame and jaggery delight!", link: "#" },
            { img: "images/makar/music.jpg", title: "Music System Providers", desc: "Setting the perfect festive vibe with melodious tunes!", link: "#" },
            //{ img: "images/makar/event.jpg", title: "Event Organizers", desc: "Creating memories, one kite-flying competition at a time!", link: "#" },
            { img: "images/makar/decoration.png", title: "Decor Vendors", desc: "Brighten your Sankranti with vibrant festive decor!.", link: "#" },
            { img: "images/makar/food-stalls.jpg", title: "Food Stalls", desc: "Delicious snacks to fuel your kite-flying fun!", link: "#" },
            { img: "images/makar/kite-shop.png", title: "Kite Sellers", desc: "Fly high with the best kites in town", link: "#" }
        ]
    },
    {
        id: "Mahashivaratri",
        img: "img/engagement.jpg",
        title: "Mahashivaratri",
        desc: "A sacred night devoted to Lord Shiva, marked by fasting, prayers, and meditation.",
        vendors: [
            //{ img: "images/shiv/event.jpg", title: "Event Organizers", desc: "Bringing soulful Mahashivaratri events to life!", link: "#" },
            { img: "images/shiv/Puja.jpg", title: "Puja Samagri Sellers", desc: "Everything you need for a perfect Mahashivaratri puja!", link: "#" },
            { img: "images/shiv/lighting.jpg", title: "Lighting Vendor", desc: "Illuminate your devotion with our radiant lighting solutions", link: "#" },
            { img: "images/shiv/caterers.jpg", title: "Caterers", desc: "Engagement-friendly catering for a perfect celebration.", link: "#" },
            { img: "images/shiv/pujari-shiv.jpg", title: "Pujari", desc: "Expert rituals for your spiritual journey", link: "#" },
            { img: "images/shiv/flower.jpg", title: "Flower Vendors", desc: "Fresh flowers for divine blessings!", link: "#" }
        ]
    },
    {
        id: "Janmashtami",
        img: "img/retirement.jpg",
        title: "Janmashtami",
        desc: "Celebrates Lord Krishna’s birth with fasting, devotional songs, and joyful cultural events.",
        vendors: [
            //{ img: "images/janmashtmi/event.jpg", title: "Dahi Handi Organizers", desc: "Adding thrill to your celebrations with perfectly planned Dahi Handi events!", link: "#" },
            { img: "images/janmashtmi/costume.jpg", title: "Costume Sellers", desc: "Dress like Krishna, shine like divinity!", link: "#" },
            { img: "images/janmashtmi/sweet.jpg", title: "Sweet Vendors", desc: "Indulge in the sweetness of traditional Janmashtami treats!", link: "#" },
            { img: "images/janmashtmi/music.jpg", title: "Sound System Providers", desc: "Filling the air with divine music and joyous chants!", link: "#" },
            // { img: "img/venue.mp4", title: "Venues", desc: "For Celebrating Dahihandi.!", link: "#" }
        ]
    },
    {
        id: "Ganesh Chaturthi",
        img: "img/ganesh-chaturthi.jpg",
        title: "Ganesh Chaturthi",
        desc: "Celebrate the divine arrival of Lord Ganesha with devotion and joy.",
        vendors: [
            { img: "images/ganesh/idol.jpeg", title: "Idol Makers", desc: "Bring home eco-friendly idols crafted with devotion and care!", link: "#" },
            { img: "images/ganesh/pandal.jpeg", title: "Pandal Decorators", desc: "Creating stunning pandals that reflect the grandeur of Ganpati celebrations!", link: "#" },
            { img: "images/ganesh/sweet.jpeg", title: "Sweet Vendors", desc: "Delight in the divine taste of modaks and festive sweets!", link: "#" },
            { img: "images/ganesh/cetering.jpg", title: "Catering Services", desc: "Serving prasad and festive meals with love and purity!", link: "#" },
            { img: "images/ganesh/music.jpeg", title: "Music Bands", desc: "Add rhythm to your Ganpati processions with our energetic music!", link: "#" },
            { img: "images/ganesh/lighting.jpeg", title: "Lighting Vendors", desc: "Illuminate your celebrations with vibrant and decorative lighting!", link: "#" },
            //{ img: "images/ganesh/event-p.jpeg", title: "Event Planners", desc: "Seamless planning for unforgettable Ganesh Chaturthi festivities!", link: "#" }
        ]
    },
    {
        id: "Navaratri",
        img: "img/navaratri.jpg",
        title: "Navaratri",
        desc: "Celebrate the nine nights of devotion, dance, and festive spirit.",
        vendors: [
            //{ img: "images/garba/event.jpg", title: "Garba/Dandiya Organizers", desc: "Feel the beats of devotion with our vibrant Garba and Dandiya nights!", link: "#" },
            { img: "images/garba/costume.jpeg", title: "Costume Sellers", desc: "Dazzle this Navratri with traditional, vibrant outfits that make you shine!", link: "#" },
            { img: "images/garba/jewellery.jpg", title: "Jewelry Sellers", desc: "Add sparkle to your Navratri look with our exquisite jewelry!", link: "#" },
            { img: "images/garba/puja.webp", title: "Puja Item Vendors", desc: "Sacred essentials for your Navratri prayers and rituals!", link: "#" },
            { img: "images/garba/cetering.jpg", title: "Food Vendors", desc: "Relish fasting-friendly dishes and festive delicacies this Navratri!", link: "#" },
            { img: "images/janmashtmi/music.jpg", title: "Sound and Lighting Providers", desc: "Set the stage with energetic beats and dazzling lights!", link: "#" },
            //{ img: "images/garba/event-p.jpg", title: "Event Planners", desc: "We bring your nine-night Navratri celebrations to life!", link: "#" }
        ]
    },
    {
        id: "Dussehra",
        img: "img/dussehra.jpg",
        title: "Dussehra",
        desc: "Celebrate the victory of good over evil with grand Dussehra festivities.",
        vendors: [
            { img: "images/dussehra/effigy-maker.jpg", title: "Effigy Makers", desc: "Celebrate the victory of good over evil with our intricately crafted Ravana effigies!", link: "#" },
            { img: "images/dussehra/Theater-Groups.jpg", title: "Theater Groups", desc: "Experience the magic of Ramayana with our captivating Ramlila performances!", link: "#" },
            //{ img: "img/decor-vendor.jpg", title: "Decor Vendors", desc: "Transform your event space with festive Dussehra decorations!", link: "#" },
            { img: "images/dussehra/food-stall-4.jpg", title: "Food Stalls", desc: "Savor the flavor of traditional snacks and treats during Dussehra festivities!", link: "#" },
            { img: "images/dussehra/lighting.jpg", title: "Lighting Vendors", desc: "Light up Dussehra celebrations with spectacular illuminations!", link: "#" },
            { img: "images/dussehra/music.jpg", title: "Sound System Providers", desc: "Crystal-clear sound for all your Dussehra announcements and performances!", link: "#" },
            //{ img: "images/dussehra/event-p.jpg", title: "Event Planners", desc: "Grand celebrations planned to perfection for an unforgettable Dussehra!", link: "#" }
        ]
    },
    {
        id: "Diwali",
        img: "img/diwali.jpg",
        title: "Diwali",
        desc: "Celebrate the festival of lights with joy, fireworks, and family gatherings.",
        vendors: [
            { img: "images/Diwali/Firework.jpg", title: "Fireworks Vendors", desc: "Light up the sky with our dazzling collection of fireworks!", link: "#" },
            { img: "images/Diwali/sweet.png", title: "Sweet Shops", desc: "Add sweetness to your Diwali celebrations with our traditional festive treats!", link: "#" },
            { img: "images/Diwali/gifts.jpg", title: "Gift Sellers", desc: "Find the perfect gifts to share the joy of Diwali with loved ones!", link: "#" },
            { img: "images/Diwali/diwali-lighiting.jpg", title: "Lighting Vendors", desc: "Brighten your homes and hearts with our festive lighting decor!", link: "#" },
            { img: "images/Diwali/decoration.jpg", title: "Home Decor Sellers", desc: "Transform your space with Diwali rangoli kits and decorative items!", link: "#" },
            { img: "images/Diwali/cetering.jpg", title: "Catering Services", desc: "Serving mouthwatering festive delicacies to make your Diwali memorable!", link: "#" },
            { img: "images/Diwali/puja.jpg", title: "Pooja Samagri Sellers", desc: "All the sacred essentials you need for a blessed Diwali puja!", link: "#" }
        ]
    },
    {
        id: "New Year’s Day",
        img: "img/new-years-day.jpg",
        title: "New Year’s Day",
        desc: "Ring in the New Year with celebration, fun, and unforgettable moments.",
        vendors: [
            //{ img: "img/party-organizer.jpg", title: "Party Organizers", desc: "Kick off the year with unforgettable parties and celebrations!", link: "#" },
            { img: "images/new-year/gift.jpg", title: "Gift Shops", desc: "Start the year by giving thoughtful gifts to your loved ones!", link: "#" },
            { img: "images/new-year/Catering.jpg", title: "Catering Services", desc: "Serve up delicious meals and snacks to celebrate the New Year in style!", link: "#" },
            { img: "images/new-year/decor.jpg", title: "Decor Vendors", desc: "Decorate your space with vibrant, New Year-themed decor!", link: "#" },
            { img: "images/new-year/music.jpg", title: "Sound System Providers", desc: "Get the party started with our premium sound systems!", link: "#" },
            { img: "images/new-year/lighting.jpg", title: "Lighting Vendors", desc: "Shine bright into the New Year with dazzling lighting arrangements!", link: "#" },
            //{ img: "img/event-planner.jpg", title: "Event Planners", desc: "Make your New Year celebrations extraordinary with seamless event planning!", link: "#" }
        ]
    },
    {
        id: "Christmas",
        img: "img/christmas.jpg",
        title: "Christmas",
        desc: "Celebrate the holiday season with love, joy, and festive cheer.",
        vendors: [
            { img: "images/chistmas/tree.jpg", title: "Tree Sellers", desc: "Find the perfect Christmas tree to complete your holiday celebrations!", link: "#" },
            { img: "images/chistmas/gift.jpg", title: "Gift Shops", desc: "Spread holiday cheer with the perfect Christmas gifts for everyone!", link: "#" },
            { img: "images/chistmas/decor.jpg", title: "Decor Vendors", desc: "Transform your space with magical Christmas lights and decorations!", link: "#" },
            { img: "images/chistmas/bakers.jpg", title: "Bakers", desc: "Delight in the festive flavors of cakes, cookies, and Christmas treats!", link: "#" },
            { img: "images/chistmas/catering.jpg", title: "Catering Services", desc: "Enjoy hearty meals with family and friends this Christmas!", link: "#" },
            { img: "images/chistmas/music.jpg", title: "Sound System Providers", desc: "Fill the air with festive carols and Christmas music!", link: "#" },
            //{ img: "img/event-planner.jpg", title: "Event Planners", desc: "Creating magical Christmas parties and events, tailored to your joy!", link: "#" }
        ]
    },
    // {
    //     id: "Hanukkah",
    //     img: "img/hanukkah.jpg",
    //     title: "Hanukkah",
    //     desc: "Celebrate the Festival of Lights with warmth and togetherness.",
    //     vendors: [
    //         { img: "img/menorah-seller.jpg", title: "Menorah Sellers", desc: "Light up the Festival of Lights with our beautifully crafted menorahs!", link: "#" },
    //         { img: "img/candle-maker.jpg", title: "Candle Makers", desc: "Premium Hanukkah candles to brighten each night of celebration!", link: "#" },
    //         { img: "img/jewelry-seller.jpg", title: "Jewelry Sellers", desc: "Celebrate Hanukkah with timeless, elegant jewelry gifts!", link: "#" },
    //         { img: "img/gift-shop.jpg", title: "Gift Shops", desc: "Thoughtful Hanukkah gifts to share the joy of the season!", link: "#" },
    //         { img: "img/caterer.jpg", title: "Caterers", desc: "Serving traditional Hanukkah dishes, from latkes to sufganiyot!", link: "#" },
    //         { img: "img/decor-vendor.jpg", title: "Decor Vendors", desc: "Elegant decorations to set the perfect Hanukkah atmosphere!", link: "#" },
    //         { img: "img/event-planner.jpg", title: "Event Planners", desc: "Bringing your Hanukkah celebrations to life with precision and care!", link: "#" }
    //     ]
    // },
    // {
    //     id: "Eid al-Fitr",
    //     img: "img/eid-al-fitr.jpg",
    //     title: "Eid al-Fitr",
    //     desc: "Celebrate the joyous occasion of Eid with family, food, and festivity.",
    //     vendors: [
    //         { img: "img/sweet-vendor.jpg", title: "Sweet Vendors", desc: "Savor the sweetness of traditional Eid treats like seviyan and dates!", link: "#" },
    //         { img: "img/caterer.jpg", title: "Caterers", desc: "Feast on authentic and delicious dishes to mark the end of Ramadan!", link: "#" },
    //         { img: "img/gift-seller.jpg", title: "Gift Sellers", desc: "Perfect gifts to celebrate Eid with loved ones!", link: "#" },
    //         { img: "img/clothing-vendor.jpg", title: "Clothing Vendors", desc: "Celebrate in style with our exclusive Eid fashion collection!", link: "#" },
    //         { img: "img/decor-vendor.jpg", title: "Decor Vendors", desc: "Adorn your space with elegant Eid-themed decorations!", link: "#" },
    //         { img: "img/event-organizer.jpg", title: "Event Organizers", desc: "Create joyous Eid gatherings and celebrations effortlessly!", link: "#" },
    //         { img: "img/sound-system.jpg", title: "Sound System Providers", desc: "Enhance your celebrations with clear sound for prayers and announcements!", link: "#" }
    //     ]
    // },
    {
        id: "Lunar New Year",
        img: "img/lunar-new-year.jpg",
        title: "Lunar New Year",
        desc: "Ring in the Lunar New Year with hope, prosperity, and celebration.",
        vendors: [
            { img: "images/lunar/decor.jpg", title: "Decor Vendors", desc: "Brighten your space with vibrant Lunar New Year decorations!", link: "#" },
            { img: "images/lunar/gift.jpg", title: "Gift Shops", desc: "Red envelopes and thoughtful gifts to bring good luck to loved ones!", link: "#" },
            { img: "images/lunar/cetering.jpg", title: "Catering Services", desc: "Savor authentic dishes to welcome the Lunar New Year in style!", link: "#" },
            { img: "images/lunar/lion-dance.jpg", title: "Lion Dance Performers", desc: "Traditional lion dances to bring prosperity and joy!", link: "#" },
            { img: "images/lunar/lighting.jpg", title: "Lighting Vendors", desc: "Illuminate your celebrations with red and gold lighting themes!", link: "#" },
            { img: "images/lunar/clothing.jpg", title: "Clothing Sellers", desc: "Celebrate with traditional attire that symbolizes good fortune!", link: "#" },
            //{ img: "img/event-planner.jpg", title: "Event Planners", desc: "Host grand Lunar New Year celebrations with ease!", link: "#" }
        ]
    },
    {
        id: "Thanksgiving",
        img: "img/thanksgiving.jpg",
        title: "Thanksgiving",
        desc: "Celebrate the harvest season with gratitude, feasts, and togetherness.",
        vendors: [
            { img: "images/thanksgiving/cetering.jpg", title: "Catering Services", desc: "Relish a traditional Thanksgiving feast with turkey, pies, and all the fixings!", link: "#" },
            { img: "images/thanksgiving/decor.jpg", title: "Decor Vendors", desc: "Set the table with cozy, autumn-themed Thanksgiving decorations!", link: "#" },
            { img: "images/thanksgiving/gift.jpg", title: "Gift Shops", desc: "Thoughtful gifts to express gratitude this Thanksgiving!", link: "#" },
            { img: "images/thanksgiving/florist.jpg", title: "Florists", desc: "Beautiful floral arrangements to brighten your Thanksgiving table!", link: "#" },
            { img: "images/thanksgiving/bakers.jpg", title: "Bakers", desc: "Delight in freshly baked pumpkin pies and other Thanksgiving treats!", link: "#" },
            //{ img: "images/thanksgiving/music.jpg", title: "Event Organizers", desc: "Seamless planning for memorable Thanksgiving gatherings!", link: "#" },
            { img: "images/thanksgiving/music-1.png", title: "Sound System Providers", desc: "Crystal-clear sound for speeches and Thanksgiving festivities!", link: "#" }
        ]
    },
    // {
    //     id: "Eid al-Adha",
    //     img: "img/eid-al-adha.jpg",
    //     title: "Eid al-Adha",
    //     desc: "Celebrate Eid al-Adha with faith, sacrifice, and community.",
    //     vendors: [
    //         { img: "img/livestock-seller.jpg", title: "Livestock Sellers", desc: "Ethically raised livestock for the sacred Eid al-Adha sacrifice.", link: "#" },
    //         { img: "img/butcher.jpg", title: "Butchers", desc: "Expert services for qurbani to ensure proper and respectful preparation.", link: "#" },
    //         { img: "img/sweet-vendor.jpg", title: "Sweet Vendors", desc: "Delicious traditional sweets to share the joy of Eid al-Adha!", link: "#" },
    //         { img: "img/caterer.jpg", title: "Catering Services", desc: "Feast on hearty, traditional meals with family and friends!", link: "#" },
    //         { img: "img/clothing-vendor.jpg", title: "Clothing Vendors", desc: "Celebrate in style with our festive Eid fashion collection!", link: "#" },
    //         { img: "img/decor-vendor.jpg", title: "Decor Vendors", desc: "Elegant decorations to set the perfect Eid ambiance!", link: "#" },
    //         { img: "img/gift-seller.jpg", title: "Gift Sellers", desc: "Thoughtful gifts for sharing and celebrating Eid al-Adha!", link: "#" }
    //     ]
    // },
    {
        id: "Ramadan",
        img: "img/ramadan.jpg",
        title: "Ramadan",
        desc: "Celebrate the sacred month of Ramadan with faith, prayer, and community.",
        vendors: [
            { img: "images/ramdan/food.jpg", title: "Food Vendors", desc: "Delicious iftar snacks and meals to break your fast with joy!", link: "#" },
            { img: "images/ramdan/dates.jpg", title: "Dates Sellers", desc: "Premium dates to honor the tradition of breaking your fast!", link: "#" },
            { img: "images/ramdan/decor.jpg", title: "Decor Vendors", desc: "Illuminate your Ramadan with crescent moon and star-themed decorations!", link: "#" },
            { img: "images/ramdan/prayer-mat.jpg", title: "Prayer Mat Sellers", desc: "Comfortable and high-quality prayer mats for your daily worship.", link: "#" },
            //{ img: "img/event-organizer.jpg", title: "Event Organizers", desc: "Organizing serene and communal iftar gatherings with care.", link: "#" },
            { img: "images/ramdan/catering.jpg", title: "Catering Services", desc: "Serving wholesome meals for suhoor and iftar with love.", link: "#" },
            { img: "images/ramdan/puja.jpg", title: "Puja Samagri Sellers", desc: "Sacred essentials to enrich your Ramadan.", link: "#"}
        ]
    }
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
