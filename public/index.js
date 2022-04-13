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
    buttonNew.addEventListener("click", () => {
        createMainContent();
        count = 0;
        score.innerText = `Popularity Score: ${count}`
    })



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

    const comments = document.createElement("h4")
    comments.innerText = "Comments:"
    document.body.append(comments)

    const input = document.createElement("input")
    const value = input.value
    input.setAttribute("placeholder",'add a comment')
    document.body.append(input)

    const buttonSubmit = document.createElement("button")
    buttonSubmit.innerText = "Submit"
    document.body.append(buttonSubmit)

    const commentList = document.createElement("ul")
    commentList.style.border = "1px solid black"
    commentList.style.width = "400px"
    commentList.style.height = "200px"
    document.body.append(commentList)

    
};
