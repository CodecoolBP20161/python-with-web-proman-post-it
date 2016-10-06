$(document).ready(function() {
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
            title: title
        }
        // save board object to local storage
        saveBoard(newBoard);
        // clear form value
        document.getElementById("title").value = ""
        var newBoardBox = '<div class="clearfix visible-xs-block"></div>\
        <div class="col-sm-3 boards" id=' + newBoard["boardId"] + '>\
        <div class="panel panel-primary">\
        <div class="panel-heading">' + newBoard["title"] + '</div>\
        <div class="panel-body"><img src="static/icons/Trello.jpg" class="img-responsive" style="width:100%" alt="Image" id="board"></div>\
        </div>\
        </div>'
        $("#boardRow").prepend(newBoardBox);

        // prepare div
        // var block = $('<div class="clearfix visible-xs-block"></div>');
        // var boardDiv = $('<div class="col-sm-3 boards" id=' + newBoard["boardId"] + '></div>');
        // var panel = $('<div class="panel panel-primary" id=panel' + newBoard["boardId"] + '></div>');
        // var boardHead = $('<div class="panel-heading"></div>').text(newBoard["title"]);
        // var boardImage = '<div class="panel-body"><img src="static/icons/Trello.jpg" class="img-responsive" style="width:100%" alt="Image" id="board"></div>';
        // prepend div of the new board
        // $("#boardRow").prepend(block);
        // $("#boardDiv").append(panel);
        // $("#panel" + newBoard["boardId"]).append(boardHead, boardImage);
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
}

var makeID = function() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for( var i = 0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}