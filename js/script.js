// SHOW/HIDE PASSWORD (WITH ICON CHANGE)

const container = document.querySelector(".container"),
    passShowHide = document.querySelectorAll(".showHidePass"),
    passFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".sign-up-tab"),
    login = document.querySelector(".login-tab");

passShowHide.forEach((eyeIcon => {
    eyeIcon.addEventListener("click", (() => {
        passFields.forEach((eyeIcon => {
            "password" === eyeIcon.type ? (eyeIcon.type = "text", passShowHide.forEach((eyeIcon => {
                eyeIcon.classList.replace("uil-eye-slash", "uil-eye")
            }))) : (eyeIcon.type = "password", passShowHide.forEach((eyeIcon => {
                eyeIcon.classList.replace("uil-eye", "uil-eye-slash")
            })))
        }))
    }))
}));

// LOGIN EMAIL VERIFICATION

const email = document.getElementById("email-login"),
    emailAlert1 = document.getElementById("email_alert1"),
    emailAlert2 = document.getElementById("email_alert2"),
    loginButton = document.getElementById("login-button");

function validate_email() {
    email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g)
        ?
        (
            emailAlert1.innerHTML = '<i class="uil uil-check-circle" style="right: 10px; color: #00b300;"></i>',
            document.getElementById("email_alert2").innerHTML = "You entered a valid email address.",
            loginButton.disabled = !1, loginButton.style.opacity = 1
        )
        :
        (
            emailAlert1.innerHTML = '<i class="uil uil-exclamation-triangle" style="right: 10px; color: #dc143c;"></i>',
            emailAlert2.innerHTML = "You entered an invalid email address!",
            loginButton.disabled = !0,
            loginButton.style.opacity = 0.4
        )
}

// REMEMBER ME CHECKBOX FUNCTION

const rmCheck = document.getElementById("logCheck"),
    emailInput = document.getElementById("email-login");

function lsRememberMe() {
    rmCheck.checked && "" !== emailInput.value
        ?
        (localStorage.username = emailInput.value, localStorage.checkbox = rmCheck.value)
        :
        (localStorage.username = "", localStorage.checkbox = "")
}

localStorage.checkbox && "" !== localStorage.checkbox
    ?
    (rmCheck.setAttribute("checked", "checked"), emailInput.value = localStorage.username)
    :
    (rmCheck.removeAttribute("checked"), emailInput.value = "");

// LOGIN AND SIGN UP CHANGE TAB

signUp.addEventListener("click", (() => {
    container.classList.add("active")
})),
    login.addEventListener("click", (() => {
        container.classList.remove("active")
    }));

// NAME VALIDATION

const nameReg = document.getElementById('name'),
    signUpButton = document.getElementById('sign-up-button'),
    nameAlert3 = document.getElementById('name_alert3'),
    nameAlert4 = document.getElementById('name_alert4');

