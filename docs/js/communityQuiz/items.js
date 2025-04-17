document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("Community-Quiz-Container");
    const buttons = container.querySelectorAll("button");
    const questionId = "items"; // storage key

    let selectedItems = JSON.parse(localStorage.getItem(questionId)) || [];

    buttons.forEach(button => {
        const id = button.id;

        if (selectedItems.includes(id)) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            if (selectedItems.includes(id)) {
                selectedItems = selectedItems.filter(item => item !== id);
                button.classList.remove("selected");
            } else {
                selectedItems.push(id);
                button.classList.add("selected");
            }

            localStorage.setItem(questionId, JSON.stringify(selectedItems));
        });
    });
});
