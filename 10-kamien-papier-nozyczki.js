
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

//wynik
//document.querySelector('.js-results').innerHTML = `You ${results}`;




function playGame(playerMove){

const computerMove = pickComputerMove();
let results = '';


if(playerMove === 'Nozyczki') {
    if(computerMove === 'Kamien')
        {
          results = 'Przegrales!';
        }
        else if(computerMove === 'Papier')
        {
          results = 'Wygrales!';
        }
        else if(computerMove === 'Nozyczki')
        {
          results = 'Remis';
        }
}

else if(playerMove === 'Papier'){

            if(computerMove === 'Kamien')
        {
          results = 'Wygrales!';

        }
        else if(computerMove === 'Papier')
        {
          results = 'Remis!';
        }

        else if(computerMove === 'Nozyczki')
        {
        results = 'Przegrales!';

        }
}

else if(playerMove === 'Kamien'){

            if(computerMove === 'Kamien')
        {
          results = 'Remis!';

        }
        else if(computerMove === 'Papier')
        {
          results = 'Przegrales!';
        }

        else if(computerMove === 'Nozyczki')
        {
        results = 'Wygrales!';

        }


}
     

if(results === 'Wygrales!'){
  score.wins ++;
}
else if(results === 'Przegrales!'){
  score.losses ++;
}
else if(results === 'Remis!'){
  score.ties ++;
}


localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-results').innerHTML = results;
document.querySelector('.js-moves').innerHTML 
= `You 
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
Computer `;





}
function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


}

function pickComputerMove() {

  const randomNumber = Math.random();
  

  if(randomNumber>0 && randomNumber<=1/3)
  {
    computerMove = 'Kamien';
  }
  else if(randomNumber>1/3 && randomNumber <= 2/3)
  {

    computerMove = 'Papier'
  }

  else if(randomNumber>2/3 && randomNumber<1)
  {
    computerMove = 'Nozyczki';



}
return computerMove;
}