
let cards=[];

let sum =0;
let hasBlackJack =false;
let isAlive=false;
let message="";
let message_el=document.getElementById("msg-el");
let sum_El=document.querySelector("#sum-el");

let card1El=document.getElementById("cards-el");




let player={
  name: "Per",
  chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent=player.name + ": $" + player.chips

function randomNum(){
  x=Math.floor(Math.random() * 13)+1;
  if(x>10){
    return 10;
  }else if(x===1){
    return 11;
  }else {
  return x;
  }
}

function startGame(){
  isAlive=true;
  let card1=randomNum();
  let card2=randomNum();
  cards=[card1, card2];
  sum=card1 + card2;
  renderGame();
}

function renderGame(){
  card1El.textContent="Cards: "
  for(let i=0; i<cards.length; i++){
  card1El.textContent+= cards[i]+", ";
  }
  sum_El.textContent="Sum of card: "+sum;

  if(sum <=20){
    
    message=("do you want to draw a new card? ");
    
  }else if(sum===21){
    message=("you've got BlackJack");
    hasBlackJack =true;
      
  }else{
    message=("you're out of the game");
    isAlive=false;
  }
  message_el.textContent=message;
}


function newCard(){
  if(isAlive===true && hasBlackJack===false){
  message="drawing a new card form the deck"
  message_el.textContent=message;
  

  let cardn=randomNum();
  sum+=cardn;
  cards.push(cardn);
  console.log(cardn);
  
  }
  renderGame();
  
}

