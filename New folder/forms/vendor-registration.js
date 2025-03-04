// Handle vendor registration form submission
document.getElementById('vendorRegistrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    const vendorName = document.getElementById('vendorName').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const vendorEmail = document.getElementById('vendorEmail').value;
    const vendorPassword = document.getElementById('vendorPassword').value;
    const vendorPhone = document.getElementById('vendorPhone').value;
    const vendorAddress = document.getElementById('vendorAddress').value;
    const vendorServiceType = document.getElementById('vendorServiceType').value;
    const vendorWebsite = document.getElementById('vendorWebsite').value;
    const vendorExperience = document.getElementById('vendorExperience').value;
    const vendorDocuments = document.getElementById('vendorDocuments').files;
    const termsAccepted = document.getElementById('termsConditions').checked;

    // Check if all required fields are filled
    if (vendorName && contactPerson && vendorEmail && vendorPassword && vendorPhone && vendorAddress && vendorServiceType && vendorExperience && vendorDocuments.length > 0 && termsAccepted) {
        alert('Vendor registration successful!');
        // Close the modal after submission
        var vendorRegistrationModal = new bootstrap.Modal(document.getElementById('vendorRegistrationModal'));
        vendorRegistrationModal.hide();
    } else {
        alert('Please fill in all fields and agree to the terms.');
    }
});
