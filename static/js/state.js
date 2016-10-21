var Storage = function() {
  var currentState = new Database(this);

  this.changeTo = function(state) {
    if (state === 'Database' || state === 'Localstorage') {
      currentState = new state(this);
    } else {
      console.log('State not changed. You can only change to "Database" or "Localstorage".');
    }
  };

  this.getBoards = function() {
    currentState.getBoards();
  };
  this.saveBoard = function(title) {
    currentState.saveBoard(title);
  };
  this.getCards = function(boardID) {
    currentState.getCards(boardID);
  };
  this.saveCard = function(boardID, title) {
    currentState.saveCard(boardID, title);
  };

};

var Database = function() {
  this.getBoards = getBoardsFromDatabase;
  this.saveBoard = saveBoardToDatabase;
  this.getCards = getCardsFromDatabase;
  this.saveCard = saveCardToDatabase;
};

var Localstorage = function() {
  this.getBoards = getBoardsFromLocalstorage;
  this.saveBoard = saveBoardToLocalstorage;
  this.getCards = getCardsFromLocalstorage;
  this.saveCard = saveCardToLocalstorage;
};


