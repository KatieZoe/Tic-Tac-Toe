// document use: interacting with the DOM
$(document).ready(function () {

let currentPlayer = '';

//Event listener to highlight current player once marker is selected
  $('img#X').on('click', function(){
    $('h4').removeClass('flash');
    $('h4').text("Current Player:");
    $('#X').addClass('selectX');
    currentPlayer = 'O';
  });
  $('img#O').on('click', function() {
    $('h4').removeClass('flash');
    $('h4').text("Current Player:");
    $('#X').addClass('selectX');
    currentPlayer = 'X';
  });

//function that alternates between and highlights current player
  const findCurrentPlayer = function() {
    if(currentPlayer === 'X') {
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

  //Checks if anyone has won the game (called in loop after each input)
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
    }else if($('td:empty').length === 0){
      return winner = 'TIE';
      };
  };


//loop - to change players each turn and adds in player reference to table
const playGame = function (){
  for(let i = 0; i <= 8; i++){
    $(`#${i}`).on('click', function(){
    currentPlayer = findCurrentPlayer();
    $(`#${i}`).text(currentPlayer);
    winner = returnWinningPlayer();
    winMessage(returnWinningPlayer(winner));
    //end of click function
  })//end of for loop
}
};//end of playGame funtion;
playGame();


const winMessage = function (){
  if(winner === 'O' || 'X'){
  $('#popup').addClass('GAMEOVER').html(`<br><br><br><br><br>${ winner } WINS!<br><h6><em>click to play again<em></h6>`);
    $('#popup').on('click', function (){
    $('#popup').removeClass('GAMEOVER');
    window.location.reload();
    })
  }
}

}); // end document ready function
