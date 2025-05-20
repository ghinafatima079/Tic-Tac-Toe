
let boxes = document.querySelectorAll("#box");
let reset = document.querySelector("#reset");
let game = document.querySelector("#game");
let winner = document.querySelector("#winner");
let scoreX = document.querySelector("#x");
let scoreO = document.querySelector("#o");
let turnO = true;
let countX = 0;
let countO = 0;

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else{
            turnO = true;
            box.innerText = "X";
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winningPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "" ){
            if( pos1Val === pos2Val && pos2Val === pos3Val){
                winner.innerText = "The winner is " + pos1Val;
                console.log("winner", pos1Val);
                for (let box of boxes){
                    box.disabled = true;
                }
                if (pos1Val === "X"){
                    countX++;
                    scoreX.innerText = countX;
                } else{
                    countO++;
                    scoreO.innerText = countO;
                }
            }
        }
    }
};

reset.addEventListener("click", () =>{
    turnO = true;
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    winner.innerText = "";
});