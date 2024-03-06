document.addEventListener('DOMContentLoaded', () => {
    // const user = JSON.parse(localStorage.getItem('user'));
    const form = document.getElementById('signin-form');

    // if the user is already logged in
    if (localStorage.getItem('isLoggedIn')) {
        window.location.href = 'index.html';
    }

    // when the form is submitted
    form.onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        const email = formData.get('email');
        const password = formData.get('password');

        if ( email === '' || password === '') {
            alert('Please fill all required fields');
            return;
        }

        console.table({
            EmailAddress: email,
            Password: password,
        })
        // console.log(user);
        // validateUser(user, email, password);

        //check if the email and password are correct
        if (email === user.EmailAddress && password === user.Password) {

            //change web address to the store html file
            window.location.href = 'index.html';

            //set the isLoggedIn to true
            localStorage.setItem('isLoggedIn', true);
        } else {
            alert("Invalid login details");
            return;
        }
    }
});

//validate login details from local storage
    /*const validateUser = (userObj, inputEmail, inputPassword) => {
        if(inputEmail === userObj.EmailAddress && inputPassword === userObj.Password){
            window.location.href = 'index.html';
        } else {
            alert("Invalid login details");
            return;
        }
    }*/

  