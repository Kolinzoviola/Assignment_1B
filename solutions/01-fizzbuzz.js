Author: Emeka Collins Elumelu
ID: ALT/SOE/KAR/026/0004
// =====================================================================
// PROBLEM 1 — FizzBuzz (Easy)
// ---------------------------------------------------------------------
// Write a function fizzBuzz(n) that returns a string:
//   - divisible by BOTH 3 and 5  -> "FizzBuzz"
//   - divisible by 3 only        -> "Fizz"
//   - divisible by 5 only        -> "Buzz"
//   - otherwise                  -> the number itself, as a string
//
// Concepts: % operator, conditionals, type conversion
//
// example using the triage system in the think of a triage nurse sorting patients.
// The MOST specific rule ("has BOTH chest pain AND low BP") must be
// checked FIRST, otherwise the patient gets sent to a less urgent queue
// by an earlier, more general rule. FizzBuzz works the same way.
// =====================================================================

// "function" tells JavaScript we are creating a reusable block of code.
// "fizzBuzz" is the name we give it.
// "(n)" means the function receives ONE input, and inside the function
// we will refer to that input by the name "n".
function fizzBuzz(n) {
  // ---------------------------------------------------------------
  // THE % OPERATOR ("remainder" or "modulo")
  // n % 3 gives the REMAINDER after dividing n by 3.
  //   9 % 3  -> 0   (9 divides by 3 perfectly, nothing left over)
  //   10 % 3 -> 1   (10 ÷ 3 = 3 remainder 1)
  // So "n % 3 === 0" is simply a way of asking:
  //   "Does n divide by 3 with nothing left over?"
  // ---------------------------------------------------------------

  // "===" means "is exactly equal to" (same value AND same type).
  // "&&" means "AND" — BOTH sides must be true.
  // We check "divisible by 3 AND 5" FIRST. Why? Because 15 is also
  // divisible by 3 on its own. If we checked "% 3" first, 15 would
  // return "Fizz" and never reach the "FizzBuzz" check.
  if (n % 3 === 0 && n % 5 === 0) {
    // "return" sends this value back to whoever called the function,
    // and immediately STOPS the function. Nothing below runs.
    return "FizzBuzz";
  }
  // "else if" = "otherwise, if this other thing is true..."
  // We only reach this line if the check above was FALSE.
  else if (n % 3 === 0) {
    return "Fizz";
  }
  // Only reached if n was NOT divisible by 3.
  else if (n % 5 === 0) {
    return "Buzz";
  }
  // "else" = "if none of the conditions above were true, do this".
  else {
    // TYPE CONVERSION: n is a NUMBER (e.g. 7), but the problem wants a
    // STRING (e.g. "7"). String(n) converts the number into text.
    return String(n);
  }
}

// ---------------------------------------------------------------------
// TESTING OUR FUNCTION
// console.log() prints whatever is inside the brackets to the terminal.
// Each line calls fizzBuzz with a number and prints what comes back.
// The comment on the right shows what we EXPECT to see.
// ---------------------------------------------------------------------
console.log("=== Problem 1: FizzBuzz ===");
console.log(fizzBuzz(3));  // "Fizz"
console.log(fizzBuzz(5));  // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(7));  // "7"

// typeof tells us the TYPE of a value. This proves we returned a string,
// not a number.
console.log(typeof fizzBuzz(7)); // "string"