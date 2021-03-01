/*Here we find the winner in O(1) time */
let board=document.getElementById("board");
let player="X";
let rowSum=Array(3).fill(0);
let colSum=Array(3).fill(0);
let mainDiagSum=0;
let revDiagSum=0;
let winner="";
let button=document.getElementById("restartButton");
function restartGame(){
    rowSum=Array(3).fill(0);
    colSum=Array(3).fill(0);
  mainDiagSum=0;
   revDiagSum=0;
   player="X";
   winner="";
   for(let i=0;i<3;i++)
   {
       for(let j=0;j<3;j++)
       {
         let cell=document.querySelector(`[data-cellRow="${i}"][data-cellCol="${j}"]`);  
          cell.innerHTML="";
         
        }
   
   } 
   let messageHolder=document.querySelector('[data-winning-message-text]');
   messageHolder.innerHTML="";
   board.addEventListener('click',makeAMove);
}    
let makeAMove=(event)=>{
  
   if(winner!="")
   return;
    if(event.target.innerHTML=="")
    {   
      event.target.innerHTML=player;
     
       let row=event.target.dataset.cellrow;
       let col=event.target.dataset.cellcol;
      let numRep=0;
      if(player=='X')
        numRep=-1;
        else
         numRep=1;
        
      

        rowSum[row]+=numRep;
        colSum[col]+=numRep;

        if(row==col)
        mainDiagSum=mainDiagSum+numRep;
        if(row==2-col)
        revDiagSum=revDiagSum+numRep;
    
        if(Math.abs(rowSum[row])==3 || Math.abs(colSum[col])==3 ||Math.abs(mainDiagSum)==3 ||Math.abs(revDiagSum)==3)
        {
            winner=player;
           
            let messageHolder=document.querySelector('[data-winning-message-text]');
            messageHolder.innerHTML=`${player} Won!!`;
        }
         
      if(player=="X")
      player="O";
      else
      player="X";  
     
    }
  }

board.addEventListener('click',makeAMove);
button.addEventListener('click',restartGame);