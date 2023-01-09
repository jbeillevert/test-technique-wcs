// -------------------MENUBURGER-------------------

const iconMenuBurger = document.querySelector("#menuBurger");
const navlinks = document.querySelector("#navlinks");

iconMenuBurger.addEventListener("click", () => {
  navlinks.classList.toggle("mobile-menu");
});

// -------------------FORM-------------------
const inputName = document.querySelector("#name");
const inputEmail = document.querySelector("#email");
const inputMessage = document.querySelector("#message");
const formButton = document.querySelector("#button");

function sendForm() {
  if (
    inputName.value === "" ||
    inputEmail.value === "" ||
    inputMessage.value === ""
  ) {
    window.alert("Please, fill the inputs");
    return;
  } else {
    window.alert("Thank you for submitting your message");
  }
}

formButton.addEventListener("click", sendForm);
