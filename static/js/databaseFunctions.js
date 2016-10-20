var getBoardsFromDatabase = function() {
  console.log("getting all boards from database");
};

var getCardsFromDatabase = function(boardID) {
  console.log("getting all cards from database");
};

var saveBoardToDatabase = function(boardObj) {
  console.log("saving the board to database");
  console.log(boardObj);
  $.ajax({
    type: "POST",
    data: JSON.stringify(boardObj),
    url: "/save_board/",
    contentType: "application/json"
  });
};

var saveCardToDatabase = function(boardID, title) {
  console.log("saving the card to database");
};