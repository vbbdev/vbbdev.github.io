// set the bpm for the app
Tone.Transport.bpm.value = 120;

// drums player with buffername + path
var drums = new Tone.MultiPlayer({
	urls : {
		"hihat0" : "./samples/Hat01.wav",
    "hihat1" : "./samples/Hat02.wav",
    "hihat2" : "./samples/Hat03.wav",
    "kick0": "./samples/Kick01.wav",
    "kick1" : "./samples/Kick02.wav",
    "kick2" : "./samples/Kick03.wav",
    "rim0": "./samples/Rim01.wav",
    "rim1" : "./samples/Rim02.wav",
    "rim2" : "./samples/RIm03.wav",
    "snare0": "./samples/Snare01.wav",
    "snare1" : "./samples/Snare02.wav",
    "snare2" : "./samples/Snare03.wav"
	},
	volume : -20,
	fadeOut : 0.1,
});

// drum effects chain
// only the effects that have their wet level dial turned up with effect the signal path 
drums.chain(distortion, reverb, phaser, pingpong, bigReverb, compressor, filter, Tone.Master);

// a function to check if a matrix step is pressed and if so start the sample that should be triggerd
function triggerDrums(drumMatrix, time, col) {
    var column = drumMatrix.matrix[col];
    for (var i = 0; i < column.length; i++) {
      if (column[0] === 1) {
        drums.start('hihat' + params.hihat, time, 0, "16n", 0, params.hihatvelocity)
      }
      if (column[1] === 1) {
        drums.start('snare' + params.snare, time, 0, "16n", 0, params.snarevelocity)
      }
      if (column[2] === 1) {
        drums.start('kick' + params.kick, time, 0, "16n", 0, params.kickvelocity)
      }
      if (column[3] === 1) {
        drums.start('rim' + params.rim, time, 0, "16n", 0, params.rimvelocity)
      }
    }
    drumMatrix.place = col;
}