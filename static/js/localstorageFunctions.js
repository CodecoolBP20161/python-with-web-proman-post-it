var getBoardsFromLocalstorage = function() {
  console.log("getting all boards from localstorage");
  var x = localStorage.getItem('boards');
  x = JSON.parse(x);
  for (var i in x) {
    showBoard(x[i].boardId, x[i].boardTitle);
  }
};

var getCardsFromLocalstorage = function(boardID) {
  console.log("getting all cards from localstorage");
};

var saveBoardToLocalstorage = function(boardObj) {
  console.log("saving the board to localstorage");
  var x = localStorage.getItem('boards');
  if (x === null) {
    x = JSON.stringify([]);
  }
  x = JSON.parse(x);
  x.push(boardObj);
  localStorage.setItem('boards', JSON.stringify(x));
};

var saveCardToLocalstorage = function(boardID, title) {
  console.log("saving the card to localstorage");
};