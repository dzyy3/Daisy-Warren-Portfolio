function fetchFromInput() {
    const breed = document.getElementById("breed").value;
    const country = document.getElementById("country").value;

    // search for all images that match the queries
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isHighlight=true&q=" + breed) 
    .then(response => response.json())
    .then(data => {
        // only proceed if the response contains objectIDs
        if (data.objectIDs && data.objectIDs.length > 0) {
            handleArtListFetch(data);
        } else {
            console.error("No objects found for the query."); 
        }
    })
    .catch(error => console.error(error));
}


// event listener for the form submission
document.getElementById("dogInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    fetchFromInput();
});


function handleArtListFetch(data) {
    const artList = data.objectIDs; // converts the objectIDs into an array (easier to work with)

    function fetchRandomArt() {
        let randObjectID = artList[Math.floor(Math.random() * artList.length)];
        
        // search using object ID (randomArt) to get the image (plus other info)
        fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randObjectID)
            .then(response => response.json())
            .then(data => {
                if (data.primaryImageSmall === "") {
                    // if no image, fetch another random art
                    console.error("No image found for this object. Fetching another one...");
                    fetchRandomArt();
                } else {
                    handleImagesFetch(data);
                }
            })
            .catch(error => console.log(error));
    }

    fetchRandomArt(); // initial fetch
}


// assign the selected art piece's data to HTML elements
function handleImagesFetch(imagedata) {
    console.log(imagedata);
    document.getElementById("artTitle").innerHTML = imagedata.title;
    document.getElementById("imageContainer").src = imagedata.primaryImageSmall;
}