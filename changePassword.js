// Checking validity of signup form
const inputs = document.querySelectorAll("#signupForm input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    const inputGroup = input.closest(".input-group");
    if (input.checkValidity()) {
      inputGroup.classList.remove("invalid");
    } else {
      inputGroup.classList.add("invalid");
    }
  });
});

// Toggling password input
document.addEventListener("DOMContentLoaded", () => {
  const inputGroups = document.querySelectorAll(".input-group");

  inputGroups.forEach((group) => {
    const input = group.querySelector("input");
    const eyeClosed = group.querySelector(".eyes-close");
    const eyeOpen = group.querySelector(".eyes-open");

    if (input && eyeClosed && eyeOpen) {
      eyeClosed.addEventListener("click", () => {
        input.type = "text";
        eyeClosed.classList.add("d-none");
        eyeOpen.classList.remove("d-none");
      });

      eyeOpen.addEventListener("click", () => {
        input.type = "password";
        eyeOpen.classList.add("d-none");
        eyeClosed.classList.remove("d-none");
      });
    }
  });
});

// Checking validity of login form
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#signinForm input");
  const mainFormContainer = document.querySelector(".main-form-container");
  const forgotPwdContainer = document.querySelector(".forgot-pwd-container");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const inputGroup = input.closest(".input-group");
      if (input.checkValidity()) {
        inputGroup.classList.remove("invalid");
        mainFormContainer
          .querySelector('button[type="submit"]')
          .addEventListener("click", (event) => {
            event.preventDefault();
            mainFormContainer.classList.add("hide");
            mainFormContainer.classList.remove("show");
            forgotPwdContainer.classList.add("show");
            forgotPwdContainer.classList.remove("hide");
          });
      } else {
        inputGroup.classList.add("invalid");
      }
    });
  });
});

// Submitting new password
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#changePwdForm input");
  const changePwdContainer = document.querySelector(".change-pwd-container");
  const confirmationContainer = document.querySelector(
    ".confirmation-container"
  );

  // Checking forget pwd form validity
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const inputGroup = input.closest(".input-group");
      if (input.checkValidity()) {
        inputGroup.classList.remove("invalid");
        // Handle Forgot Password Submit
        changePwdContainer
          .querySelector('button[type="submit"]')
          .addEventListener("click", (event) => {
            event.preventDefault();
            changePwdContainer.classList.add("hide");
            changePwdContainer.classList.remove("show");
            confirmationContainer.classList.add("show");
            confirmationContainer.classList.remove("hide");
          });
      } else {
        inputGroup.classList.add("invalid");
      }
    });
  });
});
