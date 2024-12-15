document.addEventListener("DOMContentLoaded", () => {
    // Get button by button HTML class name
    const button = document.getElementsByClassName("button")[0];

    // Event listener, triggers on click
    button.addEventListener("mousemove", () => {
        // logs to console
        console.log("you clicked this button");

        document.body.style.backgroundColor = `rgb(${randomNumber(1,255)},${randomNumber(1,255)},${randomNumber(1,255)})`;
    });
    function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }
    
});