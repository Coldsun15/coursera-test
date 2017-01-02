// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2
(function (window, name)
{
helloSpeaker = {};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Hello";

helloSpeaker.speak =  function speak(name) {
  console.log(speakWord + " " + name);
}

 window.helloSpeaker = helloSpeaker;
}
)(window,name);

