let userscore=0;
let compscore=0;


document.addEventListener("DOMContentLoaded", () => {
   
    const choices=document.querySelectorAll(".choice");
    const msg=document.querySelector(".msg");
    const userscorepara=document.querySelector("#userscore");
    const compscorepara=document.querySelector("#computerscore");

    choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice=choice.getAttribute("id");
        console.log("Choice was clicked",userchoice);
        playgame(userchoice);
        
        })

    const playgame=(userchoice)=>{
        console.log("user choice =",userchoice);
        const compchoice=gencompchoice();
        console.log("comp choice =",compchoice);
        if(userchoice==compchoice){
            console.log("Draw game")
            msg.innerText="Draw Game ,Play Again"
        }else{
            let userwin=true;
            if(userchoice==="rock"){
                userwin=compchoice==="paper" ? false: true;
            }
            else if(userchoice==="paper"){
                userwin=compchoice==="scissor" ? false: true;
            }
            else{
                userwin=compchoice==="rock" ? false: true;
            }
            showwinner(userwin,userchoice,compchoice);
            }
    }
    const gencompchoice=()=>{
        const options=["rock","paper","scissor"];
        const rndidx=Math.floor(Math.random()*3);
        return options[rndidx];


    }
    const showwinner=(userwin,userchoice,compchoice)=> {
        if(userwin){
            console.log("You win");
            msg.innerText=`You Win! your ${userchoice} beats ${compchoice}`;
            userscore++;
            userscorepara.innerText=userscore;
        }else{
            console.log("You lose");
            msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
            compscore++;
            compscorepara.innerText=compscore;
        }
    }
});
});