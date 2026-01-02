
document.addEventListener("DOMContentLoaded", () => {
    // Discord link
    const discordLink = document.querySelector('.contact-item[href*="discord.com"]');

    // Create modal container (without the image yet)
    const modal = document.createElement("div");
    modal.id = "discordModal";
    modal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        align-items: center;
        justify-content: center;
    `;
    document.body.appendChild(modal);

    // Click Discord -> create and show image
    discordLink.addEventListener("click", (e) => {
        e.preventDefault();

        // Only create image if it doesn’t exist yet
        if (!modal.querySelector("img")) {
            const img = document.createElement("img");
            img.src = "../images/screenshots/discord_profile.png"; // <-- your image path here
            img.style.cssText = `
                max-width: 80%;
                max-height: 80%;
                border-radius: 12px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.7);
                animation: popin 0.3s ease;
            `;
            modal.appendChild(img);
        }

        modal.style.display = "flex";
    });

    // Click anywhere on modal -> hide
    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Optional pop-in animation
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes popin {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
});
