//your JS code here. If required.
 const inputs = document.querySelectorAll(".code");

    inputs[0].focus();

    inputs.forEach((input, index) => {
      input.addEventListener("keydown", (e) => {
        // Allow only numbers and backspace
        if (
          e.key !== "Backspace" &&
          isNaN(e.key)
        ) {
          e.preventDefault();
        }
      });

      input.addEventListener("input", (e) => {
        if (input.value && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
          if (input.value === "" && index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = "";
          }
        }
      });
    });