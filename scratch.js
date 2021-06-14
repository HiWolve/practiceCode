let sentenceMaker = (str1, str2) +> {
  return (str2) => {return (str1 += str2);
  }
}

let helloSentence = sentenceMaker("Hello");
let ggodbyeSenence = 
