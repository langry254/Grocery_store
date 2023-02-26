window.onload = function () {
    // Add a new entry to the history stack
    window.history.pushState(null, null, window.location.href);

    // Replace the current entry with the new one
    window.history.replaceState(null, null, window.location.href);
    //validating the login
}
    function validateLogin() {
        var name = document.getElementById("email").value;
        var pass = document.getElementById("pass1").value;
        if (name == "" || pass == "") {
            alert("Please fill in all fields.");
            return false;
        }
    }
    // validating the sign up
    function validateSignup() {
        var f_names = document.getElementById("f-names").value;
        var mail = document.getElementById("email1").value;
        var pas1 = document.getElementById("pas").value;
        var pass2 = document.getElementById("pas2").value;
        if (pas1 != pass2) {
            alert("passwords dont match");
        }
        else if (pas1.length < 6) {
            alert("Password should six characters or more")
        }

        if (f_names == "" || mail == "" || pas1 == "" || pass2 == "") {
            alert("Please fill in all fields.");
            return false;
        }
        else {
            window.location.href = 'forgotpassword.html';
        }
    }
    //validating the reset page
    function validateReset() {
        var r_pas1 = document.getElementById("r_pass").value;
        var r_pass2 = document.getElementById("r_pass1").value;
        if (r_pas1 != r_pass2) {
            alert("passwords dont match");
        }
        else if (r_pas1.length < 6) {
            alert("Password should six characters or more")
        }
        else {
            location.href = 'Signup.html';
        }



    }

