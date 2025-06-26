// filepath: /Users/khalinganeson-hands/Documents/GitHub/Websites/businessIdeas/templates/successStories.html
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const modal = document.getElementById("card-modal");
  const modalDetails = document.getElementById("modal-details");
  const closeBtn = document.getElementById("close-modal");

  cards.forEach((card) => {
    card.style.cursor = "pointer";
    card.addEventListener("click", function () {
      modalDetails.innerHTML = card.innerHTML;
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  });
});
