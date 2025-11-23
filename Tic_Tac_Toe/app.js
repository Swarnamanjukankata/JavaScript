let boxes;
let rst=document.querySelector(".rst");
let newgame=document.querySelector(".newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=true;//Player X player O
let arr=[[0,1,2,],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

document.addEventListener("DOMContentLoaded", () => {
   
    boxes = document.querySelectorAll('.box');
    
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("box clicked");
            if(turn){
                box.innerText="O"
                turn=false;
            }else{
                box.innerText="X"
                turn=true;
            }
        box.style.pointerEvents = "none"; // Disable further clicks
        checkwinner();
        });
        
        
    });

});
const resetgame=()=>{
    turn=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}
const enableboxes=()=>{
    boxes.forEach(box => {
        box.innerText = "";
        box.style.pointerEvents = "auto"; // Re-enable clicks
    });
    }

const showwinner=(winner)=>{
    msg.innerText=`Winner,Congratulations ${winner}`
    msgcontainer.classList.remove("hide");
}
const checkwinner=()=>{
    for(let pattern of arr){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;
        if(position1!=="" && position2!=="" && position3!==""){
            if(position1===position2 && position2===position3){
                console.log("Winner",position1);
                boxes.forEach(box => box.style.pointerEvents = "none"); // Disable all clicks after win
                showwinner(position1);
            }
        }
    }
};
document.addEventListener("DOMContentLoaded", () => {
newgame.addEventListener("click",resetgame);
rst.addEventListener("click",resetgame);

});
