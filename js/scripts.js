// Utility Logic

function noInputtedWord(word, text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}
// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
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