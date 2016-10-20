var getBoardsFromDatabase = function() {
  console.log("getting all boards from database");
};

var getCardsFromDatabase = function(boardID) {
  console.log("getting all cards from database");
};

var saveBoardToDatabase = function(title) {
  console.log("saving the board to database");
  var newBoard;
  $.ajax({
    url: "/save_board/",
    type: "POST",
    data: JSON.stringify({title: title}),
    contentType: "application/json",
    dataFilter: function (data) {
      showBoard(JSON.parse(data).boardId, title);
    }
  });
};

var saveCardToDatabase = function(boardID, title) {
  console.log("saving the card to database");
};