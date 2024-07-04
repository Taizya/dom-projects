
function setStyles(styleContainer, isValid) {
  if (isValid == true) {
    const checkElement = styleContainer.querySelector(".fa-circle-check");
    const exclamationElement = styleContainer.querySelector(".fa-circle-exclamation");

    exclamationElement.style.visibility = "hidden";
    checkElement.style.color = "#2dd243";
    checkElement.style.visibility = "visible";
  } else {
    const exclamationElement = styleContainer.querySelector(".fa-circle-exclamation");
    const checkElement = styleContainer.querySelector(".fa-circle-check");

    checkElement.style.visibility = "hidden";
    exclamationElement.style.color = "#e11";
    exclamationElement.style.visibility = "visible";
  }
}

export const validateUsername = (element, container) => {
  const username = element.value;
  if (username.length >= 3) {
    element.style.border = "2px solid #2dd243";

    const errElement = container.querySelector(".name-err-msg")
    errElement.style.visibility = "hidden"

    setStyles(container, true);
  } else {
    element.style.border = "2px solid #e11";

    const errElement = container.querySelector(".name-err-msg")
    errElement.innerText = "Enter Atleast three characters"
    errElement.style.visibility = "visible"

    setStyles(container, false);
  }
};

export const validateEmail = (element, container) => {

    const email = element.value
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const result = emailPattern.test(email)
    
    if (result == true) {
        
        const errElement = container.querySelector(".email-err-msg")

        errElement.style.visibility = "hidden"
        element.style.border = "2px solid #2dd243";
        
        setStyles(container, true)
    } else {

        element.style.border = "2px solid #e11";
        const errElement = container.querySelector(".email-err-msg")

        errElement.innerText= "Invalid Email adress"
        errElement.style.visibility = "visible"

        setStyles(container, false)
    }
};

export const validatePassword = (element, container) => {};

export const validatePassword2 = (element, container) => {};
