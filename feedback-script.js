function sendFeedback(){
    let feedbackInput = document.getElementById("commenter-feedback").value;
    let feedbackName = document.getElementById("commenter-name").value;
    if (feedbackInput == "" || feedbackName == ""){
        return;
    }
    let card = document.createElement("div");
    card.classList.add("feedback-card");
    let subtitle = document.createElement("h3");
    subtitle.innerText = feedbackName;
    let paragraph = document.createElement("p");
    paragraph.innerText = feedbackInput;
    card.append(subtitle);
    card.append(paragraph);
    let targetSection = document.querySelector(".feedback-list");
    targetSection.append(card);
    document.getElementById("commenter-feedback").value = "";
    document.getElementById("commenter-name").value = "";
}

let button = document.getElementById("send-feedback-button");
button.addEventListener("click", sendFeedback);