// SHOW/HIDE PASSWORD (WITH ICON CHANGE)
const container = document.querySelector(".container"),
    passShowHide = document.querySelectorAll(".showHidePass"),
    passFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".sign-up-tab"),
    login = document.querySelector(".login-tab");

passShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        passFields.forEach(passField => {
            if (passField.type === "password") {
                passField.type = "text";
                passShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                });
            } else {
                passField.type = "password";
                passShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                });
            }
        });
    });
});

// LOGIN EMAIL VERIFICATION
const email = document.getElementById('email-login');

function validate_email() {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
    if (!email.value.match(pattern)) {
        document.getElementById('email_alert1').innerHTML = '<i class="uil uil-exclamation-triangle" style="right: 10px; color: #dc143c;"></i>';
        document.getElementById('email_alert2').innerHTML = 'Your email address is invalid';
        document.getElementById('login-button').disabled = true;
        document.getElementById('login-button').style.opacity = (0.4);
    } else {
        document.getElementById('email_alert1').innerHTML = '<i class="uil uil-check-circle" style="right: 10px; color: #00b300;"></i>';
        document.getElementById('email_alert2').innerHTML = 'Your email address is valid';
        document.getElementById('login-button').disabled = false;
        document.getElementById('login-button').style.opacity = (1);
    }
}

// REMEMBER ME CHECKBOX FUNCTION
const rmCheck = document.getElementById("logCheck"),
    emailInput = document.getElementById("email-login");

if (localStorage.checkbox && localStorage.checkbox !== "") {
    rmCheck.setAttribute("checked", "checked");
    emailInput.value = localStorage.username;
} else {
    rmCheck.removeAttribute("checked");
    emailInput.value = "";
}

function lsRememberMe() {
    if (rmCheck.checked && emailInput.value !== "") {
        localStorage.username = emailInput.value;
        localStorage.checkbox = rmCheck.value;
    } else {
        localStorage.username = "";
        localStorage.checkbox = "";
    }
}

// LOGIN AND SIGN UP CHANGE TAB
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

// SIGN UP EMAIL VERIFICATION
const emailReg = document.getElementById('email-sign-up');

function validate_emailReg() {
    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
    if (!emailReg.value.match(pattern)) {
        document.getElementById('email_alert3').innerHTML = '<i class="uil uil-exclamation-triangle" style="right: 10px; color: #dc143c;"></i>';
        document.getElementById('email_alert4').innerHTML = 'Your email address is invalid';
        document.getElementById('sign-up-button').disabled = true;
        document.getElementById('sign-up-button').style.opacity = (0.4);
    } else {
        document.getElementById('email_alert3').innerHTML = '<i class="uil uil-check-circle" style="right: 10px; color: #00b300;"></i>';
        document.getElementById('email_alert4').innerHTML = 'Your email address is valid';
        document.getElementById('sign-up-button').disabled = false;
        document.getElementById('sign-up-button').style.opacity = (1);
    }
}

// PASSWORD VERIFICATION
function validate_password() {

    let password = document.getElementById('password-sign-up').value;
    let confirmPassword = document.getElementById('password-confirm').value;
    if (password != confirmPassword) {
        document.getElementById('password-confirm').style.border = '2px solid #DC143C';
        document.getElementById('pass_alert1').innerHTML = '<i class="uil uil-exclamation-triangle" style="right: 35px; color: #dc143c;"></i>';
        document.getElementById('pass_alert2').innerHTML = 'password does not match';
        document.getElementById('sign-up-button').disabled = true;
        document.getElementById('sign-up-button').style.opacity = (0.4);
    } else {
        document.getElementById('password-confirm').style.border = '2px solid #00b300';
        document.getElementById('pass_alert1').innerHTML = '<i class="uil uil-check-circle" style="right: 35px; color: #00b300;"></i>';
        document.getElementById('pass_alert2').innerHTML = 'password matched';
        document.getElementById('sign-up-button').disabled = false;
        document.getElementById('sign-up-button').style.opacity = (1);
    }
}

// TERMS AND CONDITIONS CHECKBOX FUNCTION
function checkForm(form) {
    if (!form.agree.checked) {
        document.getElementById('tac_alert1').innerHTML = '<p  style="font-size: 0.625rem; font-style: italic; right: 35px; color: #dc143c;">Required*</p>';
        document.getElementById('tac_alert2').innerHTML = 'Please indicate that you accept the Terms and Conditions';
        return false;
    } else {
        return true;
    }
}