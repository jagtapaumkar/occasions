document.getElementById('priceRange').addEventListener('input', function () {
    const priceValue = document.getElementById('priceValue');
    priceValue.textContent = `₹${parseInt(this.value).toLocaleString('en-IN')}`;
});

document.querySelector('.apply-price').addEventListener('click', function () {
    const selectedPrice = document.getElementById('priceRange').value;
    console.log(`Selected Starting Price: ₹${parseInt(selectedPrice).toLocaleString('en-IN')}`);
    
});
document.getElementById('distanceRange').addEventListener('input', function () {
    const distanceValue = document.getElementById('distanceValue');
    distanceValue.textContent = `${this.value} km`;
});
document.querySelector('.apply-distance').addEventListener('click', function () {
    const selectedDistance = document.getElementById('distanceRange').value;
    console.log(`Selected Distance: ${selectedDistance} km`);
    
});
document.querySelector('.apply-styles').addEventListener('click', function () {
    const selectedStyles = Array.from(document.querySelectorAll('.form-check-input:checked')).map(
        checkbox => checkbox.value
    );
    console.log('Selected Styles:', selectedStyles);
    
});
document.querySelector('.list-view').addEventListener('click', function () {
    document.querySelector('.list-view').style.color = '#d74a49';
    document.querySelector('.list-view').style.fontWeight = 'bold';
    document.querySelector('.grid-view').style.color = '#666';
    document.querySelector('.grid-view').style.fontWeight = 'normal';
   
});

document.querySelector('.grid-view').addEventListener('click', function () {
    document.querySelector('.grid-view').style.color = '#d74a49';
    document.querySelector('.grid-view').style.fontWeight = 'bold';
    document.querySelector('.list-view').style.color = '#666';
    document.querySelector('.list-view').style.fontWeight = 'normal';
    
});
