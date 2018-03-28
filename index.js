function shout(string) {
  return string.toUpperCase();
};

<<<<<<< HEAD
=======
// whisper(string) needs to return all lowercase

>>>>>>> 460ac1d3485cf64f97993d96874f4433b1c032be
function whisper(string) {
  return string.toLowerCase();
};

<<<<<<< HEAD
function logShout(string) {
  console.log (string.toUpperCase());
};

function logWhisper(string) {
  console.log (string.toLowerCase());
};

function sayHiToGrandma(string) {
  if(string === string.toLowerCase()){
    return `I can't hear you!`;
  } else if (string === string.toUpperCase()) {
    return `YES INDEED!`;
  } else if (string === "I love you, Grandma.") {
    return `I love you, too.`;
  };
};

=======
//logShout(string) call console.log() it's on argument in all caps
function logShout(string) {
  console.log string.toUpperCase();
};

//logWhisper(string)calls console.log() it's one argument in all lowercase

function logWhisper(string) {
  console.log string.toLowerCase();
};

function sayHiToGrandma(string) {
  if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } else {
}
//sayHiToGrandma(string) returns "YES INDEED!" if `string` is uppercase:

//sayHiToGrandma(string) returns "I love you, too." if `string is "I love you, Grandma"
>>>>>>> 460ac1d3485cf64f97993d96874f4433b1c032be
