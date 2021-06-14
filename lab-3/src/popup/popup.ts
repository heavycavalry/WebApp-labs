export class PopUp {
  mainText: string;
  infoText: string;
  userText?: string;
  constructor(wonText, infoText, userText?) {
    this.mainText = wonText;
    this.infoText = infoText;
    this.userText = userText;
  }

  createPopUp() {
    //CREATE
    const popUpBox = document.createElement("div");
    const wonText = document.createElement("p");
    const infoText = document.createElement("p");
    const userText = document.createElement("p");
    const closeBtn = document.createElement("button");
    //ADD TO HTML
    document.body.appendChild(popUpBox);
    popUpBox.appendChild(wonText);
    popUpBox.appendChild(userText);
    popUpBox.appendChild(infoText);
    popUpBox.appendChild(closeBtn);
    //ADD TEXT
    wonText.innerText = this.mainText;
    userText.innerText = this.userText;
    infoText.innerText = this.infoText;
    closeBtn.innerText = "✖"
    //ADD ID / CLASS
    closeBtn.classList.add("close-btn");
    popUpBox.classList.add("popup-box");
    infoText.classList.add("info-text");
    wonText.classList.add("main-text");
    userText.classList.add("user-text");

    closeBtn.addEventListener('click', () => popUpBox.classList.add("hide"))
  }
}
