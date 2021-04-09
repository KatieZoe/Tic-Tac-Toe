ProjectO - TIC TAC TOE
===============

[Click here](https://katiezoe.github.io/project0/)

* The objective of this game is to get three symbols in a row on the 3x3 board before your opponent.
* The symbols are traditionally noughts and crosses (O + X).

## My Tic Tac Toe Journey

I have used html, css, javascript and jquery to manipulate the DOM for this interactive game. I've also used github to host the game on the internet so that others can play it anywhere they like as well as offer me feedback on the functionality and presentation.

I firstly researched the winning combinations of the game and then mapped out my approach and the specifications I'd like to include in each file on paper. I went on to create the html file using a table for the game board and css file for the webpage so that I could clearly test my javascript and jquery code at each stage.

I used jquery to allocate the X's and O's to each square in the  table and a for loop to allocate the current player's marking to the cell. I then created a function using the winning combinations with if statements to return the winner. I added that function to the for loop so that every time the user clicked their marker in the board, the function would check if there was a winner or if it was a draw.

Once the game was working I coded an event listener using jquery to allow the user to allocate the marker of their choice to each player. I then created a function that would alternate between the two markers at each turn and also highlight the current player image used as a selection choice with a red boarder each time a player clicks the board.

I then created a pop-up box to display the winner or if the game was a tie. I added an image background on the box and some html using jquery. Turning my attention to css I added animation to the initial prompt to select a marker getting the words to flash on the page until a selection is made. I initially did this using jquery but it would only flash 3 time each time the page loaded so I did some more research on css animation.

Once I had everything working and looking how I initially envisioned I turned my attention back to my javascript code with the intention to make it DRYer. I merged the win message for X and O into one if statement but had to keep the DRAW message separate because the messages are slightly different and I don't see it as it's more succinct to declare the message in variables.

Other bugs I came across at the end of projecto was that the red border on the current player marker only alternated after the next player already made their mark. I fixed this by correcting a lazy approach to changing the selector that was at the beginning of my code that now worked because of my findCurrentPlayer function placement in the playGame for loop. I also fixed a bug where you could change the mark in the table if the other player clicked over it but adding in an additional if statement that checked if the cell was empty before allowing the input.

It has been a very rewarding experience to create this game over the past week. Click the link at the top of this page and check it out for yourself.

Thank you

Katie Lugton
