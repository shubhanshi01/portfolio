let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset");
let msg=document.querySelector(".message");
let turn=true;
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

const disableBox=()=>{
    for(let box of boxes)
        box.disabled=true;
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
        
    
}
const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msg.classList.remove("hide");
        

}
const resetGame = () => {
    console.log("Resetting the game...");
    enableBox();
    turn = true;
    msg.classList.add("hide");
    msg.innerText = "";
    checkWinner();
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn==true){
            box.textContent="X";
            turn=false;
        }
        else{
            box.textContent="0";
            turn=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner=()=>{
    for(let pattern of win){
        let a=boxes[pattern[0]].innerText;
        let b=boxes[pattern[1]].innerText;
        let c=boxes[pattern[2]].innerText;
        if (a,b,c!=""){
            if (a==b&&b==c)
            {
                console.log("winner",a);
                disableBox();

                showWinner(a);
            }
        }
    }
}
resetButton.addEventListener("click",resetGame);

