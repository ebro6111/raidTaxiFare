
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
    result.innerHTML = "";
    if (pickUp === "") {

        result.innerHTML = `
            <div class="alert alert-danger">
                Please enter your pickup location.
            </div>
        `;
        return;
    }
    if (destination === "") {

        result.innerHTML = `
            <div class="alert alert-danger">
                Please enter your destination.
            </div>
        `;
        return;
    }
    if (pickUp.toLowerCase() === destination.toLowerCase()) {

        result.innerHTML = `
            <div class="alert alert-warning">
                Please choose a different destination.
            </div>
        `;
        return;
    }
    if (!Number.isFinite(distance) || distance <= 0) {

        result.innerHTML = `
            <div class="alert alert-danger">
                Please enter a valid distance.
            </div>
        `;
        return;
    }
    if (service !== "regular" && service !== "peak") {

        result.innerHTML = `
            <div class="alert alert-warning">
                Please select a service.
            </div>
        `;

        return;
    }

    const validDiscounts = [
        "none",
        "student",
        "lowIncome",
        "disability"
    ];

    if (!validDiscounts.includes(discountType)) {

        result.innerHTML = `
            <div class="alert alert-warning">
                Please select a discount option.
            </div>
        `;

        return;
    }
});
form.addEventListener("reset", function () {
    result.innerHTML = "";
});

