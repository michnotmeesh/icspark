/*
 * NAME:    YOUR NAME HERE
 *
 * DATE:    December 18, 2021
 *
 * FILE:    solution2.js
 *
 * DESCRIPTION:
 *     Solution to Part II of Nonogram Puzzle
 */

(function() {
    "use strict";

   /*
    * DO NOT DELETE THIS CODE
    *
    * Sets up the various event listeners on the page, including
    * click behavior for each puzzle grid square.
    */
    window.onload = function() {
        setUpTiles();
    };

    /* BEGIN WRITING YOUR CODE BELOW */

   /*
    * SOLUTION TO PART II: Make a single tile black when clicked
    */
    function changeBoxMark() {
        this.classList.add("filled");
    }

   /*
    * SOLUTION TO PART II: Call the changeBoxMark function when a
    * tile is clicked and remove the alert pop up.
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
