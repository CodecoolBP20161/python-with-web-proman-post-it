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

var saveBoardToLocalstorage = function(title) {
  console.log("saving the board to localstorage");
  var x = localStorage.getItem('boards');
  if (x === null) {
    x = JSON.stringify([]);
  }
  x = JSON.parse(x);
  var newBoard = {
      boardId: makeID(),
      boardTitle: title
  };
  x.push(newBoard);
  localStorage.setItem('boards', JSON.stringify(x));
  showBoard(newBoard.boardId, title);
};

var saveCardToLocalstorage = function(boardID, title) {
  console.log("saving the card to localstorage");
};

var makeID = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i = 0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};