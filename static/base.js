$(document).ready(function() {
    $("#boards").hide();
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
        $("#edit").hide();
        $("#add").fadeIn("slow");
        makeNewBoard();
    });
});

var makeNewBoard = function() {
    // get tile from form (test if filled) and generate code
    var title = document.getElementById("title").value;
    if (title === "" || title === null) {
        return false;
    }
    // make a new board object
    var newBoard = {
        boardId: "asdf",
        title: title
    }
    // append board object to local storage
    saveBoard(newBoard);
    // prepare div

    // prepend div of the new board
    // clear form value
    document.getElementById("title").value = ""
}

var saveBoard = function(boardObj) {
    var x = localStorage.getItem('boards');
    if (x === null) {
        x = JSON.stringify([]);
    }
    x = JSON.parse(x);
    x.push(boardObj);
    localStorage.setItem('boards', JSON.stringify(x));
}