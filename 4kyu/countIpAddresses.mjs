// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50
// * With input "10.0.0.0", "10.0.1.0"   => return  256
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end) {
  //TODO
  return isAsNumber(end) - isAsNumber(start);
}

function isAsNumber(ip) {
  return ip
    .split(".")
    .map(Number)
    .reduce((acc, octet) => acc * 256 + octet, 0);
}

console.log(ipsBetween("150.0.0.0", "150.0.0.1"));  // Expected: 1
console.log(ipsBetween("10.0.0.0", "10.0.0.50"));   // Expected: 50
console.log(ipsBetween("20.0.0.10", "20.0.1.0"));   // Expected: 246
console.log(ipsBetween("10.11.12.13", "10.11.13.0"));// Expected: 243
console.log(ipsBetween("160.0.0.0", "160.0.1.0"));  // Expected: 256
console.log(ipsBetween("170.0.0.0", "170.1.0.0"));  // Expected: 65536
console.log(ipsBetween("50.0.0.0", "50.1.1.1"));    // Expected: 65793
console.log(ipsBetween("180.0.0.0", "181.0.0.0"));  // Expected: 16777216
console.log(ipsBetween("1.2.3.4", "5.6.7.8"));      // Expected: 67372036
console.log(ipsBetween("0.0.0.0", "255.255.255.255")); // Expected: 4294967295