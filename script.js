const API_URL = 'https://v1.nocodeapi.com/ngecerr/google_sheets/tzmCAoQxioxGMKDx?tabId=Ceramics%20in%20Islamic%20Empires)
';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById('gallery');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'artifact';

      card.innerHTML = `
        <h2>${item.Name}</h2>
        <img src="${item["Image Link"]}" alt="${item.Name}">
        <p><strong>Description:</strong> ${item.Description}</p>
        <p><strong>Findspot:</strong> ${item.Findspot}</p>
        <p><strong>Date:</strong> ${item.Date}</p>
        <p><strong>Provenance:</strong> ${item.Provenance}</p>
        <p><strong>Material:</strong> ${item.Material}</p>
        <p><strong>Dimensions:</strong> ${item.Dimensions}</p>
      `;

      gallery.appendChild(card);
    });
  })
  .catch(error => console.error('Failed to fetch data:', error));
