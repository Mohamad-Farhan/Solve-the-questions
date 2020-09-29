console.log('Problem Solving Q: 2 ');

/* Longest Word 2 */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and 
return the largest word in the string. If there are two or more words that are the same length, 
return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
*/

function LongestWord_2(sen) {
 sen =  sen.trim();
 sen = sen.replace(/[^a-zA-Z0-9 ]/g, '')
 let Longest = ""

 var momo = sen.split(" ").forEach(word => {
      if(word.length > Longest.length) Longest = word;
 });
 return Longest;

}

  



/* 
Examples:
LongestWord_2('lol!- time.'); // => 'time'
LongestWord_2('I** love, cats'); // => 'love'
LongestWord_2('coding&& is awesome'); // => 'awesome'
LongestWord_2('hello|| world'); // => 'hello'
*/


