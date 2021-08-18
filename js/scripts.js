// Utility Logic

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

// Business Logic

function wordCounter(text) {
  if (noInputtedWord(text)) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function occurrenceCounter(word, text) {
  if (noInputtedWord(word, text)) {
    return "You need to enter both a word and a text passage!";
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return "There are " + wordCount + " total matches!";
}

function boldPassage(word, text) {
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

function omitOffensive (text) {
  let array = text.split(" ");
  let result = [];
  array.forEach(function(element) {
    if(element !== "zoinks" && element !== "muppeteer" && element !== "biffaroni" && element !== "loopdaloop")
  {
  result.push(element);
}
  else {
    result.push("!@#%");
  }
});
  return result.join(" ");
}

function firstInstanceOfWord(word, text) {
  const textArray = text.split(" ");
  let position = -1;
  textArray.forEach(function(element, index) {
    console.log(index);
    if ((word === element) && (position === -1)) {
      position = index;
    }
  });
  return position;
}

// WIP from Ben & Nathan
function commonWordCounter(text) {
  const wordArray = text.trim().toLowerCase().split(" ");
  const uniqueArray = [];
  if (text.trim().length ===0) {
    return 0;
  }
  wordArray.forEach(function(element) {
    if (!uniqueArray.includes(element)) {
      uniqueArray.push(element);
    }
  });
  uniqueArray.sort((a, b) => {
    return occurrenceCounter(b, text) - occurrenceCounter(a, text)
  });
  return uniqueArray.slice(0,3);
}

// Erik Solution 
// function commonWordCounter (passage) {
//   const wordArray = passage.split(" ");
//   let punctuationlessPassage = passage.replace(/[.,\?#!$%\^&\*;:{}=\-_'~()]/g, "");
//   let first = ["", 0];
//   let second = ["", 0];
//   let third = ["", 0];

//   wordArray.forEach(function (word) {
//     let wordCount = occurrenceCounter(word, passage);
//     if (wordCount > first[1]) {
//       third[0] = second[0];
//       third[1] = second[1];
//       second[0] = first[0];
//       second[1] = first[1];
//       first[0] = word;
//       first[1] = wordCount;
//     } else if (wordCount > second[1]) {
//       third[0] = second[0];
//       third[1] = second[1];
//       second[0] = word;
//       second[1] = wordCount;
//     } else if (wordCount > third[1]) {
//       third[0] = word;
//       third[1] = wordCount;
//     }
//   })
//   // need return 
// }


// UI Logic

$(document).ready(function(){
  $("form#word-counter").submit(function(event){
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = occurrenceCounter(word, passage);
    const omitsResults = omitOffensive(passage);
    // const commonCounter = commonWordCounter(passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#offensive").html(omitsResults);
    // $("#word-list").html(commonCounter);
  });
});