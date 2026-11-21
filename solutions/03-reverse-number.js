// =====================================================================
// PROBLEM 3 — Reverse a Number (Easy)
// ---------------------------------------------------------------------
// Write a function reverseNumber(n) that takes a positive integer and
// returns it reversed AS A NUMBER.
// RULE: Do NOT use any built-in array methods (no .split(), .reverse(),
// .join() and so on).
//
// Concepts: type conversion, for loop, string indexing, Number()
//
// As an example using my clinical Knowledge , reading a patient's chart from the LAST entry back
// to the FIRST, and copying each entry onto a fresh sheet as you go.
// The fresh sheet ends up in reverse order.
// =====================================================================

function reverseNumber(n) {
  // STEP 1: Turn the number into a string.
  // Why? A NUMBER like 1234 cannot be walked through digit by digit,
  // but a STRING like "1234" can — each character has a position
  // (an "index").
  const digits = String(n); // 1234 -> "1234"

  // STEP 2: Prepare an EMPTY string to build the reversed answer in.
  // "" is a string with nothing in it (our blank sheet).
  let reversed = "";

  // STEP 3: Walk through the string BACKWARDS using a classic "for" loop.
  //
  // STRING INDEXING: positions start counting at 0, not 1.
  //   "1234"  ->  index 0 = "1", index 1 = "2", index 2 = "3", index 3 = "4"
  // digits.length is the number of characters (here 4), so the LAST
  // index is always length - 1 (here 3).
  //
  // A "for" loop has three parts, separated by semicolons:
  //   let i = digits.length - 1   -> START at the last index (3)
  //   i >= 0                      -> KEEP GOING while i is 0 or more
  //   i--                         -> after each round, SUBTRACT 1 from i
  // So i will be 3, then 2, then 1, then 0, and then the loop stops.
  for (let i = digits.length - 1; i >= 0; i--) {
    // digits[i] reads the character at position i.
    // "+=" means "add this onto the end of what's already there".
    // Round by round for "1234":
    //   i=3 -> reversed = "4"
    //   i=2 -> reversed = "43"
    //   i=1 -> reversed = "432"
    //   i=0 -> reversed = "4321"
    reversed += digits[i];
  }

  // STEP 4: Convert the reversed STRING back into a NUMBER.
  // The problem asks for a number, not text. Number("4321") -> 4321
  // Bonus: Number() also removes leading zeros automatically,
  // so reversing 1200 gives "0021", and Number("0021") -> 21.
  return Number(reversed);
}

// ---------------------------------------------------------------------
// TESTING
// ---------------------------------------------------------------------
console.log("=== Problem 3: Reverse a Number ===");
console.log(reverseNumber(1234)); // 4321
console.log(reverseNumber(500)); // 5   (because "005" becomes 5)
console.log(reverseNumber(7)); // 7
console.log(reverseNumber(1200)); // 21

// Prove that we really returned a NUMBER and not a string:
console.log(typeof reverseNumber(1234)); // "number"
