// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
  //Code goes here!

  return s.slice(s.length / 2 - 0.5, Math.round(s.length / 2 + 0.5));
}

getMiddle("test");
getMiddle("testing");
getMiddle("middle");
getMiddle("A");
