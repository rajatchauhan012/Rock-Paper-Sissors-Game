let userScore = 0;
let comScore = 0; 

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#comp-score")

const genComChoice = () => {
    const options = ["rock","paper","scissors"];
  const randomIdx = Math.floor(Math.random()*3);
  return options[randomIdx];
};

const drawGame = () =>{
};
const showwinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you Win");
        msg.innerText = `you Win!  your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColour = "green";
    }
    else{
        comScore++;
        comScorePara.innerText = comScore;
        console.log("you lose");
        msg.innerText = `you lose!  your${compChoice} beats ${userChoice}`;
        msg.style.backgroundColour ="red";
    }
}
const playgame = (userChoice)=>{
    console.log("userChoice=", userChoice)
    const compChoice = genComChoice();
    console.log("com choice = ", compChoice)

    if(userChoice === compChoice){
        drawGame();
        msg.innerText = "Match was Draw";
        msg.style.backgroundColour ="#081b31";
    }else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin = compChoice === "paper" ? false: true;
        }
       else if(userChoice ==="paper"){
           userWin =  compChoice === "scissors" ? false: true;
        }else{
            userWin = compChoice ==="rock" ? false :true;
        }
        showwinner(userWin , userChoice, compChoice);
    }


}
choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    })
})