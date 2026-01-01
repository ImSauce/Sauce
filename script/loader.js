document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader_wrapper");
    const body = document.body;

    setTimeout(() => {
        loader.classList.add("wave-exit"); // start wave drop

        setTimeout(() => {
            loader.remove();               // kill loader
            body.classList.remove("preload");
        }, 1000); // match CSS transition
    }, 1200); // edit the speed of which the wave in the loader will go down type shi
});
