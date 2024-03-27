//get elements from DOM

const openModalBtn = document.querySelector(".openModalBtn");
const closeModalBtn = document.querySelector(".closeModalBtn");
const modal = document.querySelector(".modal");

//add click event to open button
openModalBtn.addEventListener("click", () => {
  modal.style.animation = "fadeIn 500ms";
  modal.showModal();
});

//add click event to close button
closeModalBtn.addEventListener("click", () => {
  closeModal();
});

function closeModal() {
  modal.style.animation = "fadeOut 500ms forwards";
  //wait for animation to finish
  modal.addEventListener("animationend", close);
  //close modal
  function close() {
    modal.close();
    modal.removeEventListener("animationend", close); // Change 'animationed' to 'animationend'
  }
}

//add click event to entire modal
modal.addEventListener("click", (e) => {
  //get modal size and position
  const size = modal.getBoundingClientRect();
  //if the click is outside of the modal, also close the modal
  if (
    e.clientX < size.left ||
    e.clientX > size.right ||
    e.clientY < size.top ||
    e.clientY > size.bottom
  ) {
    closeModal();
  }
});
