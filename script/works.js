document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    document.querySelectorAll('.illustration-item img').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('active');
            document.body.style.overflow = "hidden"; // lock scroll
        });
    });

    modal.addEventListener('click', () => {
        modal.classList.remove('active');
        modalImg.src = "";
        document.body.style.overflow = ""; // unlock scroll
    });
});
