
const form = document.getElementById("taxiForm");
const result = document.getElementById("result");
const baseFare = 40;
const farePerKm = 55;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const pickUp = document.getElementById("pickupForm").value.trim();
    const destination = document.getElementById("distForm").value.trim();
    const distance = Number( document.getElementById("distance").value);
    const service = document.getElementById("service").value;
    const discountType = document.getElementById("discount").value;
    
});
form.addEventListener("reset", function () {
    result.innerHTML = "";
});

