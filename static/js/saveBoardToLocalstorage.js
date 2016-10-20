var saveBoardToLocalstorage = function(boardObj) {
  console.log("saving the board to localstorage");
  var x = localStorage.getItem('boards');
  if (x === null) {
      x = JSON.stringify([]);
  }
  x = JSON.parse(x);
  x.push(boardObj);
  localStorage.setItem('boards', JSON.stringify(x));
};

// todo:
// instead of boardObj, the function should receive the bare title as a string
// and generate and ID