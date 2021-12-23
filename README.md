# nonogram-puzzle

You'll be making a nonogram puzzle (Hanjie, Number Grid, Pi-Cross, etc) and allow the user to play the game by filling, unfilling, or clearing tiles of a nonogram puzzle. You do not need to know how these puzzles work to complete the project.

## Objective

Complete the UI of a nonogram puzzle. Practice DOM manipulation using JavaScript by completing several functions.

We have provided the HTML (```project.html```) and CSS (```project.css```) that you will need for this project. You will be writing JavaScript code in a file called ```project.js```

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of JS (arrays, objects, for loops, functions, if statements)

## Your Challenge

Nonogram:
*     1) make an alert when a user clicks a tile
*     2) make a single tile turn black when it is clicked
*     3) toggling
*     4) clear button
*     5) EXTRA CREDIT: drag and fill

### Part I: Make an alert when a user clicks a tile

1. Clone this repository into your documents folder.
2. Open the JavaScript file (```project.js```). You will be writing JavaScript code here.
3. Complete the function called ```setUpTiles()``` so that an alert pops up with the message, ***"You clicked a tile!"*** every time a user clicks on any tile. In other words, every tile in the grid should have the ```setUpTiles()``` function attached to it.

(Hint: Every tile in the grid has the class ```.box```)

### Part II: Make a single tile turn black when its clicked

1. Complete the function called ```changeBoxMark()``` so that a single tile is filled in when a user clicks on it. There exists a class ```.filled``` that handles the styling for you in the ```css``` file.

(Hint: You can add this class to the tile that is clicked to fill it in)

2. Modify the function called ```setUpTiles()``` so that the ```changeBoxMark()``` function is called whenever a single tile is clicked on. You should also remove the alert pop up in ```setUpTiles()``` function.

### Part III: Implement fill toggling

1. Modify your ```onclick``` event handler for each tile so that when a user clicks a black tile, it will turn white (or become unfilled). If a user clicks a white tile, it will turn black (or become filled).

To do this, you will need to implement ```if-else``` statements in the ```changeBoxMark()``` function.

There is no "unfilled" class for the tiles. You can simply clear a filled tile by removing the ```.filled``` class.
