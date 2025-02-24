// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const textLow = text.toLowerCase();

  //   const buff = [];
  //   textLow.split("").forEach((el) => {
  //     if (!buff.includes(el) && textLow.indexOf(el) !== textLow.lastIndexOf(el)) {
  //       buff.push(el);
  //     }
  //   });
  // that's O(n*n)

  // that's O(n)
  let charCount = {};
  let count = 0;
  for (const char of textLow) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const key in charCount) {
    if (charCount[key] > 1) {
      count++;
    }
  }
  return count;
}

console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("indivisibility"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));
console.log(duplicateCount("ABBA"));
