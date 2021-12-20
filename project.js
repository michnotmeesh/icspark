// *******************************************************************
// NAME:    /* YOUR NAME HERE */
//
// DATE:    December 18, 2021
//
// FILE:    project.js
//
// DESCRIPTION:
//     Starter file to help get you started with encrypt-it
//
/*
 * CSE 154
 *
 */
(function() {
  "use strict";

    /**
    * The starting point in our program, setting up a listener
    * for the "load" event on the window, signalling the HTML DOM has been constructed
    * on the page. When this event occurs, the attached function (init) will be called.
    */
    window.addEventListener("load", init);

    /**
    * TODO: Write a function comment using JSDoc.
    */
    function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    }

    // Add any other functions in this area (you should not implement your
    // entire program in the init function, for similar reasons that
    // you shouldn't write an entire Java program in the main method).

    function id(idName)
    {
        return document.getElementById(idName);
    }

    function qs(selector)
    { // less common, but you may find it helpful
        return document.querySelector(selector);
    }

    function qsa(selector)
    {
        return document.querySelectorAll(selector);
    }

})();
