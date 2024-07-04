import {
  validateUsername,
  validateEmail,
  validatePassword,
  validatePassword2,
} from "./formValidations";

export function setupForms(element) {
  element.innerHTML = `
    <div>
        <h1>Registration Form</h1>
        <div id="form-container">
            <form>
                <div class="form-group group1" id="username-container">
                    <label>Username</label><br>
                    <input type="text" id="username" placeholder="Enter your name"><br>
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <small class="name-err-msg">Error Msg</small>
                </div>
                
                <div class="form-group group2" id="email-container">
                    <label>Email</label><br>
                    <input type="emai" id="email-address" placeholder="Enter your email"><br>
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <small class="email-err-msg">Error Msg</small>
                </div>

                <div class="form-group group3" id="password-container">
                    <label>Password</label><br>
                    <input type="password" id="password" placeholder="Enter your password"><br>
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <small class="pswd-err-msg">Error Msg</small>
                </div>

                <div class="form-group group4" id="password2-container">
                    <label>Retype Password</label><br>
                    <input type="password" id="password-2" placeholder="Enter your password again"><br>
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <small class="pswd2-err-msg">Error Msg</small>
                </div>

                <button id="submit-button">Submit</button><br>
            </form>
        </div>
    </div>
    `;

  const usernameElement = document.querySelector("#username");
  const usernameContainer = document.getElementById("username-container");
  usernameElement.addEventListener("change", () => {
    validateUsername(usernameElement, usernameContainer);
  });

  const emailElement = document.querySelector("#email-address");
  const emailContainer = document.querySelector("#email-container")
  emailElement.addEventListener("change", () => {
    validateEmail(emailElement, emailContainer)
  }) 

  const passwordElement = document.querySelector("#password");
  passwordElement.addEventListener("change", validatePassword(passwordElement));

  const password2Element = document.querySelector("#password-2");
  password2Element.addEventListener("change",validatePassword2(password2Element));

}
