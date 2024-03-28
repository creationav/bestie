const nobutton = document.getElementById("no");
const yesbutton = document.getElementById("yes");
const btn = document.querySelector(".btn");

nobutton.addEventListener("mouseenter", () => {
    const yesindex = Array.from(btn.children).indexOf(yesbutton);
    const noindex = Array.from(btn.children).indexOf(nobutton);

    if (yesindex < noindex) {
        btn.insertBefore(nobutton, yesbutton);
    } else {
        btn.insertBefore(yesbutton, nobutton);
    }
})
