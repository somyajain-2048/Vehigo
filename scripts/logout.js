const logoutBtn = document.getElementById("logoutBtn");
if (localStorage.getItem("token")) {
  logoutBtn.style.display = "inline-block";
}

// Handle logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("token");
  alert("Logged out successfully!");
  window.location.href = "login.html";
});