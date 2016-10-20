var storage;
$(document).ready(function() {
  storage = new Storage();
  storage.getBoards();
  $("#edit").hide();

  $("#plus").click(function() {
      $("#add").hide();
      $("#edit").fadeIn("slow");
  });

  $("#cancel").click(function() {
      $("#edit").hide();
      $("#add").fadeIn("slow");
  });

  $("#save").click(function() {
      // get tile from form (test if filled) and generate code
      var title = document.getElementById("title").value;
      if (title === "" || title === null) {
          return false;
      }
      $("#edit").hide();
      $("#add").fadeIn("slow");
      // make a new board object
      var newBoard = {
          boardId: makeID(),
          boardTitle: title
      };
      // save board object to local storage
      storage.saveBoard(newBoard);
      // clear form value
      document.getElementById("title").value = "";
      var newBoardBox = '<div class="clearfix visible-xs-block"></div>' +
      '<div class="col-sm-3 boards" id=' + newBoard.boardId + '>' +
      '<div class="panel panel-primary">' +
      '<div class="panel-heading">' + newBoard.boardTitle + '</div>' +
      '<div class="panel-body"><img src="static/icons/Trello.jpg" class="img-responsive" style="width:100%" alt="Image" id="board"></div>' +
      '</div>' +
      '</div>';
      $("#boardRow").prepend(newBoardBox);
  });
});

///////////////////
///////////////////

var makeID = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i = 0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
