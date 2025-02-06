let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = ''; // Use lowercase 'string'

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);  // Use 'string' here
            display.value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';  // Reset string on AC press
            display.value = string;
        } else if (e.target.innerHTML == '=') {
            try {
                string = eval(string);  // Evaluate the expression
                display.value = string;
            } catch (error) {
                display.value = 'Error';  // If eval fails, show an error
                string = '';  // Clear the string
            }
        } else {
            string += e.target.innerHTML;  // Append the clicked button's value to the string
            display.value = string;
        }
    });
});
