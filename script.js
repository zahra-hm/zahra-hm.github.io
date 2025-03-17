import { cardData } from './cardData.js';

const portfolioContainer = document.getElementById('portfolio-container');

// Loop through cardData to create each card and modal
cardData.forEach((card) => {
    const cardElement = document.createElement('div');
    cardElement.className = 'portfolio-card';
    cardElement.onclick = () => openModal(`modal${card.id}`);
    cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <div class="card-content">
            <h3>${card.title}</h3>
        </div>
    `;
    portfolioContainer.appendChild(cardElement);

    const modal = document.createElement('div');
    modal.id = `modal${card.id}`;
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close" data-modal-id="modal${card.id}">&times;</button>
            <img src="${card.image}" alt="${card.title}">
            <hr class="divider">
            <h3>${card.title}</h3>
            <p>${card.modalText}</p>
        </div>
    `;
    document.body.appendChild(modal);
});

// Function to open a modal
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
    }
}

// Function to close a modal
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Attach event listeners to all close buttons **AFTER** modals are created
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
        const modalId = event.target.getAttribute("data-modal-id");
        closeModal(modalId);
    }
});
