// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  //   return (Number(a) + Number(b)).toString(); // Fix me!
  const result = [];
  let carry = 0;

  while (a.length < b.length) a = '0' + a;
  while (b.length < a.length) b = '0' + b;

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = parseInt(a[i]) + parseInt(b[i]) + carry;
    carry = Math.floor(sum / 10);
    result.unshift(sum % 10);
  }

  if (carry) {
    result.unshift(carry);
  }

  return result.join("");
}

console.log(add("3", "321"));
console.log(add("11", "99"));
console.log(add("123456789123456789", "987654321987654321")); // "1111111111111111110"
