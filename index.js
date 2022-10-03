// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Apply Functional Programming to Convert Strings to URL Slugs</h1>`;

/** TODO:
 * Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL.  You can use any of the methods covered in this section, and don't use replace.  Here are the requirements:
 *    The input is a string with spaces and title-cased words
 *    The output is a string with the spaces between words replaced by a hyphen (-)
 *    The output should be all lower-cased letters
 *    The output should not have any spaces
 *
 // Only change code below this line 
 function urlSlug(title) {
 
 }
 // Only change code above this line
 
 urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
 */

// Only change code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/).join('-').toLowerCase();
}
// Only change code above this line

console.log(urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone'));
console.log(urlSlug('Winter Is Coming'));
console.log(urlSlug('Hold The Door'));
console.log(urlSlug(' Winter Is  Coming'));
