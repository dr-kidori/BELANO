        document.addEventListener("DOMContentLoaded", () => {
            const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImage");
            const closeBtn = document.querySelector(".close");

        function imageOpen() {
            // Add click event to all images inside .item
        document.querySelectorAll(".item img").forEach((img) => {
            img.addEventListener("click", () => {
                modal.style.display = "block";
                modalImg.src = img.src; // Set modal image to clicked image
            });
        });

        // Close the modal when the close button is clicked
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Close the modal when clicking outside the image
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
            
        }

        imageOpen();
    });
