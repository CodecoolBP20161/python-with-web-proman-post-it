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
      // save board object to local storage
      var id = storage.saveBoard(title);
      // clear form value
      document.getElementById("title").value = "";
  });
});


var showBoard = function(id, title) {
  var newBoardBox = '<div class="clearfix visible-xs-block"></div>' +
  '<div class="col-sm-3 boards" id=' + id + '>' +
  '<div class="panel panel-primary">' +
  '<div class="panel-heading">' + title + '</div>' +
  '<div class="panel-body"><img src="static/icons/Trello.jpg" class="img-responsive" style="width:100%" alt="Image" id="board"></div>' +
  '</div>' +
  '</div>';
  $("#boardRow").prepend(newBoardBox);
};