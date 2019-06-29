var board=document.querySelectorAll('td')
var restart=document.querySelector('#b')
var iswin=document.querySelector('#iswin')

say=alert("Player 1 takes 'X' and player 2 takes 'O' ")
var p1= prompt("Enter name of Player 1");
var p2= prompt("Enter name of Player 2");

function clearAll() {
  for (var i = 0; i < board.length; i++) {
    board[i].textContent='';
  }
}

restart.addEventListener('click',clearAll);

function ChangeSign(){
if (this.textContent=='')  {this.textContent='O';}
else if (this.textContent=='X') {this.textContent='';}
else {this.textContent='X';}
}

for (var i = 0; i < board.length; i++) {
  board[i].addEventListener('click',ChangeSign);
}

var wins=['X','O'];
var dict = {'X': p1 , 'O':p2};
function Winner() {
  for(var mark of wins){
      if((mark == board[0].textContent &&
        board[1].textContent == board[2].textContent
        && mark == board[1].textContent)||
		     (mark == board[3].textContent &&
        board[4].textContent == board[5].textContent
        && mark==board[5].textContent)||
		     (mark == board[6].textContent &&
        board[7].textContent == board[8].textContent
        && mark==board[8].textContent)||
		     (mark == board[0].textContent &&
        board[3].textContent == board[6].textContent
        && mark==board[6].textContent)||
		     (mark == board[1].textContent &&
        board[4].textContent == board[5].textContent
        && mark==board[5].textContent)||
		     (mark == board[2].textContent &&
        board[5].textContent == board[8].textContent
        && mark==board[8].textContent)||
		     (mark == board[0].textContent &&
        board[4].textContent == board[8].textContent
        && mark==board[8].textContent)||
        (mark == board[2].textContent  &&
        board[4].textContent == board[6].textContent
        && mark==board[6].textContent))
    {return mark;}
  }
}

function results() {
  if(Winner()){alert("Winner is Player "+ dict[Winner()])}
  else(alert("match draw/incomplete"))
}

iswin.addEventListener('click',results)
