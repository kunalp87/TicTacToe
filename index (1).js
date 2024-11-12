let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let resetGameBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener('click', function(event) {
        console.log("Box was clicked");
        if (box.innerText === "") {  // To prevent overwriting
            box.innerText = turnO ? "O" : "X";
            if(turnO==true){
                box.style.backgroundColor="pink";
                box.style.color="rgb(175, 8, 8)";
    
            }
            else{
                box.style.backgroundColor="grey";
                box.style.color="black";
            }
            turnO = !turnO;
            checkWinner();
        }
        
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}!`;
    // msgContainer.classList.remove("hide");
    boxes.forEach(box => box.style.pointerEvents = "none"); // Disable clicks on all boxes
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner", pos1val);
            showWinner(pos1val);
            resetGameBtn.disabled = true;
            return;
        }
    }
};

newGameBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
        box.style.backgroundColor="white";
    });
    msgContainer.classList.add("hide");
    resetGameBtn.disabled = false;
    msg.innerText = "Winner";
    turnO = true;
    
});

resetGameBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
        box.style.backgroundColor="white";
    });
    msgContainer.classList.add("hide");
    msg.innerText = "Winner";
    turnO = true;
    
});
