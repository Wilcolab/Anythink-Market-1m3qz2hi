/**
 * FEW-SHOT PROMPT: Case Conversion Functions
 * Learning from examples to improve function implementation
 */

// Example 1: Simple camelCase conversion
function example1_camelCase() {
  const input = 'user_name';
  const result = 'userName';
  // Pattern: Split on underscore, lowercase first word, capitalize subsequent words
  console.log('Example 1:', input, '→', result);
}

// Example 2: Handling multiple separators
function example2_multiSeparator() {
  const input = 'mobile-phone number';
  const result = 'mobilePhoneNumber';
  // Pattern: Split on multiple separators (-, space), apply camelCase rules
  console.log('Example 2:', input, '→', result);
}

// Example 3: Uppercase acronym handling
function example3_acronym() {
  const input = 'XMLHttpRequest';
  const result = 'xmlHttpRequest';
  // Pattern: Detect uppercase boundaries, split accordingly, apply lowercase
  console.log('Example 3:', input, '→', result);
}

// Example 4: Dot case conversion
function example4_dotCase() {
  const input = 'user_profile_name';
  const result = 'user.profile.name';
  // Pattern: Split on separators, lowercase all, join with dots
  console.log('Example 4:', input, '→', result);
}

// Example 5: Edge case - empty or whitespace
function example5_edgeCase() {
  const input = '   ';
  const result = '';
  // Pattern: Trim input, return empty string if nothing remains
  console.log('Example 5:', `"${input}"`, '→', `"${result}"`);
}

/**
 * Learned Implementation: Robust case conversion function
 * Uses insights from all examples above
 */
function toCamelCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string, but received ${typeof str}`);
  }

  if (!str.trim()) {
    return '';
  }

  // Split on multiple separators AND camelCase boundaries
  const words = str
    .split(/[\s_-]+|(?=[A-Z])/)
    .filter(word => word.length > 0)
    .map(word => word.toLowerCase());

  return words
    .map((word, index) => {
      if (index === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

function toDotCase(str) {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string, but received ${typeof str}`);
  }

  if (!str.trim()) {
    return '';
  }

  const words = str
    .split(/[\s_-]+|(?=[A-Z])/)
    .filter(word => word.length > 0)
    .map(word => word.toLowerCase());

  return words.join('.');
}

// Run all examples
example1_camelCase();
example2_multiSeparator();
example3_acronym();
example4_dotCase();
example5_edgeCase();

console.log('\n=== Learned Implementation Tests ===');
console.log('toCamelCase("first name"):', toCamelCase('first name'));
console.log('toCamelCase("user_id"):', toCamelCase('user_id'));
console.log('toCamelCase("XMLHttpRequest"):', toCamelCase('XMLHttpRequest'));
console.log('toDotCase("user_profile_name"):', toDotCase('user_profile_name'));

module.exports = { toCamelCase, toDotCase };