function validate_nameReg() {
    // Full Name
    let pattern1a = /^(?!([A-Z][a-z]*|[A-Z]\.)$)(?!([A-Z][a-z]* [A-Z]\.)$)[A-Z][a-z]+(?: [A-Z]\.)?(?: [A-Z][a-z]+)*$/;
    // Full Name with Middle Initial
    let pattern1b = /^(?!([A-Z][a-z]*|[A-Z]\.)$)(?!([A-Z][a-z]* [A-Z]\.)$)[A-Z][a-z]+(?: [A-Z][a-z]+| [A-Z]'[A-Za-z]{2,})*$/;
    //Full Name with Hyphenated Middle Name
    let pattern1c = /^(?!([A-Z][a-z]*|[A-Z]\.)$)(?!([A-Z][a-z]* [A-Z]\.)$)[A-Z][a-z]+(?: [A-Z]\.)?(?: [A-Z][a-z]+)*(?:-[A-Z][a-z]+)?$/;
    // Chinese
    let pattern2 = /(\p{Script=Hani})+/gu;
    // Korean
    let pattern3 = /[\u3131-\uD79D]/ugi;
    // Japanese
    let pattern4 = /[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[々〆〤ヶ]+/u;

    nameReg.value.match(pattern1a)
        || nameReg.value.match(pattern1b)
        || nameReg.value.match(pattern1c)
        || nameReg.value.match(pattern2)
        || nameReg.value.match(pattern3)
        || nameReg.value.match(pattern4)
        ?
        (
            nameReg.style.border = "2px solid #00b300",
            nameAlert3.innerHTML = '<i class="uil uil-check-circle" style="right: 10px; color: #00b300;"></i>',
            nameAlert4.innerHTML = "You entered a valid name.",
            signUpButton.disabled = !1,
            signUpButton.style.opacity = 1
        )
        :
        (
            nameReg.style.border = "1px solid #dc143c",
            nameAlert3.innerHTML = '<i class="uil uil-exclamation-triangle" style="right: 10px; color: #dc143c;"></i>',
            nameAlert4.innerHTML = "You entered an invalid name!",
            signUpButton.disabled = !0,
            signUpButton.style.opacity = 0.4
        );
}

// SIGN UP EMAIL VERIFICATION

const emailReg = document.getElementById('email-sign-up'),
    emailAlert3 = document.getElementById('email_alert3'),
    emailAlert4 = document.getElementById('email_alert4');

function validate_emailReg() {
    emailReg.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g)
        ?
        (
            emailReg.style.border = "2px solid #00b300",
            emailAlert3.innerHTML = '<i class="uil uil-check-circle" style="right: 10px; color: #00b300;"></i>',
            emailAlert4.innerHTML = "Your email address is valid.",
            signUpButton.disabled = !1,
            signUpButton.style.opacity = 1
        )
        :
        (
            emailReg.style.border = "1px solid #dc143c",
            emailAlert3.innerHTML = '<i class="uil uil-exclamation-triangle" style="right: 10px; color: #dc143c;"></i>',
            emailAlert4.innerHTML = "Your email address is invalid!",
            signUpButton.disabled = !0,
            signUpButton.style.opacity = 0.4
        )
}

// PASSWORD STRENGTH

const passSign = document.getElementById("password-sign-up"),
    message = document.getElementById("message"),
    strength = document.getElementById("strength");

passSign.addEventListener("input", (() => {
    passSign.value.length > 0 ? message.style.display = "block"
        :
        message.style.display = "none",
        passSign.value.length < 6
            ?
            (
                strength.innerHTML = "weak!",
                passSign.style.border = "1px solid #dc143c", message.style.color = "#dc143c"
            )
            :
            passSign.value.length >= 6 && passSign.value.length < 8
                ?
                (
                    strength.innerHTML = "good.",
                    passSign.style.border = "1.75px solid #daa520",
                    message.style.color = "#daa520"
                )
                :
                passSign.value.length > 8 && (
                    strength.innerHTML = "strong!",
                    passSign.style.border = "2px solid #00b300",
                    message.style.color = "#00b300"
                )
}));

// PASSWORD VERIFICATION

const passCon = document.getElementById('password-confirm'),
    passAlert1 = document.getElementById('pass_alert1'),
    passAlert2 = document.getElementById('pass_alert2');

function validate_password() {

    let password = document.getElementById('password-sign-up').value;
    let confirmPassword = document.getElementById('password-confirm').value;

    password != confirmPassword
        ?
        (
            passCon.style.border = "2px solid #DC143C",
            passAlert1.innerHTML = '<i class="uil uil-exclamation-triangle" style="right: 35px; color: #dc143c;"></i>',
            passAlert2.innerHTML = "Password does not match",
            signUpButton.disabled = !0,
            signUpButton.style.opacity = 0.4
        )
        :
        (
            passCon.style.border = "2px solid #00b300",
            passAlert1.innerHTML = '<i class="uil uil-check-circle" style="right: 35px; color: #00b300;"></i>',
            passAlert2.innerHTML = "Password matched",
            signUpButton.disabled = !1,
            signUpButton.style.opacity = 1
        );
}

// TERMS AND CONDITIONS CHECKBOX FUNCTION

const tacAlert1 = document.getElementById('tac_alert1'),
    tacAlert2 = document.getElementById('tac_alert2');

function checkForm(form) {
    return !!form.agree.checked
        ||
        (
            tacAlert1.innerHTML = '<p style="font-size: 0.625rem; font-style: italic; right: 35px; color: #dc143c;">Required*</p>',
            tacAlert2.innerHTML = "Please indicate that you accept the Terms and Conditions",
            !1
        )
}