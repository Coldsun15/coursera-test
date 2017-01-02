// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
// See Lecture 52, part 2
(function (window, name) {
var speakWord = "Good Bye";
	
var byeSpeaker = {};
byeSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;
	
})(window,name);


// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.
// xxxx.xxxx = byeSpeaker;
