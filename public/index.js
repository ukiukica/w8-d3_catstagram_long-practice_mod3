import { createMainContent, createTitle } from './main.js';

const initializePage = () => {
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

window.onload = () => {
    initializePage();
    createTitle();

    let count = 0;

    const buttonNew = document.createElement("button");
    buttonNew.innerText = "Get Cat";
    document.body.append(buttonNew);
    buttonNew.addEventListener("click", createMainContent)

    const score = document.createElement('h4');
    document.body.append(score)
    score.innerText = `Popularity Score: ${count}`

    const buttonUp = document.createElement("button");
    buttonUp.innerText = "Upvote";
    document.body.append(buttonUp);
    buttonUp.addEventListener("click", upvote)

    const buttonDown = document.createElement("button");
    buttonDown.innerText = "Downvote";
    document.body.append(buttonDown);
    buttonDown.addEventListener("click", downvote)

    function upvote() {
        count++;
        score.innerText = `Popularity Score: ${count}`
    }

    function downvote() {
        count--;
        score.innerText = `Popularity Score: ${count}`
    }
};
