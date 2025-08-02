document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("signupEmail");
  const passwordInput = document.getElementById("signupPassword");
  const phoneInput = document.getElementById("phone_number");
  const addressInput = document.getElementById("address");

  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Clear messages
    errorMessage.textContent = "";
    successMessage.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const phone_number = phoneInput.value.trim();
    const address = addressInput.value.trim();

    // Basic validation
    if (!name || !email || !password || !phone_number || !address) {
      errorMessage.textContent = "All fields are required.";
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone_number,
          address
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed.");
      }

      successMessage.textContent = "Signup successful!";
      // Optionally store JWT in localStorage:
      localStorage.setItem("token", data.token);

      // Redirect or do something else after signup
      setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
      }, 1500);

    } catch (error) {
      errorMessage.textContent = error.message;
    }
  });
});
