let boxes=document.querySelectorAll(".box");
let resetbut=document.querySelector(".reset");
let newbut=document.querySelector(".newGame");
let win=document.querySelector(".win");
let wincontainer=document.querySelector(".winner")

let WinningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let player0=true;
let counter=0

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        counter++;
        console.log("Clicked");  
        if(player0==true){
            box.innerHTML='O'
            player0=false
        }
        else{
            box.innerHTML='X'
            player0=true;
        }
        box.disabled=true

        if(counter>=9){
            draw();
            counter=0;
        }

        checkWinner()

    })
})

const draw=()=>{
    win.innerHTML=`Oops!! The Game is Draw`
    wincontainer.classList.remove('hide');
    disablebox()
}

const resetGame=()=>{
    player0=true;
    enableBox()
    wincontainer.classList.add("hide");
    counter=0;
}

const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML=""
    }
}

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const displaywinner=(winner)=>{
    win.innerHTML=`Congratulation, Winner is: ${winner}`
    wincontainer.classList.remove('hide');
    disablebox()
}

const checkWinner=()=>{
    for(let pattern of WinningPattern){
        let box1=boxes[pattern[0]].innerHTML;
        let box2=boxes[pattern[1]].innerHTML;
        let box3=boxes[pattern[2]].innerHTML;

        if(box1!="" && box2!="" && box3!=""){
            if(box1===box2 && box2===box3){
                console.log(`Winner ${box1}`);
                displaywinner(box1)
            }
        }
    }
}

resetbut.addEventListener("click",resetGame);
newbut.addEventListener("click",resetGame);