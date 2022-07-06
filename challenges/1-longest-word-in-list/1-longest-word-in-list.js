/*function:
=========
name: longestInList

parameters:
	- WORDS: list of strings

return type: string

pseudo code:
============
set LONGEST to the 0th element in WORDS

for each string, WORD, in WORDS
	if WORD has more characters than LONGEST
		set LONGEST to WORD

return LONGEST
*/

function longestInList(WORDS) {
    let LONGEST = WORDS[0];
    for (let WORD of WORDS) {
        if (WORD.length > LONGEST.length) {
            LONGEST = WORD;
        }
    }
    return LONGEST

}



//test cases:

console.log(longestInList(["England", "Wales", "Scotland", "Northern Ireland"]), 'should be "Northern Ireland"') 
console.log(longestInList(["the", "quick", "brown", "fox"]), 'should be "quick"')
console.log(longestInList(["hello", "hi", "greetings", "hey"]), 'should be "greetings"')