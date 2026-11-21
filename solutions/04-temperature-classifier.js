// =====================================================================
// PROBLEM 4 — Temperature Classifier (Easy-Medium)
// ---------------------------------------------------------------------
// Write a function classifyTemp(celsius) that returns:
//   Below 0   -> "Freezing"
//   0 – 10    -> "Cold"
//   11 – 20   -> "Cool"
//   21 – 30   -> "Warm"
//   Above 30  -> "Hot"
//
// Concepts: if / else if / else, comparison operators, return values
//
// after taking temperature,  grading a patient's temperature on an observation
// chart — hypothermic, normal, low-grade fever, high fever. You start at
// one end of the scale and work through the bands IN ORDER. The first
// band the reading fits into is the answer.
// =====================================================================

function classifyTemp(celsius) {
  // COMPARISON OPERATORS used below:
  //   <   less than                 (5 < 10 is true)
  //   <=  less than OR equal to     (10 <= 10 is true)
  //
  // HOW THE CHAIN WORKS:
  // JavaScript checks each condition from TOP to BOTTOM and stops at the
  // FIRST one that is true. That means each later check already "knows"
  // that all the earlier checks were false.

  if (celsius < 0) {
    // Anything below zero, e.g. -5
    return "Freezing";
  } else if (celsius <= 10) {
    // We only get here if celsius is NOT below 0, i.e. it is 0 or more.
    // So this band really means "0 up to and including 10".
    return "Cold";
  } else if (celsius <= 20) {
    // We know it's above 10 (otherwise the line above would have caught
    // it). So this band means "above 10, up to and including 20".
    // Using "<= 20" instead of ">= 11 && <= 20" also correctly handles
    // decimals like 10.5, which would otherwise fall through a gap.
    return "Cool";
  } else if (celsius <= 30) {
    // Above 20, up to and including 30.
    return "Warm";
  } else {
    // If none of the above matched, it must be above 30.
    return "Hot";
  }
}

// ---------------------------------------------------------------------
// TESTING — including the "edge" values right on each boundary,
// because boundaries are where bugs like to hide.
// ---------------------------------------------------------------------
console.log("=== Problem 4: Temperature Classifier ===");
console.log(classifyTemp(-5)); // "Freezing"
console.log(classifyTemp(0)); // "Cold"   (boundary)
console.log(classifyTemp(10)); // "Cold"   (boundary)
console.log(classifyTemp(15)); // "Cool"
console.log(classifyTemp(20)); // "Cool"   (boundary)
console.log(classifyTemp(25)); // "Warm"
console.log(classifyTemp(30)); // "Warm"   (boundary)
console.log(classifyTemp(35)); // "Hot"
