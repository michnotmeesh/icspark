/*
 * NAME:    YOUR NAME HERE
 *
 * DATE:    December 18, 2021
 *
 * FILE:    project.js
 *
 * DESCRIPTION:
 *     Starter file to help get you started with encrypt-it
 *     Functions (Declaring/calling functions, functions as values,
 *     optional arguments, return statements)
 *     Nonogram:
 *     1) make a single tile turn black when it is clicked
 *     2) toggling
 *     3) clear button
 *     4) EXTRA CREDIT: drag and fill
 */

(function() {
    "use strict";

   /*
    * Sets up the various event listeners on the page, including
    * click and dragging behavior for each puzzle grid square and
    * the functionality for clearing a puzzle state.
    */
    window.onload = function() {
        setUpTiles();
        id("clear").onclick = clearPuzzle;
    };

   /*
    * SOLUTION TO PART II: Make a single tile black when clicked
    */
    function changeBoxMark() {
        this.classList.add("filled");
    }

   /*
    * SOLUTION TO PART III:
    */
    function changeBoxMark() {
        if (this.classList.contains("filled")) {
            this.classList.remove("filled");
        } else {
            this.classList.add("filled");
        }
    }

  /*
   * Comment TODO: TA loses comment points
   */
  function clearPuzzle() {
    if (confirm("Are you sure you want to clear the puzzle?")) {
      let boxes = select(".box");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("filled", "crossed-out");
      }
    }
  }

   /*
    * SOLUTION TO PART II: Make a single tile turn black when clicked
    * Remove alert pop up.
    */
    function setUpTiles() {
        let tiles = select(".box");
        for (let i = 0; i < tiles.length; i++) {
            let div = tiles[i];
            div.onclick = changeBoxMark();
        }
    }

   /*
    * SOLUTION TO PART I: Make an alert pop up when a user clicks a tile
    */
    function setUpTiles() {
        let tiles = select(".box");
        for (let i = 0; i < tiles.length; i++) {
            let div = tiles[i];
            div.onclick = function() {
                alert("You clicked a tile!");
            };
        }
    }

   /**
    * Returns the element that has the ID attribute with the specified value.
    * @param {string} id - element ID
    * @return {object} DOM object associated with id.
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
