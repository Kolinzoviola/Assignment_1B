// =====================================================================
// PROBLEM 2 — Count Occurrences (Easy)
// ---------------------------------------------------------------------
// Write a function countChar(str, char) that returns how many times a
// specific character appears in a string.
// RULE: Do NOT use any built-in count methods.
//
// Concepts: for...of loop, === comparison, counter variable
//
// during a ward round you are walking down a ward of beds (the string),
// looking at each patient (rep by each letter) one at a time, and putting a
// tally mark on your clipboard (the counter) every time you meet a
// patient with the diagnosis you're auditing (the target character).
// =====================================================================

// This function takes TWO inputs:
//   str  -> the text we will search through, e.g. "javascript"
//   char -> the single character we are looking for, e.g. "a"
function countChar(str, char) {
  // STEP 1: Create a COUNTER (our clipboard tally) and start it at 0.
  // "let" creates a variable whose value is allowed to CHANGE later.
  // (We use "let", not "const", because we will keep adding to it.)
  let count = 0;

  // STEP 2: Visit every character in the string, one at a time.
  // "for...of" is a loop that walks through each item of something.
  // For a string, each item is ONE character.
  // On every round of the loop, the current character is stored in the
  // variable "letter".
  //   For "java": round 1 letter = "j", round 2 = "a", round 3 = "v",
  //   round 4 = "a". Then the loop ends by itself.
  for (const letter of str) {
    // STEP 3: Compare the current letter with the one we want.
    // "===" checks whether they are EXACTLY the same.
    // Note: "A" and "a" are DIFFERENT characters in JavaScript
    // (comparison is case-sensitive).
    if (letter === char) {
      // STEP 4: It matches, so add 1 to our tally.
      // "count = count + 1" means: take the old value, add 1,
      // and store the new value back in "count".
      // (Shortcut you'll see often: count++ does the same thing.)
      count = count + 1;
    }
    // If it does NOT match, we do nothing and the loop moves on
    // to the next letter automatically.
  }

  // STEP 5: After the loop has visited EVERY letter, hand back the total.
  // Notice this "return" is OUTSIDE the loop. If it were inside, the
  // function would stop after checking only the first letter.
  return count;
}

// ---------------------------------------------------------------------
// TESTING
// ---------------------------------------------------------------------
console.log("=== Problem 2: Count Occurrences ===");
console.log(countChar("javascript", "a")); // 2
console.log(countChar("hello world", "l")); // 3
console.log(countChar("banana", "z")); // 0
