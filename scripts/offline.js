// Initialize the map centered on India
const map = L.map('map').setView([20.5937, 78.9629], 4);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Vehigo offline center data
const offlineCenters = [
  { name: "Delhi Repair Center",
     coords: [28.6139, 77.2090],
     description: "Fast and reliable service in the heart of the capital.",
    rating: 4.6 
},
  { name: "Mumbai Store", 
    coords: [19.0760, 72.8777],
    description: "Fast and reliable service in the heart of the capital.",
    rating: 4.7
 },
  { name: "Bangalore Service Hub", 
    coords: [12.9716, 77.5946],
description: "Convenient location with multilingual staff",
    rating: 4.1
 },
  { name: "Chennai Repair Point", 
    coords: [13.0827, 80.2707],
    description: "Fast and reliable service in the heart of the capital.",
    rating: 3.5
   },
  { name: "Bejing Repair Point", coords: [39.9042, 116.4074],
    description: "Fast and reliable service in the heart of the capital.",
    rating: 2.6
   },
  { name: "Shanghai Repair Point", coords: [31.2304, 121.4737], 
  description: "Fast and reliable service in the heart of the capital.",
    rating: 4.8},
  { name: "Moscow Repair Point", coords: [55.7569, 37.6151],
    description: "reliable service in the heart of the capital.",
    rating: 3.6
   },
  { name: "Dubai Repair Point", coords: [25.2048, 55.2708],
    description: "Late and less reliable service in the heart of the capital.",
    rating: 1.6
   },
  { name: "London Repair Point", coords: [51.5072, 0.1276],
    description: "Fast and reliable service in the heart of the capital.",
    rating: 3.6
   }
];

// Add markers to the map
offlineCenters.forEach(center => {
  L.marker(center.coords)
    .addTo(map)
    .bindPopup(`<b>${center.name}</b>`);
});




// 🆕 Create cards
const cardsContainer = document.getElementById("center-cards");

offlineCenters.forEach(center => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h2>${center.name}</h2>
    <p>${center.description}</p>
    <p class="rating">⭐ ${center.rating}</p>
  `;

  cardsContainer.appendChild(card);
});