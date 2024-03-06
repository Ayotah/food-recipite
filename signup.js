document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");
    const pswd = document.getElementById("password");
    const passStrength = document.getElementById("message");
    const cpass = document.getElementById("cpassword");
    const confirmMessage = document.getElementById("confirm-message");
  
    pswd.onkeyup = () => {
      const passValue = pswd.value;
      const passLength = passValue.length;
      if (passLength >= 6) {
        pswd.style.border = "2px solid green";
        passStrength.innerHTML = `<div class="success">Strong</div>`;
      } else {
        pswd.style.border = "2px solid red";
        passStrength.innerHTML = `<div class="error">Weak</div>`;
      }
    };
  
    // check for password match whenever the user clicks out of confirm password field
    cpass.onkeyup = () => {
      const passValue = pswd.value;
      const cpassValue = cpass.value;
      if (passValue !== cpassValue) {
        cpass.style.border = "2px solid red";
        confirmMessage.innerHTML = `<div class="error">Password does not match</div>`;
      } else {
        cpass.style.border = "2px solid green";
        confirmMessage.innerHTML = "";
      }
    };
  
    // when the form is submitted
    form.onsubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(form);
  
      const fname = formData.get("fname");
      const lname = formData.get("lname");
      const email = formData.get("email");
      const password = formData.get("password");
      const cpassword = formData.get("cpassword");
  
      if (
        fname === "" ||
        lname === "" ||
        email === "" ||
        password === "" ||
        cpassword === ""
      ) {
        alert("Please fill all required fields");
        return;
      }
      // if(lname === ''){
      //     alert('Last Name is required');
      //     return;
      // }
      // if(password === ''){
      //     alert('Password is required');
      //     return;
      // }
      console.table({
        FirstName: fname,
        LastName: lname,
        EmailAddress: email,
        Password: password,
        CPassword: cpassword,
      });
        
        //save the object as a json string in local storage
      localStorage.setItem(
        "user",
        JSON.stringify({
          FirstName: fname,
          LastName: lname,
          EmailAddress: email,
          Password: password,
        })
        );
        
        //swith to the signin page
        window.location.href = "signin.html";
        
        //reset the signup form
      form.reset();
    };
  });
  