
let score = 0;

function rules(clicked){
    if(clicked === 0){
        document.querySelector(".showrules").style.display = "none";
        document.querySelector("body").style.backgroundColor = "hsl(214, 47%, 23%)";
    }else{
        document.querySelector(".showrules").style.display = "block";
        document.querySelector("body").style.backgroundColor = "hsl(214, 47%, 15%)";
    }
}

function start(clicked){
    let move1 = document.querySelectorAll(".images .icons")[(clicked === 2?2:(clicked === 0? 1 : 0))];
    document.querySelector(".images").style.display = "none";
    document.querySelector(".choosenimage").style.display = "inline";
    document.querySelector(".you .icons").innerHTML = move1.innerHTML;
    document.querySelector(".you .icons").classList.add("j"+(clicked));
    document.querySelector(".house .icons").classList.add("delay");

    let x = Math.floor(Math.random()*3);


    setTimeout(()=>{
        document.querySelector(".house .icons").classList.remove("delay");
        let move2 = document.querySelectorAll(".images .icons")[x];
        document.querySelector(".house .icons").innerHTML = move2.innerHTML;
        document.querySelector(".house .icons").classList.add("j"+(x === 2?2:(x === 0? 1 : 0)));
    },2000);

    clicked = clicked === 2?2:(clicked === 0? 1 : 0);
    x = x === 2?2:(x === 0? 1 : 0);

    let game ;
    if(x === clicked)game = "DRAW";
    else if((x+1)%3 === clicked){
        game = "LOSE";
        score--;
    }
    else {
        game = "WIN";
        score++;
    }

    setTimeout(()=>{
        if(game === "WIN"){
            document.querySelector(".house").style.zIndex = 1;
            document.querySelector(".you .icons").classList.add("winningborder"+clicked);
        }else if(game === "LOSE"){
            document.querySelector(".you").style.zIndex = 1;
            document.querySelector(".house .icons").classList.add("winningborder"+x);
        }
        document.querySelector(".winlose").style.display = "inline";
        document.querySelector(".score h3").innerHTML = score;
        document.querySelector(".winlose h1").innerHTML = "YOU " + game;
    },4000);
}

function restart(){
    document.querySelector(".winlose").style.display = "none";

    document.querySelector(".house .icons").innerHTML = "";
    document.querySelector(".you .icons").innerHTML = "";

    document.querySelector(".house .icons").classList.remove("j2","j1","j0");
    document.querySelector(".you .icons").classList.remove("j2","j1","j0");

    document.querySelector(".you .icons").classList.remove("winningborder0","winningborder1","winningborder2");
    document.querySelector(".house .icons").classList.remove("winningborder0","winningborder1","winningborder2");

    document.querySelector(".you").style.zIndex = 0;
    document.querySelector(".house").style.zIndex = 0;

    document.querySelector(".choosenimage").style.display = "none";
    document.querySelector(".images").style.display = "block";

}