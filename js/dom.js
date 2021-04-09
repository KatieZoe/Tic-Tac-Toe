$(document).ready(function () {

  //1 of 2 key global variables throughout the code
  let currentPlayer = '';

  //Event listeners to highlight current player once marker is selected and remove flashing/change text
  $('#X').on('click', function(){
    $('h4').removeClass('flash'); //removes flashing text
    $('h4').text("Current Player:");
    $('#X').addClass('selectX');
    $('#O').removeClass('selectO');
    currentPlayer = 'X';
  });
  $('#O').on('click', function() {
    $('h4').removeClass('flash'); //removes flashing text
    $('h4').text("Current Player:");
    $('#O').addClass('selectO');
    $('#X').removeClass('selectX');
    currentPlayer = 'O';
  });

  //findCurrentPlayer function that alternates between and highlights the current player
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

  //2 of 2 key global variables throughout the code
  let winner = '';
  //returnWinningPlayer function that checks if anyone has won the game by checking the text in each position and returning a winner if the text matches the winning combinations
  const returnWinningPlayer = function () {
    //variables to assign table postions as jquery edit text functions so that currentPlayer can be parsed in
    const pos0 = $('#0').text();
    const pos1 = $('#1').text();
    const pos2 = $('#2').text();
    const pos3 = $('#3').text();
    const pos4 = $('#4').text();
    const pos5 = $('#5').text();
    const pos6 = $('#6').text();
    const pos7 = $('#7').text();
    const pos8 = $('#8').text();

    //winning combinations
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
    //else/if statement below checks if the table data is full without matching any of the above combinations and returns the DRAW message
    }else if($('td:empty').length === 0){
      return winner = "DRAW";
    }
  };


  //playGame function that runs the whole game
  const playGame = function (){
    //for loop to iterate through the table data
    for(let i = 0; i <= 8; i++){
      //on click function below applies the current player marker to the selected cell of the table
      $(`#${i}`).on('click', function(){
        if($(`#${i}`).text() === ''){
          $(`#${i}`).text(currentPlayer);
          currentPlayer = findCurrentPlayer(); //alternate between markers after each input
          winner = returnWinningPlayer(); //checks winning combinations after each input

          if(winner === 'O' || winner === 'X'){
            //GAMEOVER class added to div with preset css properties to show txt as a pop up
            $('#popup').addClass('GAMEOVER').html(`<br><br><br><br><br> ${ winner } WINS!<br><h6><em>click to play again<em></h6>`);
            //on click function to exit pop up and refresh the page
            $('#popup').on('click', function (){
              $('#popup').removeClass('GAMEOVER');
              window.location.reload();
            })
          // else if statement below mimics the above if returnWinningPlayer returns a draw
        }else if(winner === 'DRAW'){
            $('#popup').addClass('GAMEOVER').html(`<br><br><br><br><br> ${ winner }!<br><h6><em>click to play again<em></h6>`);
            $('#popup').on('click', function (){
              $('#popup').removeClass('GAMEOVER');
              window.location.reload();
            })
          }
        }
      })
    }// end of for loop
  }
  playGame();
}); // end document ready function
