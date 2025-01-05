let x = true;
let boxes = document.querySelectorAll(".box");
let winner = document.querySelector(".win")
let player1 = prompt(`Enter "X" Player Name`)
let player2= prompt(`Enter "O" Player Name`)



let winPatterns = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
        if (x){
            box.innerText = "X";
            x = false;
            
        }
        else{
            box.innerText = "O";
            x = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


let reset = document.querySelector("#reset")

let checkWinner = () =>{
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if( pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val==pos2Val && pos2Val==pos3Val) {
                if (pos1Val == "X") {
                    winner.innerText = `Congrats!! ${player1} won`     
                }
                else{
                    winner.innerText = `Congrats!! ${player2} won`     

                }
            }
        }
    }
}









reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText = ""
        winner.innerText = ""
    })
})