
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
    const totalFare = baseFare + (farePerKm * distance);
    let peakCharge = 0;
    if (service === "peak") {
        peakCharge = totalFare * 0.30;
    }
    const fareBeforeDiscount = totalFare + peakCharge;


    let discountRate = 0;
    let discountReason = "No Discount";

    if (discountType === "student") {

        discountRate = 0.08;
        discountReason = "Student Discount (8%)";

    } else if (discountType === "lowIncome") {

        discountRate = 0.10;
        discountReason = "Low Income Discount (10%)";

    } else if (discountType === "disability") {

        discountRate = 0.30;
        discountReason = "Disability Discount (30%)";

    }

    const discountAmount = fareBeforeDiscount * discountRate;
    const taxiFare = fareBeforeDiscount - discountAmount;
});
form.addEventListener("reset", function () {
    result.innerHTML = "";
});

