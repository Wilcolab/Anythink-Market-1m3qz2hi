/**
 * String case conversion utility module
 * 
 * Provides robust functions for converting strings between different naming conventions.
 * Handles multiple separator types (spaces, underscores, hyphens) and camelCase boundaries.
 * All functions include comprehensive input validation and error handling.
 * 
 * @module stringCaseConverters
 * @version 1.0.0
 */

/**
 * Converts a string to camelCase format
 * 
 * Transforms input strings into camelCase by identifying word boundaries
 * through separators (spaces, underscores, hyphens) and camelCase transitions.
 * The first word remains lowercase, while subsequent words are capitalized.
 * Handles edge cases like leading/trailing separators, multiple consecutive
 * separators, and existing camelCase patterns.
 * 
 * @function toCamelCase
 * @param {string} str - The string to convert to camelCase
 * @returns {string} The camelCase version of the input string
 * @throws {TypeError} If input is not a string, includes the actual type received
 * 
 * @example
 * toCamelCase('first name');           // Returns: 'firstName'
 * toCamelCase('user_id');              // Returns: 'userId'
 * toCamelCase('SCREEN_NAME');          // Returns: 'screenName'
 * toCamelCase('mobile-number');        // Returns: 'mobileNumber'
 * toCamelCase('XMLHttpRequest');       // Returns: 'xmlHttpRequest'
 * toCamelCase('already_camelCase');    // Returns: 'alreadyCamelCase'
 * toCamelCase('  spaced  out  ');      // Returns: 'spacedOut'
 * toCamelCase('single');               // Returns: 'single'
 * toCamelCase('');                     // Returns: ''
 * toCamelCase('___multiple___sep___'); // Returns: 'multipleSep'
 * toCamelCase('SCREAMING_SNAKE_CASE'); // Returns: 'screamingSnakeCase'
 * 
 * @since 1.0.0
 */

/**
 * Converts a string to dot.case format
 * 
 * Transforms input strings into dot.case notation by identifying word boundaries
 * through separators (spaces, underscores, hyphens) and camelCase transitions.
 * All words are converted to lowercase and joined with dots.
 * Handles edge cases like leading/trailing separators and multiple consecutive
 * separators, making it ideal for configuration keys and nested property paths.
 * 
 * @function toDotCase
 * @param {string} str - The string to convert to dot.case format
 * @returns {string} The dot.case version of the input string
 * @throws {TypeError} If input is not a string, includes the actual type received
 * 
 * @example
 * toDotCase('first name');           // Returns: 'first.name'
 * toDotCase('user_id');              // Returns: 'user.id'
 * toDotCase('SCREEN_NAME');          // Returns: 'screen.name'
 * toDotCase('mobile-number');        // Returns: 'mobile.number'
 * toDotCase('XMLHttpRequest');       // Returns: 'xml.http.request'
 * toDotCase('  spaced  out  ');      // Returns: 'spaced.out'
 * 
 * @since 1.0.0
 */
