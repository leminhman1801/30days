const openModalCard = document.querySelector(".modal-open");
const modalCard = document.querySelector(".modal-card");
const closeModalCard = document.querySelector(".btn-close");
const cardName = document.querySelector(".card-content");

function openModal() {
  modalCard.classList.add("open");
  //   openModal.classList.add{"remove"};
}
function closeModal() {
  modalCard.classList.remove("open");
}

openModalCard.addEventListener("click", openModal);
closeModalCard.addEventListener("click", closeModal);
modalCard.addEventListener("click", closeModal);
function clickOutside(event) {
  event.stopPropagation();
}
cardName.addEventListener("click", clickOutside);
