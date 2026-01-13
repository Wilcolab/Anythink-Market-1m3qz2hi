/**
 * Converts a string to camelCase format
 * Handles multiple separator types: spaces, underscores, hyphens
 * @param {string} str - The string to convert
 * @returns {string} - The camelCase version of the string
 */
function toCamelCase(str) {
  return str
    // Split on spaces, underscores, or hyphens
    .split(/[\s_-]+/)
    // Filter out empty strings
    .filter(word => word.length > 0)
    // Map to lowercase
    .map(word => word.toLowerCase())
    // Capitalize first letter of each word except the first
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    // Join all words together
    .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber

module.exports = toCamelCase;
