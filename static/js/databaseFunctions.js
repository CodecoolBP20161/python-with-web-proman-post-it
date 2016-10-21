var getBoardsFromDatabase = function() {
  $.ajax({
    url: "/get_boards/",
    type: "GET",
    success: function (data) {
      for (var i = 0; i < data.boards.length; i++) {
        showBoard(data.boards[i].boardId, data.boards[i].title);
      }
    },
    error: function(error) {console.log(error);}
  });
};

var getCardsFromDatabase = function(boardID) {
  console.log("getting all cards from database");

};

var saveBoardToDatabase = function(title) {
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