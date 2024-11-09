const busOne = document.querySelector(".busket-1 h1");
const busTwo = document.querySelector(".busket-2 h1");
const left = document.querySelector("#left");
const right = document.querySelector("#right");

left.addEventListener("click", () => {
    let leftNo = +busOne.innerText;
    let rightNo = +busTwo.innerText;
    
    if(rightNo > 0 && leftNo <= 9) {
        busTwo.innerText = rightNo - 1;
        busOne.innerText = leftNo + 1;
    } 
})

right.addEventListener("click", () => {
    let leftNo = +busOne.innerText;
    let rightNo = +busTwo.innerText;
    
    if (rightNo <= 9 && leftNo > 0) {
        busTwo.innerText = rightNo + 1;
        busOne.innerText = leftNo - 1;
    }
});