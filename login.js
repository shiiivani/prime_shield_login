// Checking validity of login form
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#signinForm input");

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
});

// Opening Forgot Password form
document.addEventListener("DOMContentLoaded", () => {
  const forgotPwd = document.querySelector(".forgot-pwd");
  const forgotPwdContainer = document.querySelector(".forgot-pwd-container");
  const mainFormContainer = document.querySelector(".main-form-container");

  forgotPwd.addEventListener("click", () => {
    mainFormContainer.classList.add("hide");
    mainFormContainer.classList.remove("show");
    forgotPwdContainer.classList.add("show");
    forgotPwdContainer.classList.remove("hide");
  });
});

// Sending Reset password link and changing form from Forgot PWD to Pwd reset container functionality
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("#forgotPwdForm input");
  const mainFormContainer = document.querySelector(".main-form-container");
  const forgotPwdContainer = document.querySelector(".forgot-pwd-container");
  const pwdResetContainer = document.querySelector(".pwd-reset-container");
  const resendButton = pwdResetContainer.querySelector("button");
  const forgotPwdForm = document.querySelector("#forgotPwdForm");
  const emailInput = forgotPwdForm.querySelector("input[type='email']");
  const resetMessage = pwdResetContainer.querySelector("p");
  const resendLinkBtn = pwdResetContainer.querySelector("button");
  let countdownTimer;

  // Checking forget pwd form validity
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const inputGroup = input.closest(".input-group");
      if (input.checkValidity()) {
        inputGroup.classList.remove("invalid");
        // Handle Forgot Password Submit
        forgotPwdContainer
          .querySelector('button[type="submit"]')
          .addEventListener("click", (event) => {
            event.preventDefault();
            forgotPwdContainer.classList.add("hide");
            forgotPwdContainer.classList.remove("show");
            pwdResetContainer.classList.add("show");
            pwdResetContainer.classList.remove("hide");
            const email = emailInput.value.trim();

            resetMessage.innerHTML = `We have sent an email to “${email}”<br>with a reset password link.`;

            startCountdown(30);
          });
      } else {
        inputGroup.classList.add("invalid");
      }
    });
  });

  // Handle Back Button in forgot pwd container
  forgotPwdContainer
    .querySelector(".back-btn")
    .addEventListener("click", () => {
      forgotPwdContainer.classList.add("hide");
      forgotPwdContainer.classList.remove("show");
      mainFormContainer.classList.add("show");
      mainFormContainer.classList.remove("hide");
    });

  // Resend the reset pwd link
  resendLinkBtn.addEventListener("click", () => {
    startCountdown(30);
  });

  // Countdown Function
  function startCountdown(seconds) {
    let timeLeft = seconds;

    resendButton.textContent = `Resend in ${timeLeft}s`;
    resendButton.style.pointerEvents = "none";
    resendButton.classList.remove("resend-link-btn");

    clearInterval(countdownTimer);

    countdownTimer = setInterval(() => {
      timeLeft--;
      resendButton.textContent = `Resend in ${timeLeft}s`;

      if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        resendButton.textContent = "Resend";
        resendButton.style.pointerEvents = "";
        resendButton.classList.add("resend-link-btn");
      }
    }, 1000);
  }
});
