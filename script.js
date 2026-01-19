const inputs = document.querySelectorAll(".code");

// Focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    // Allow only numbers and backspace
    if (e.key !== "Backspace" && isNaN(e.key)) {
      e.preventDefault();
    }
  });

  input.addEventListener("input", () => {
    // Move forward when typing
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener("keydown", (e) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (input.value === "" && index > 0) {
        inputs[index - 1].focus();
        inputs[index - 1].value = "";
      }
    }
  });
});
