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

// addEventListener("DOMContentLoaded", sliderText);
//sliders!
const sliders = ["lastDrawing"];

const drawingMessageMap = {
    lastDrawing: [
        "a while ago",
        "somewhat recently",
        "recently"
    ]
    // ,

    // desire: [
    //     "answer low",
    //     "answer med",
    //     "anser high"
    // ]
}

//no longer needed after paragraph was created
function sliderText() {

    //find and store
    // const responseContainer = document.getElementById("response-container");

    //for the one slider, check what response should be created
    // for (let i = 0; i < sliders.length; i++) {
    //     const sliderType = sliders[i];
    //     const sliderValue = localStorage.getItem(sliderType);

    //     const targetTextContent = calculateResponseText(sliderType, sliderValue);

        //inserting the slider into the paragraph
    //     const newParagraph = document.createElement("p");
    //     newParagraph.textContent = targetTextContent;
    //     responseContainer.appendChild(newParagraph);
    // }

}

function calculateResponseText(type, value) {

    //round the slider value to one of the whole number responces
    const roundedSliderValue = Math.floor(Number(value));
    //check and then display message
    const targetMessage = drawingMessageMap[type][roundedSliderValue];

    return targetMessage;
}

const lastDrawingValue = localStorage.getItem("lastDrawing");
const lastDrawingMessage = calculateResponseText("lastDrawing", lastDrawingValue);


//defining the variables for the different responses to the questions
if (q1Answer == "Q1Yes") Q1 = "enjoyed";
else if (q1Answer == "Q1No") Q1 = "never enjoyed";
else Q1 = "[no answer given]";


if (q2Answer == "Q2Yes") Q2 = "do";
else if (q2Answer == "Q2No") Q2 = "don't";
else Q2 = "[no answer given]";

if (q3Answer == "Q3Yes") Q3 = "do";
else if (q3Answer == "Q3No") Q3 = "don't";
else if (q3Answer == "Q3Depends") Q3 = "sorta";
else Q3 = "[no answer given]";

//slider?

if (q4Answer == "Q4Yes") Q4 = "do";
else if (q4Answer == "Q4No") Q4 = "don't";
else Q4 = "[no answer given]";

if (q5Answer == "Q5Yes") Q5 = "do";
if (q5Answer == "OnlyWithFriends") Q5 = "do";
if (q5Answer == "Q5Yes") Q5 = "do";
else if (q5Answer == "Q5NoWatching") Q5 = "don't enjoy";
else Q5 = "[no answer given]";

if (q1Answer||q2Answer == "Q1No"||"Q2No") Q6 = "maybe explore something out of your comfort zone";
else Q6 = "keep doing what you love";

//printing paragraph onto html 
document.getElementById("results-text").innerHTML = "So you've " + Q1 + " creating art before and you " + Q2 + " currently enjoy creating art now. You " + Q3 + " enjoy drawing in public, and the last time you picked up a pencil or paintbrush was " + lastDrawingMessage + ". You " + Q4 + " wish you could draw more often and you " + Q5 + " drawing in public. You're already packed, so " + Q6 + "!";