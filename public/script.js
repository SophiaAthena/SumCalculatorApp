function validateInput(input) {
    // Allow only numeric values
    input.value = input.value.replace(/[^0-9]/g, '');
}

function calculateSum() {
    // Get the input values
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    // Check if both inputs are not empty
    if (num1 !== '' && num2 !== '') {
        // Calculate the sum
        var sum = parseInt(num1) + parseInt(num2);

        // Display the result
        document.getElementById("result").innerHTML = "Sum: " + sum;
    } else {
        // If any input is empty, display an error message
        document.getElementById("result").innerHTML = "Please enter both numbers.";
    }
}
