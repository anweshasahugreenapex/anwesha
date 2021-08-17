// //enter the scores of both the teams
// let score1 = Number(prompt("enter the 1st score of India-A"));

// let score2 = Number(prompt("enter the 2nd score of India-A"));

// let score3 = Number(prompt("enter the 3rd score of India-A"));
// let score4 = Number(prompt("enter the 1st score of India-B"));
// let score5 = Number(prompt("enter the 2nd score of India-B"));
// let score6 = Number(prompt("enter the 3rd score of India-B"));

let inputscores = () => {
  //function to take input and calculate average
  let score1 = Number(prompt("enter the 1st score : "));

  let score2 = Number(prompt("enter the 2nd score : "));

  let score3 = Number(prompt("enter the 3rd score : "));
  // if (!(isNaN(score1)) && !(isNaN(score2)) && !(isNaN(score3))) {
  //     document.write("please enter valid numbers ")

  // }
  //calculate the average function
  let calcAverage = (score1, score2, score3) => {
    let sum = score1 + score2 + score3;
    let avg = (sum / 3).toFixed(2);
    return avg;
  };
  // let avg_score = calcAverage(score1, score2, score3);
  // return avg_score;
};

alert("enter the team A scores");

let avgIndiaA = inputscores(); //calculate average for team A.
alert("enter the team B scores");
let avgIndiaB = inputscores(); //calculate average for team B.

//function to compare and check the scores and declare the winner
let checkWinner = (avgIndiaA, avgIndiaB) => {
  if (avgIndiaA >= 2 * avgIndiaB) {
    document.write("India-A win(" + avgIndiaA + " Vs. " + avgIndiaB + ")"); //if team A wins
  } else if (avgIndiaB >= 2 * avgIndiaA) {
    document.write("India-B win(" + avgIndiaB + " Vs. " + avgIndiaA + ")"); //if team B wins
  } else {
    document.write("both lose the game!"); //if both of them lose.
  }
};

checkWinner(avgIndiaA, avgIndiaB); //call the check winner function.
