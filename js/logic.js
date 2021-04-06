// // document use: contains javascript only to store data and functions
// check winner function
  let winner = '';

  const returnWinningPlayer = function () {
    const pos = [0, 1, 2, 3, 4, 5, 6, 7, 8];

      if(pos[0] != '' && pos[0] === pos[1] && pos[1] === pos[2]){
        console.log(pos[0]);
        return winner = pos[0];
      }if(pos[3] != '' && pos[3] === pos[4] && pos[4] === pos[5]){
        console.log(pos[3]);
        return winner = pos[3];
      }if(pos[6] != '' && pos[6] === pos[7] && pos[7] === pos[8]){
        console.log(pos[6]);
        return winner = pos[6];
      }if(pos[0] != '' && pos[0] === pos[3] && pos[3] === pos[6]){
        console.log(pos[0]);
        return winner = pos[0];
      }if(pos[1] != '' && pos[1] === pos[4] && pos[4] === pos[7]){
        console.log(pos[1]);
        return winner = pos[1];
      }if(pos[2] != '' && pos[2] === pos[5] && pos[5] === pos[8]){
        console.log(pos[2]);
        return winner = pos[2];
      }if(pos[0] != '' && pos[0] === pos[4] && pos[4] === pos[8]){
        console.log(pos[0]);
        return winner = pos[0];
      }if(pos[6] != '' && pos[6] === pos[4] && pos[4] === pos[2]){
        console.log(pos[6]);
        return winner = pos[6];
      }
  };

  const switchPlayer = function (){
    for(let i = 0; i <= 8; i++){
      $(`#${i}`).on('click', function(){
        currentPlayer = selectedPlayer;
        $(`#${i}`).text(selectedPlayer)

        
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
// winMessage();
