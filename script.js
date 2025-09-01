// Modal functionality for image grid
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal")
  const modalImg = document.getElementById("modalImg")
  const modalCaption = document.getElementById("modalCaption")
  const closeBtn = document.querySelector(".modal .close")

  // Attach click event to each container
  document.querySelectorAll(".container").forEach((container) => {
    container.addEventListener("click", function () {
      const img = this.querySelector("img")
      const caption = this.querySelector("span")
      modal.style.display = "block"
      modalImg.src = img.src
      modalImg.alt = img.alt
      modalCaption.textContent = caption.textContent
    })
  })
  // Close modal on X click
  closeBtn.onclick = function () {
    modal.style.display = "none"
  }

  // Close modal on outside click
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
  }
})
