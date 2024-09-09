document.getElementById('checkEligibility').addEventListener('click', function() {
    checkEligibility();
});

function checkEligibility() {
    const age = parseInt(document.getElementById('age').value, 10);
    const isMember = document.getElementById('membershipstatus').checked;
    const resultElement = document.getElementById('result');

    if (age >= 65) {
        resultElement.textContent = 'You are eligible for a Senior Discount.';
    } else if (age >= 18 && isMember) {
        resultElement.textContent = 'You are eligible for a Member Discount.';
    } else {
        resultElement.textContent = 'You are not eligible for a discount.';
    }
}