/*
 * NAME:    YOUR NAME HERE
 *
 * DATE:    December 18, 2021
 *
 * FILE:    solution.js
 *
 * DESCRIPTION:
 *     Solution to Part IV of Nonogram Puzzle and
 *     the working solution for the entire project
 *
 */

(function() {
    "use strict";

   /*
    * DO NOT DELETE THIS CODE
    *
    * Sets up the various event listeners on the page, including
    * click behavior for each puzzle grid square and the
    * functionality for clearing a puzzle.
    */
    window.onload = function() {
        setUpTiles();
        document.getElementById("clear").addEventListener("click", clearPuzzle);
    };

   /* BEGIN WRITING YOUR CODE BELOW */

   /*
    * SOLUTION TO PART IV: Add functionality to the "Clear"
    * button and a confirm message.
    */
    function clearPuzzle() {
        if (confirm("Are you sure you want to clear the puzzle?")) {
            let tiles = document.querySelectorAll(".box");
            for (let i = 0; i < tiles.length; i++) {
                tiles[i].classList.remove("filled");
            }
        }
    }

   /*
    * SOLUTION FROM PART III: Implement fill toggling
    */
    function changeBoxMark() {
        if (this.classList.contains("filled")) {
            this.classList.remove("filled");
        } else {
            this.classList.add("filled");
        }
    }
    
   /*
    * SOLUTION TO PART II: Call the changeBoxMark function when a
    * tile is clicked.
    */
    function setUpTiles() {
        let tiles = document.querySelectorAll(".box");
        for (let i = 0; i < tiles.length; i++) {
            let tile = tiles[i];
            tile.addEventListener("click", changeBoxMark);
        }
    }

   /* HELPER FUNCTIONS (OPTIONAL) */

   /**
    * Returns the element that has the ID attribute with the specified value.
    * @param {string} id - element ID
    * @return {object} DOM object of given id.
    */
    function id (id) {
        return document.getElementById(id);
    }

   /**
    * Returns the array of elements that match the given CSS selector.
    * @param {string} query - CSS query selector
    * @return {object[]} array of DOM objects matching the query.
    */
    function select (query) {
        return document.querySelectorAll(query);
    }
})();
