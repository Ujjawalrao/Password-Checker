const inputbox = document.querySelector('input');
const span = document.querySelector('span');

function passwordChecker() {
    inputbox.addEventListener('input', () =>{
        let password = inputbox.value.trim();
     
        if (password.length < 8) {
         span.innerHTML = 'password is too short'
         span.style.color = 'red'
        } else {

            if (password.search(/[a-z]/) == -1) {
                 span.innerHTML = 'password is missing a lowercase letter'
                 span.style.color = 'red'
            } else if (password.search(/[A-Z]/) == -1) {
                span.innerHTML = 'password is missing a UPPERCASE letter'
                span.style.color = 'red'
           } else if (password.search(/[0-9]/) == -1) {
                span.innerHTML = 'password is missing number'
                span.style.color = 'red'
           } else {
                span.innerHTML = 'password is strong now'
                span.style.color = 'green'
           }
        }

     });
};
passwordChecker();