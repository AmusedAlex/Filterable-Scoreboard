// 1st we nodel the list of scores

// Score: Number
// Name: String
// We want our elements to have both a name and a score
// Many entities with multiple properties

let scores = [
  // In the real world the list comes from somewhere else
  // i. e. server, database etc.
  { name: "Eric", score: 100 },
  { name: "Tim", score: 90 },
  { name: "Paul", score: 80 },
  { name: "Jim", score: 60 },
  { name: "Mario", score: 20 },
  { name: "Paolo", score: 99 },
  { name: "Barack", score: 66 },
  { name: "George", score: 75 },
  { name: "Joe", score: 35 },
  { name: "Jake", score: 45 },
  { name: "Victor", score: 10 },
];

function sortScores(scoreObject1, scoreObject2) {
  // This is a function that takes 2 numbers
  // Returns -1 if the first number is < the second one
  // Returns +1 if the first number is >= the second one
  if (scoreObject1.score > scoreObject2.score) {
    return -1;
  } else {
    return +1;
  }
}
// This is a function, so the name shell be a VERB
function visualizeScores() {
  //   Here we add sorting the scores array using as sorting function
  // the function sortScores as defined above
  let sortedScores = scores.sort(sortScores);

  // Also we could write this like that:
  //   let sortedScores = scores.sort((scoreObject1, scoreObject2) => {
  //     if (scoreObject1.score > scoreObject2.score) {
  //       return -1;
  //     } else {
  //       return +1;
  //     }
  //   });

  // 1) For each element insde the array of scores
  for (let scoreObject of scores) {
    let li = document.createElement("li");
    li.classList.add("scoreboard-line");

    let nameSpan = document.createElement("span");
    nameSpan.classList.add("item-name");
    nameSpan.innerText = scoreObject.name;

    let scoreSpan = document.createElement("span");
    scoreSpan.classList.add("item-score");
    scoreSpan.innerText = scoreObject.score;

    li.appendChild(nameSpan);
    li.appendChild(scoreSpan);

    if (scoreObject.score >= 60) {
      li.classList.add("good-score");
    } else {
      li.classList.add("bad-score");
    }

    let ol = document.getElementById("scoreboard-list");
    ol.appendChild(li);
  }
  // 2.0) Create li, span name, span score
  // 2.1) Customize Adding some classed / Ids
  // 3) Appending the to the ol, to their parent
}

window.onload = function () {
  // Inside this function I call everything on page onload
  visualizeScores();
};
