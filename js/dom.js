// document use: interacting with the DOM
//clear  function all txt dissapear - call once winner is defined


$(document).ready(function () {

// for CSS - later to show which player is active.
  // $('#O').on('click', function() {
  //   $(this).addClass('selectO');
  // });
  // $('#X').on('click', function() {
  //   $(this).addClass('selectX')
  // });

//change current player function
  let currentPlayer = 'X';
  const findCurrentPlayer = function() {
    if(currentPlayer === 'X'){
      return 'O';
    }if(currentPlayer === 'O'){
      return 'X';
    }
  };



//loop - to change players each turn and adds in player reference to table
const switchPlayer = function (){
  for(let i = 0; i <= 8; i++){
    $(`#${i}`).on('click', function(){
      currentPlayer = findCurrentPlayer();
      $(`#${i}`).text(currentPlayer)
      returnWinningPlayer();
      if(winner !== ''){
        console.log(`The winner is ${ winner }`)
      }
      })
  }
};
switchPlayer();

// const winMessage = function(){
//   const playerX = 'X';
//   const playerO = 'O';
//   if(winner === playerX){
//     console.log(playerX);
//   }if(winner === playerO){
//     console.log(playerO);
//   }
// }

const pos0 = $('#0').text();
const pos1 = $('#1').text();
const pos2 = $('#2').text();
const pos3 = $('#3').text();
const pos4 = $('#4').text();
const pos5 = $('#5').text();
const pos6 = $('#6').text();
const pos7 = $('#7').text();
const pos8 = $('#8').text();
// winMessage();

}); // end document ready function
