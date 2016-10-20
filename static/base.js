$(document).ready(function() {
    getBoards();
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
        saveBoard(newBoard);
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

var saveBoard = function(boardObj) {
    var x = localStorage.getItem('boards');
    if (x === null) {
        x = JSON.stringify([]);
    }
    x = JSON.parse(x);
    x.push(boardObj);
    localStorage.setItem('boards', JSON.stringify(x));
};

var makeID = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i = 0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};

var getBoards = function() {
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