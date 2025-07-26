const carForm = document.getElementById('carForm');
const carList = document.getElementById('carList');

carForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const carName = document.getElementById('carName').value;
  const year = document.getElementById('year').value;
  const price = document.getElementById('price').value;
  const location = document.getElementById('location').value;
  const imageUrl = document.getElementById('imageUrl').value;

  const carCard = document.createElement('div');
  carCard.classList.add('car-card');
  carCard.innerHTML = `
    <img src="${imageUrl}" alt="${carName}" />
    <h3>${carName} (${year})</h3>
    <p><strong>Price:</strong> ₹${price}/day</p>
    <p><strong>Location:</strong> ${location}</p>
  `;

  carList.appendChild(carCard);
  carForm.reset();
});
