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
            <div class="modal-text">
                <h3>${card.title}</h3>
                <hr class="divider">
                <p>${card.modalText}</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
});

// Function to open a modal
function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add("active"), 10);
    }
}

// Function to close a modal
function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove("active");
        setTimeout(() => (modal.style.display = 'none'), 300);
    }
}

// Attach event listeners to all close buttons
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close")) {
        const modalId = event.target.getAttribute("data-modal-id");
        closeModal(modalId);
    }
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', function (e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
            modal.classList.remove('active');
        }
    });
});

