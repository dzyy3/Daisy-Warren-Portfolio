//simple questions console log to test if working
const q1Answer = localStorage.getItem("Q1");
console.log("Q1 Answer:", q1Answer);


const q2Answer = localStorage.getItem("Q2");
console.log("Q2 Answer:", q2Answer);


const q3Answer = localStorage.getItem("Q3");
console.log("Q3 Answer:", q3Answer);


const q4Answer = localStorage.getItem("Q4");
console.log("Q4 Answer:", q4Answer);


const q5Answer = localStorage.getItem("Q5");
console.log("Q5 Answer:", q5Answer);

const q6Answer = localStorage.getItem("Q6");
console.log("Q6 Answer:", q6Answer);

//slider answers! (Learned in class)
addEventListener("DOMContentLoaded", sliderText);

const sliders = ["lastDrawing"];

const drawingMessageMap = {
    lastDrawing: [
        "answer low",
        "answer medium",
        "answer high"
    ]
    // ,

    // desire: [
    //     "answer low",
    //     "answer med",
    //     "anser high"
    // ]
}

function sliderText() {

    //find and store
    const responseContainer = document.getElementById("response-container");

    //for the one slider, check what response should be created
    for (let i = 0; i < sliders.length; i++) {
        const sliderType = sliders[i];
        const sliderValue = localStorage.getItem(sliderType);

        const targetTextContent = calculateResponseText(sliderType, sliderValue);

        //inserting the slider into the paragraph
        const newParagraph = document.createElement("p");
        newParagraph.textContent = targetTextContent;
        responseContainer.appendChild(newParagraph);
    }

}

function calculateResponseText(type, value) {

    //round the slider value to one of the whole number responces
    const roundedSliderValue = Math.floor(Number(value));
    //check and then display message
    const targetMessage = drawingMessageMap[type][roundedSliderValue];

    return targetMessage;
}