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

// Opening and closing faq modal
document.addEventListener("DOMContentLoaded", () => {
  const viewFaqButton = document.querySelector("#view-faq");
  const closeFaqButton = document.querySelector("#close-faq");
  const faqModalContainer = document.querySelector(".faq-modal-container");
  const faqModalContent = document.querySelector(".faq-modal");

  viewFaqButton.addEventListener("click", () => {
    faqModalContainer.classList.add("d-flex");
    faqModalContainer.classList.remove("d-none");
  });

  closeFaqButton.addEventListener("click", () => {
    faqModalContainer.classList.add("d-none");
    faqModalContainer.classList.remove("d-flex");
  });

  faqModalContainer.addEventListener("click", (event) => {
    if (!faqModalContent.contains(event.target)) {
      faqModalContainer.classList.add("d-none");
      faqModalContainer.classList.remove("d-flex");
    }
  });
});
