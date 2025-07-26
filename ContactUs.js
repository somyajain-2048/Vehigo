const onecards = [
  {
    icon: "✈️",
    title: "Travel Inquiries",
    info: "hello@vehigo.com",
    sub: "Response within 2 hours",
    bgClass: "card-blue",
    iconClass: "icon-blue",
  },
  {
    icon: "🌍",
    title: "24/7 Support",
    info: "1800-100-100",
    sub: "Emergency assistance",
    bgClass: "card-green",
    iconClass: "icon-green",
  },
  {
    icon: "📍",
    title: "Visit Our Office",
    info: "Xyz, New Delhi",
    sub: "Mon-Sat: 9:00AM-6:00PM",
    bgClass: "card-purple",
    iconClass: "icon-purple",
  },
];

const cardsContainer = document.getElementById("ContactUscards");
onecards.forEach((card) => {
  const div = document.createElement("div");
  div.className = `card ${card.bgClass}`;
  div.innerHTML = `
    <div class="icon ${card.iconClass}">${card.icon}</div>
    <div>
      <h4>${card.title}</h4>
      <p class="info">${card.info}</p>
      <p class="sub">${card.sub}</p>
    </div>
  `;
  cardsContainer.appendChild(div);
});

const form = document.getElementById("form");
const success = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hidden");
  success.classList.remove("hidden");
  form.reset();

  setTimeout(() => {
    success.classList.add("hidden");
    form.classList.remove("hidden");
  }, 3000);
});
