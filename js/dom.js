// document use: interacting with the DOM

//put any functions here that you want to run before contacting the DOM (initial page requirements at the begining of the game)

//empty function here

$(document).ready(function () {

const gameFunction = function (position, player) {

////need function that allocates player to these and a separate function that checks the positions 
  const pos0 = $('table #0');
  const pos1 = $('table #1');
  const pos2 = $('table #2');
  const pos3 = $('table #3');
  const pos4 = $('table #4');
  const pos5 = $('table #5');
  const pos6 = $('table #6');
  const pos7 = $('table #7');
  const pos8 = $('table #8');

  const playerX = $('aside #X');
  const playerO = $('aside #O');
  //
  // $('#X').on('click', function() {
  //  add a function that makes an X appear in the box clicked next (only allow 1 click)
  // });
  // $('#O').on('click',function (){
  //  add a function that makes a O appear in the box clicked next (only allow 1 click)
  // });

  if(selection[0] != button("empty") && selection[0] === selection[1] && selection[1] === selection[2]){
    print winning message with jquery.
  }

}); // end document ready function


// $('#checking-deposit').on('click', function () {
//   const currentBalance = + $('#checking-balance').text().slice(1);
//   const depositAmount = + $('#checking-amount').val();
//   const newBalance =  currentBalance + depositAmount;
//   $('#checking-balance').text('$' + newBalance);
//   checkForZero();
// });
