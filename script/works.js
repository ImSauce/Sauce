document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const downloadBtn = document.getElementById('downloadBtn');

    document.querySelectorAll('.illustration-item img').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('active');
            document.body.style.overflow = "hidden"; // lock scroll

            // Set download button
            downloadBtn.href = img.src;
            downloadBtn.setAttribute('download', img.alt || "image");
        });
    });

    modal.addEventListener('click', (e) => {
        // close modal only if clicked outside image or download button
        if (e.target === modal) {
            modal.classList.remove('active');
            modalImg.src = "";
            document.body.style.overflow = ""; // unlock scroll
        }
    });
});
