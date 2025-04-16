document.addEventListener("DOMContentLoaded", () => {
    const questions = ["Q4", "Q5"];

    readAndStoreSliderValues();

    questions.forEach(q => {
        const container = document.getElementById(q);
        const buttons = container.querySelectorAll("button");

        buttons.forEach(button => {
            const answerId = button.id;

            // On load, check if this was selected
            const storedAnswer = localStorage.getItem(q);
            if (storedAnswer === answerId) {
                button.classList.add("selected");
            }

            button.addEventListener("click", () => {
                // Save to localStorage
                localStorage.setItem(q, answerId);

                // Remove highlight from all buttons in this question
                buttons.forEach(btn => btn.classList.remove("selected"));

                // Add highlight to clicked one
                button.classList.add("selected");
            });
        });
    });
});

function readAndStoreSliderValues() {
    //store slider value in local storage
    const drawingSlider = document.getElementById("drawing-slider");

    // Set initial value in localStorage (meduium 1.5)
    localStorage.setItem("lastDrawing", drawingSlider.value);

    // Listen for slider input changes and update localStorage as the slider is changed after intial value was set
    drawingSlider.addEventListener("input", () => {
        localStorage.setItem("lastDrawing", drawingSlider.value);
    });
}
