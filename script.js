const inputs = document.querySelectorAll(".code");

// REQUIRED: initial focus must be on code-1
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    // allow only digits & backspace
    if (e.key !== "Backspace" && isNaN(e.key)) {
      e.preventDefault();
    }
  });

  input.addEventListener("input", () => {
    // move forward
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    // backspace behavior
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      inputs[index - 1].focus();
      inputs[index - 1].value = "";
    }
  });
});
