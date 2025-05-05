const artListURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects/all";

function getURLFromBreed(breed) {
    return(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectNumber}`);
}

fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(handleBreedListFetch)
    .catch(error => console.log(error));



function handleBreedListFetch(data) {
    // pick random breed from the list
    const breedList = Object.keys(data.message); // object helper method that transforms an object's keys into an array
    const randomBreed = breedList[Math.floor(Math.random() * breedList.length)];
    
    console.log(randomBreed);

    fetch(getURLFromBreed(randomBreed))
        .then(response => response.json())
        .then(handleImagesFetch)
        .catch(error => console.log(error));
}


function handleImagesFetch(imagedata) {
    console.log(imagedata);
    let imagePathList = imagedata.message;

    const imageCount = 6;
    for (let i = 0; i < imageCount; i++) {
        let randomIDx = Math.floor(Math.random() * imagePathList.length);
        let randomPath = imagePathList[randomIDx];
        console.log(randomPath);

        let imgElement = document.createElement("img");
        imgElement.src = randomPath;
        document.body.appendChild(imgElement);
    }
}