/*
 * NAME:    YOUR NAME HERE
 *
 * DATE:    December 18, 2021
 *
 * FILE:    project.js
 *
 * DESCRIPTION:
 *     Starter file to help get you started with Nonogram Puzzle.
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
        id("clear").onclick = clearPuzzle;
    };

   /* BEGIN WRITING YOUR CODE BELOW */

   /*
    * Write comments for this function!
    */
    function clearPuzzle() {

    }

   /*
    * Write comments for this function!
    */
    function changeBoxMark() {

    }

   /*
    * Write comments for this function!
    */
    function setUpTiles() {

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
