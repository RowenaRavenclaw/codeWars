import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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

rl.question("Enter a string to convert to camel case: ", (inputString) => {
  const camelCaseName = toCamelCase(inputString);
  console.log("Camel case output:", camelCaseName);
  rl.close();
});
