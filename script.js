var createCandidate = function (name, color) {
  
  var candidate = {};

  candidate.name = name;

  candidate.results = null;

  candidate.totalVotes = 0;
  
  candidate.color = color;
  
  candidate.resultsTotal = function(){
  
  this.totalVotes = 0;
  
  for (var i = 0; i < this.results.length; i++) {
         this.totalVotes = this.totalVotes + this.results[i];         
    }
  };
  
  return candidate;
};

var bristle = createCandidate("Emily Bristle", [40, 60, 200]);

var caprario = createCandidate("David Caprario", [200, 0, 40]);

console.log("Emily's color is " + bristle.color);
console.log("David's color is " + caprario.color);

bristle.results = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

caprario.results = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

bristle.results[9] = 1;
caprario.results[9] = 28;

bristle.results[4] = 17;
caprario.results[4] = 38;

bristle.results[43] = 11;
caprario.results[43] = 27;

var setStateResults = function(state) {
  
  theStates[state].winner = null;
  
  if (bristle.results[state] > caprario.results[state]) {
    theStates[state].winner = bristle;
  }
  else if (caprario.results[state] > bristle.results[state]){
    theStates[state].winner = caprario;
  }
  
  var stateWinner = theStates[state].winner;
  
  if (stateWinner !== null) {
    
    theStates[state].rgbColor = stateWinner.color;
  }
  else if (stateWinner === null) {
    theStates[state].rgbColor = [180,175,250];
  }
  var stateInfoTable = document.getElementById('stateResults');

  var header = stateInfoTable.children[0];

  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];

  var body = stateInfoTable.children[1];

  var candidate1 = body.children[0].children[0];
  var results1 = body.children[0]. children[1];

  var candidate2 = body.children[1].children[0];
  var results2 = body.children[1].children[1];

  var stateWinnerName = body.children[2].children[1]; 

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  candidate1.innerText = bristle.name;
  results1.innerText = bristle.results[state];

  candidate2.innerText = caprario.name;
  results2.innerText = caprario.results[state];

    if (theStates[state].winner === null){
      stateWinnerName.innerText = "TIE";
    } else {
      stateWinnerName.innerText = theStates[state].winner.name;
      }
}

console.log("test");

bristle.resultsTotal();
caprario.resultsTotal();

console.log(bristle.totalVotes);
console.log(caprario.totalVotes);

var winner ="?";

if (bristle.totalVotes > caprario.totalVotes) {
  winner = bristle.name;
}
else if (caprario.totalVotes > bristle.totalVotes) {
  winner = caprario.name;
}
else {
  winner = "to be determined"
}

console.log("The winner is " + winner + "!");

var table = document.getElementById('countryResults');

table.children[0].children[0].children[0].innerText = bristle.name;
table.children[0].children[0].children[1].innerText = bristle.totalVotes;
table.children[0].children[0].children[2].innerText = caprario.name;
table.children[0].children[0].children[3].innerText = caprario.totalVotes;
table.children[0].children[0].children[5].innerText = winner;

console.log("end test");











