var getBoardsFromLocalstorage = function() {
  console.log("getting all boards from localstorage");
  var x = localStorage.getItem('boards');
  x = JSON.parse(x);
  for (var i in x) {
      var newBoardBox = '<div class="clearfix visible-xs-block"></div>' +
      '<div class="col-sm-3 boards" id=' + x[i].boardId + '>' +
      '<div class="panel panel-primary">' +
      '<div class="panel-heading">' + x[i].boardTitle + '</div>' +
      '<div class="panel-body"><img src="static/icons/Trello.jpg" class="img-responsive" style="width:100%" alt="Image" id="board"></div>' +
      '</div>' +
      '</div>';
      $("#boardRow").prepend(newBoardBox);
  }
};