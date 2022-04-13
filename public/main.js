export const createTitle = () => {
    let container = document.querySelector(".container");
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";
    container.appendChild(h1);
}

export const createMainContent = () => {
    // Create img
    let container = document.querySelector(".container");
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    container.appendChild(img);

    fetchImage();
};


const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};
