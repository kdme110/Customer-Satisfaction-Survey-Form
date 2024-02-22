function validateForm() {
    var inputName = document.getElementById('inputName').value;
    var inputEmail = document.getElementById('inputEmail').value;
    var inputNumber = document.getElementById('inputNumber').value;
    var inputPassword = document.getElementById('inputPassword').value;
    var inputDate = document.getElementById('inputDate').value;
    var inputRate = document.getElementById('inputRate').value;
    var payment = document.querySelector('input[name="payment"]:checked');
    var week = document.querySelectorAll('input[name="week"]:checked');
    var inputFeedback = document.getElementById('inputFeedback').value;

    // Perform validation, e.g., check if fields are not empty
    if (inputName.trim() === '' || inputEmail.trim() === '' || inputNumber.trim() === '' || inputPassword.trim() === '' || inputDate.trim() === '' || inputRate.trim() === '' || !payment || week.length === 0 || inputFeedback.trim() === '') {
        alert('Please fill in all the required fields.');
        return false; // Prevent form submission
    }

    // If validation passes, allow form submission
    return true;
}
