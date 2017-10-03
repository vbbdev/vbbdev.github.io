// set seq so it can reset
var seq = 0;

// Sequence loop to trigger the drum sounds every 16th note
var loop = new Tone.Sequence(function(time, col) {
  triggerDrums(drumMatrix, time, col);

  if (col === 31) {
      seq++;
      realign(drumMatrix);
  }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "16n");

// reset the view
function realign(matrix) {
  matrix.sequence(Tone.Transport.bpm.value * 4)
}
