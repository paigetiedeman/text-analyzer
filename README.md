Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
code: wordCounter("");
expected output: 0
actual output: 1

Test: "It should return 0 for a string that is only spaces."
code: wordCounter("           ");
Expected Output: 0
Actual Ouput: 9 (number of spaces)

Test: "It should not count numbers as words."
Code: wordcounter("hi there 77 19");
Expected Output: 2

Describe: occurrenceCounter()
Test: it should return a 0 for number of occurrences in
Code:
const text = "";
const word = "red";
occurrenceCounter(word, text);
Expected Output: 0

Test: "It should return 1 occurence of a word when the word and the text are the same."
Code: 
const text = "red";
const word = "red";
occuranceCounter(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
occuranceCounter(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
occuranceCounter(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "RED red green RED red";
const word = "red";
occuranceCounter(word, text);
Expected Output: 4

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
occurrencesCounter(word, text);
Expected Output: 3
