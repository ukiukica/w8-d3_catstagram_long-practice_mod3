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

    const buttonDiv = document.createElement('div');
    document.body.append(buttonDiv)

    const buttonUp = document.createElement("button");
    buttonUp.innerText = "Upvote";
    buttonDiv.append(buttonUp);
    buttonUp.addEventListener("click", upvote)

    const buttonDown = document.createElement("button");
    buttonDown.innerText = "Downvote";
    buttonDiv.append(buttonDown);
    buttonDown.addEventListener("click", downvote)

    function upvote() {
        count++;
        score.innerText = `Popularity Score: ${count}`
    }

    function downvote() {
        count--;
        score.innerText = `Popularity Score: ${count}`
    }

    const commentDiv = document.createElement('div');
    document.body.append(commentDiv)

    const comments = document.createElement("span")
    comments.innerText = "Comments:"
    commentDiv.append(comments)

    const input = document.createElement("input")
    // const value = input.value;
    input.setAttribute("placeholder", 'add a comment')
    commentDiv.append(input)

    const buttonSubmit = document.createElement("button")
    buttonSubmit.innerText = "Submit"
    commentDiv.append(buttonSubmit)

    const commentList = document.createElement("ul")
    commentList.style.border = "1px solid black"
    commentList.style.width = "400px"
    commentList.style.height = "200px"
    commentList.style.listStyle = "none"
    document.body.append(commentList)

    // function addComment (value) {
    //     const newLi = document.createElement("li")
    //     newLi.innerText = value;
    //     commentList.append(newLi)
    // }

    buttonSubmit.addEventListener("click", () => {
        const newLi = document.createElement("li")
        let value = input.value;
        newLi.innerText = value;
        commentList.append(newLi);
        input.value = "";
    })

    buttonDiv.style.margin = "5px 0px";
    buttonUp.style.marginRight = "5px"

    commentDiv.style.margin = "5px 0px";
};
document.body.style.display = "flex"
document.body.style.flexDirection = "column"
document.body.style.alignItems = "center"
document.body.style.marginTop = "60px"
