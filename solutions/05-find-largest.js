// =====================================================================
// PROBLEM 5 — Find the Largest Number (Easy-Medium)
// ---------------------------------------------------------------------
// Write a function findMax(a, b, c) that takes three numbers and returns
// the largest one.
// RULE: You may NOT use Math.max().
//
// Concepts: comparison operators, conditionals, variables
//
// 🩺 Clinic analogy: finding the highest of three blood-pressure
// readings. You note the first reading as "highest so far", then look at
// each of the others. If one is higher, you cross out the old note and
// write the new one. After the last reading, your note holds the answer.
// =====================================================================

function findMax(a, b, c) {
  // STEP 1: Assume the FIRST number is the largest (our "highest so far").
  // We use "let" because this value may be replaced later.
  let largest = a;

  // STEP 2: Compare the second number with our current best.
  // ">" means "greater than".
  if (b > largest) {
    // b beat the current champion, so b becomes the new largest.
    largest = b;
  }

  // STEP 3: Compare the third number with whatever is largest NOW
  // (which could be a or b, depending on step 2).
  if (c > largest) {
    largest = c;
  }

  // NOTE: these are two SEPARATE "if" statements, not "else if".
  // We want BOTH comparisons to run every time, because b and c each
  // need their own chance to challenge the current largest.

  // STEP 4: After checking all three, return the winner.
  return largest;
}

// ---------------------------------------------------------------------
// TESTING
// ---------------------------------------------------------------------
console.log("=== Problem 5: Find the Largest Number ===");
console.log(findMax(3, 7, 2)); // 7
console.log(findMax(10, 10, 5)); // 10  (a tie is fine: 10 is still the largest)
console.log(findMax(-1, -5, -3)); // -1  (works with negatives too)
