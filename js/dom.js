// document use: interacting with the DOM
//clear  function all txt dissapear - call once winner is defined
$(document).ready(function () {

$("aside h4").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

let currentPlayer = '';

  $('img#X').on('click', function(){
    $('aside h4').text("Current Player:");
    $('#X').addClass('selectX');
    currentPlayer = 'O';
  });
  $('img#O').on('click', function() {
    $('aside h4').text("Current Player:");
    $('#X').addClass('selectX');
    currentPlayer = 'X';
  });

//select then alternate between current player function
  const findCurrentPlayer = function() {
    if(currentPlayer === 'X'){
      $('#X').removeClass('selectX');
      $('#O').addClass('selectO');
      return 'O';
    }
    if(currentPlayer === 'O'){
      $('#O').removeClass('selectO');
      $('#X').addClass('selectX');
      return 'X';
    }
  };

  //returnWinner
  let winner = '';
  const returnWinningPlayer = function () {
    const pos0 = $('#0').text();
    const pos1 = $('#1').text();
    const pos2 = $('#2').text();
    const pos3 = $('#3').text();
    const pos4 = $('#4').text();
    const pos5 = $('#5').text();
    const pos6 = $('#6').text();
    const pos7 = $('#7').text();
    const pos8 = $('#8').text();

      if(pos0 != '' && pos0 === pos1 && pos1 === pos2){
        return winner = pos0;
      }if(pos3 != '' && pos3 === pos4 && pos4 === pos5){
        return winner = pos3;
      }if(pos6 != '' && pos6 === pos7 && pos7 === pos8){
        return winner = pos6;
      }if(pos0 != '' && pos0 === pos3 && pos3 === pos6){
        return winner = pos0;
      }if(pos1 != '' && pos1 === pos4 && pos4 === pos7){
        return winner = pos1;
      }if(pos2 != '' && pos2 === pos5 && pos5 === pos8){
        return winner = pos2;
      }if(pos0 != '' && pos0 === pos4 && pos4 === pos8){
        return winner = pos0;
      }if(pos6 != '' && pos6 === pos4 && pos4 === pos2){
        return winner = pos6;
      }
      };

//loop - to change players each turn and adds in player reference to table
const switchPlayer = function (){
  for(let i = 0; i <= 8; i++){
    $(`#${i}`).on('click', function(){
      currentPlayer = findCurrentPlayer();
      $(`#${i}`).text(currentPlayer)
      returnWinningPlayer();
      if(winner === 'O'){
        console.log(`The winner is O's`);
        //show div that shows winner message - then if user clicks anywhere the page reloads
        // $('window.location.reload();
      }else if (winner === 'X'){
        console.log(`The winner is X's`);
      }
      })
  }
};
switchPlayer();


}); // end document ready function
