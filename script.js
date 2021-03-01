let board=document.getElementById("board");
let player="X";
let rowSum=[];
let colSum=[];
let mainDiagSum=0;
let revDiagSum=0;
let button=document.getElementById("restartButton");
function restartGame(){
   rowSum=[];
   colSum=[];
  mainDiagSum=0;
   revDiagSum=0;
   for(let i=0;i<3;i++)
   {
       for(let j=0;j<3;j++)
       {
         let cell=document.querySelector(`[data-cellRow="${i}"][data-cellCol="${j}"]`);  
          cell.innerHTML="";
          let messageHolder=document.querySelector('[data-winning-message-text]');
          messageHolder.innerHTML="";
        }
   
   } 
   board.addEventListener('click',makeAMove);
}    
let makeAMove=(event)=>{
    console.log("innerHTML is ");
    console.log(event.target.innerHTML);
    if(event.target.innerHTML=="")
    {
      event.target.innerHTML=player;
      console.log(event.target);
      console.log(checkWinner);
     let res= checkWinner(event.target.dataset.cellrow,event.target.dataset.cellcol);
     
     if(!res)
     {
      if(player=="X")
      player="O";
      else
      player="X";
     }
     else{
         console.log(player+" won");
         let messageHolder=document.querySelector('[data-winning-message-text]');
         messageHolder.innerHTML=`${player} Won!!`;
     }
    }
  }
  let checkWinner=(i,j)=>
{   
    let rowWin=true,colWin=true,DiagWin=true,revDiagWin=true;
    let cell=document.querySelector(`[data-cellRow="${i}"][data-cellCol="${j}"]`);
   
    for(let l=0;l<3;l++)
    {
        if(document.querySelector(`[data-cellRow="${l}"][data-cellCol="${l}"]`).innerHTML!=player)
         DiagWin=false;
         if(document.querySelector(`[data-cellRow="${l}"][data-cellCol="${2-l}"]`).innerHTML!=player)
         revDiagWin=false;
         if(document.querySelector(`[data-cellRow="${i}"][data-cellCol="${l}"]`).innerHTML!=player)
          rowWin=false;
       if(document.querySelector(`[data-cellRow="${l}"][data-cellCol="${j}"]`).innerHTML!=player)
          colWin=false;

        }
        console.log(rowWin||colWin||DiagWin||revDiagWin);
        if(rowWin||colWin||DiagWin||revDiagWin==true)
        { console.log(makeAMove);
            board.removeEventListener('click',makeAMove);
        }
       
        return rowWin||colWin||DiagWin||revDiagWin;
}


board.addEventListener('click',makeAMove);
button.addEventListener('click',restartGame);