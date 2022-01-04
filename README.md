# nonogram-puzzle

You'll be making a nonogram puzzle (Hanjie, Number Grid, Pi-Cross, etc) and allow the user to play the game by filling, unfilling, or clearing tiles of a nonogram puzzle. You do not need to know how these puzzles work to complete the project.

## Objective

Complete the UI of a nonogram puzzle. Practice DOM manipulation using JavaScript by completing several functions.

We have provided the HTML (```project.html```) and CSS (```project.css```) that you will need for this project. You will be writing JavaScript code in a file called ```project.js```

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of JS (arrays, objects, for loops, functions, if statements)

## Your Challenge

### Getting started

1. Clone this repository into your documents folder.

2. Open the JavaScript file (```project.js```). You will be writing JavaScript code here.

### Part I: Make an alert pop up when a user clicks a tile

If a user clicks on any tile, an alert pops up with a message. Complete the function ```setUpTiles()``` by:

1. Selecting every tile in the grid and implementing an ```onclick``` event handler to each tile.

(Hint: Every tile in the grid has the class ```.box```)

2. If any tile is clicked on, an alert pops up with the message ***"You clicked a tile!"***. Use the ```alert()``` function.

### Part II: Make a single tile turn black when its clicked



1. Complete the function called ```changeBoxMark()``` so that a single tile is filled in when a user clicks on it. There exists a class ```.filled``` that handles the styling for you in the ```css``` file.

(Hint: You can add this class to the tile that is clicked to fill it in)

2. Modify the function ```setUpTiles()``` so that the ```changeBoxMark()``` function is called whenever a single tile is clicked on. You should also remove the alert pop up in ```setUpTiles()``` function.

### Part III: Implement fill toggling

If a user clicks a black tile, it will turn white (or become unfilled). If a user clicks on a white tile, it will turn black (or become filled). Modify your ```onclick``` event handler for each tile so that toggling between unfilled and filled tiles is possible.

1. You will need to implement ```if-else``` statements in the ```changeBoxMark()``` function. There is no "unfilled" class for the tiles. You can clear a filled tile by removing the ```.filled``` class.

### Part IV: Add a "Clear" button

When the "Clear" button is clicked, all filled tiles will be unfilled.

1. Complete the function ```clearPuzzle()``` by selecting every tile and removing the class ```.filled```

(Hint: Every tile in the grid has the class ```.box```)

2. Add a ```confirm``` in the function ```clearPuzzle()``` so that the user has a second chance to decide if they want to clear their tiles.

Original project made by Paul Cleverdon and his team of developers (2018).
