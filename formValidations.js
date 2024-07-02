function setStyles(styleContainer, isValid) {
  if (isValid == true) {
    const checkElement = styleContainer.querySelector(".fa-circle-check");
    const exclamationElement = styleContainer.querySelector(
      ".fa-circle-exclamation",
    );

    exclamationElement.style.visibility = "hidden";
    checkElement.style.color = "#2dd243";
    checkElement.style.visibility = "visible";
  } else {
    const exclamationElement = styleContainer.querySelector(
      ".fa-circle-exclamation",
    );
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
    setStyles(container, true);
  } else {
    element.style.border = "2px solid #e11";
    setStyles(container, false);
  }
};

export const validateEmail = (element, container) => {};

export const validatePassword = (element, container) => {};

export const validatePassword2 = (element, container) => {};
