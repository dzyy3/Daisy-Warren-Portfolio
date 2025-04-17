document.addEventListener("DOMContentLoaded", () => {
    const questions = ["Q6"];

    questions.forEach(q => {
        const container = document.getElementById(q);
        const buttons = container.querySelectorAll("input.my-input");

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

