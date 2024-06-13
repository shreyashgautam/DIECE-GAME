let img1=document.querySelector(".img1");
let img2=document.querySelector(".img2");
let btn=document.querySelector("button");
let winner=document.querySelector("#win");
let player1=document.querySelector(".player1score");
let player2=document.querySelector(".player2score");
let score1=0;
let score2=0;
function generate(){
    return Math.floor(Math.random()*6)+1;
}
function printwinner(x,y){
    if(x>y){
        score1++;
        winner.innerText="Winner is Player 1";
        player1.innerText=`Score = ${score1}`;
    }
    else if(x<y){
        score2++;
        winner.innerText="Winner is Player 2";
        player2.innerText=`Score = ${score2}`;
    }
    else if(x==y){
        winner.innerText="TIE";
    }
}
btn.addEventListener("click",function(){
    let y=generate();
    let x=generate();
    console.log(x,y);
    printwinner(x,y);
    if(x==1){
        img1.setAttribute("src","./images/dice1.png");
    }
    else if(x==2){
        img1.setAttribute("src","./images/dice2.png");
    }
    else if(x==3){
        img1.setAttribute("src","./images/dice3.png");
    }
    else if(x==4){
        img1.setAttribute("src","./images/dice4.png");
    }
    else if(x==5){
        img1.setAttribute("src","./images/dice5.png");
    }
    else if(x==6){
        img1.setAttribute("src","./images/dice6.png");
    }
    if(y==1){
        img2.setAttribute("src","./images/dice1.png");
    }
    else if(y==2){
        img2.setAttribute("src","./images/dice2.png");
    }
    else if(y==3){
        img2.setAttribute("src","./images/dice3.png");
    }
    else if(y==4){
        img2.setAttribute("src","./images/dice4.png");
    }
    else if(y==5){
        img2.setAttribute("src","./images/dice5.png");
    }
    else if(y==6){
        img2.setAttribute("src","./images/dice6.png");
    } 
})

