// charAt: Returns the character at the specified index in a string.
const str = "hello";
const char = str.charAt(1); // Output: "e"
//console.log(char);


//charCodeAt: Returns the Unicode value of the character at the specified index in a string.
const str_ = "hello";
const charCode = str_.charCodeAt(1); // Output: 101
//console.log(charCode);


//concat: Joins two or more strings and returns a new string.
const str1 = "hello";
const str2 = "world";
const result = str1.concat(" ", str2); // Output: "hello world"
//console.log(result);


//endsWith: Checks if a string ends with the specified characters and returns a boolean value.
const str3 = "hello world";
const endsWith = str3.endsWith("world"); // Output: true
//console.log(endsWith);


//includes: Checks if a string contains the specified characters and returns a boolean value.
const str4 = "hello world";
const includes = str4.includes("world"); // Output: true
//console.log(includes);


//indexOf: Returns the index of the first occurrence of the specified characters in a string.
const str5 = "hello world";
const index = str5.indexOf("world"); // Output: 6
//console.log(index);


//lastIndexOf: Returns the index of the last occurrence of the specified characters in a string.
const str6 = "hello world";
const lastIndex = str6.lastIndexOf("o"); // Output: 7
//console.log(lastIndex);


//localeCompare: Compares two strings in the current locale and returns a number indicating their relative order.
const str7 = "apple";
const str8 = "banana";
const result2 = str7.localeCompare(str8); // Output: -1
//console.log(result2);


//match: Searches a string for a specified pattern and returns an array of matches.
const str9 = "The quick brown fox jumps over the lazy dog";
const regex = /[A-Z]/g;
const result3 = str9.match(regex); // Output: ["T", "F"]
//console.log(result3);


//normalize: Returns the Unicode Normalization Form of a string.
const str10 = "café";
const result4 = str10.normalize(); // Output: "café"
//console.log(result4);


//padEnd: Pads a string with a specified character or characters, so that the resulting string reaches a specified length.
const str11 = "hello";
const result5 = str11.padEnd(10, "x"); // Output: "helloxxxxx"
//console.log(result5);


//padStart: Pads a string with a specified character or characters, so that the resulting string reaches a specified length.
const str12 = "hello";
const result6 = str12.padStart(10, "x"); // Output: "xxxxxhello"
//console.log(result6);


//repeat: Returns a new string with a specified number of copies of an existing string.
const str13 = "hello";
const result7 = str.repeat(3); // Output: "hellohellohello"
//console.log(result7);


//replace: Searches a string for a specified value or pattern, and returns a new string where the specified value or pattern is replaced with a replacement string.
const str14 = "The quick brown fox jumps over the lazy dog";
const result8 = str14.replace("brown", "red"); // Output: "The quick red fox jumps over the lazy dog"
//console.log(result8);


//search: Searches a string for a specified value or pattern, and returns the position of the match.
const str15 = "The quick brown fox jumps over the lazy dog";
const index2 = str15.search("brown"); // Output: 10
//console.log(index2);


//slice: Extracts a section of a string and returns a new string.
const str16 = "The quick brown fox jumps over the lazy dog";
const section = str16.slice(4, 9); // Output: "quick"
//console.log(section);


//split: Splits a string into an array of substrings based on a specified separator.
const str17 = "The quick brown fox jumps over the lazy dog";
const arr = str17.split(" "); // Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]
//console.log(arr);


//startsWith: Checks if a string starts with the specified characters and returns a boolean value.
const str18 = "The quick brown fox jumps over the lazy dog";
const startsWith = str18.startsWith("The"); // Output: true
//console.log(startsWith);


//substr: Extracts a specified number of characters from a string, starting at a specified index.
const str19 = "The quick brown fox jumps over the lazy dog";
const section1 = str19.substr(10, 5); // Output: "brown"
//console.log(section1);


//substring: Extracts the characters between two specified indices in a string.
const str20 = "The quick brown fox jumps over the lazy dog";
const section2 = str20.substring(4, 9); // Output: "quick"
//console.log(section2);


//toLocaleLowerCase: Converts a string to lowercase, according to the current locale.
const str21 = "Hello World";
const result11 = str21.toLocaleLowerCase(); // Output: "hello world"
//console.log(result11);


//toLocaleUpperCase: Converts a string to uppercase, according to the current locale.
const str22 = "Hello World";
const result12 = str22.toLocaleUpperCase(); // Output: "HELLO WORLD"
//console.log(result12);


//toLowerCase: Converts a string to lowercase.
const str23 = "Hello World";
const result55 = str23.toLowerCase(); // Output: "hello world"
//console.log(result55);


//toUpperCase: Converts a string to uppercase.
const str24 = "Hello World";
const result22 = str24.toUpperCase(); // Output: "HELLO WORLD"
//console.log(result22);


//trim: Removes whitespace from both ends of a string.
const str25 = "    Hello World   ";
const result78 = str25.trim(); // Output: "Hello World"
//console.log(result78);


//trimEnd: Removes whitespace from the end of a string.
const str26 = "    Hello World   ";
const result222 = str26.trimEnd(); // Output: "    Hello World"
//console.log(result222);


//trimStart: Removes whitespace from the beginning of a string.
const str27 = "    Hello World   ";
const result221 = str27.trimStart(); // Output: "Hello World   "
//console.log(result221);

//There are a total of 27 string methods in JavaScript/TypeScript.




