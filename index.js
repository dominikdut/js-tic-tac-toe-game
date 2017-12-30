
$(function() {
});

$(function() {
  render();
  initCells()
});

const PLAYER_1_FIELD = 'x';
const PLAYER_2_FIELD = 'o';
const EMPTY_FIELD = '';
const CELL_PREFIX = '#cell';

var area = [
  [PLAYER_1_FIELD, EMPTY_FIELD, EMPTY_FIELD],
  [EMPTY_FIELD, EMPTY_FIELD, EMPTY_FIELD],
  [EMPTY_FIELD, PLAYER_1_FIELD, EMPTY_FIELD]
];

var player = PLAYER_1_FIELD;

function render() {
  for (var row=0; row < area.length; row++) {
    for (var cell=0; cell < area[row].length; cell++) {
      var value = area[row][cell];
      var cellId = CELL_PREFIX + row + '' + cell;
      $(cellId).text(value);
    }
  }
}

function changePlayer() {
  player = player === PLAYER_1_FIELD ? PLAYER_2_FIELD : PLAYER_1_FIELD;
}

function checkCollision() {
  if (area[0][0] === player && area[0][1] && area[0][2]) {
    $('#cell00').addClass('winningField');
    $('#cell01').addClass('winningField');
    $('#cell02').addClass('winningField');
  }

}

function initCells() {
  for (var row=0; row < area.length; row++) {
    for (var cell=0; cell < area[row].length; cell++) {
      var cellId = '#cell' + row + '' + cell;
      $(cellId).click(function (e) {
        var cellRow = parseInt(e.target.id[4]);
        var cellCell = parseInt(e.target.id[5]);
        if (area[cellRow][cellCell] === '') {
          area[cellRow][cellCell] = player;
          render();
          checkCollision();
          changePlayer();
        }
      })

    }
  }
}

/**
 * row = 0
 *  cell = 0, cell = 1, cell = 2
 * row = 1
 *  cell = 0, cell = 1, cell = 2
 */
