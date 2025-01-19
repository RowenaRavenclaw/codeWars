function toCamelCase(str) {
  return str
    .toLowerCase() // Convert the string to lowercase
    .split(" ") // Split the string into words
    .map(
      (word, index) =>
        index === 0
          ? word // Leave the first word in lowercase
          : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize the first letter of the other words
    )
    .join(""); // Join the words back into a single string
}

const inputString = "Extract the domain name from a URL";
const camelCaseName = toCamelCase(inputString);

console.log(camelCaseName); // Output: extractTheDomainNameFromAUrl
