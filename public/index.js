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
    const buttonNew = document.createElement("button");
    buttonNew.innerText = "Get Cat";
    document.body.append(buttonNew);
    buttonNew.addEventListener("click", createMainContent)

};
