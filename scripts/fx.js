// various effects

var distortion = new Tone.BitCrusher({
  "bits": 8,
  "wet": 0
  })

var reverb = new Tone.Freeverb({
  "roomSize": 0.6,
  "dampening": 1000,
  "wet": 0
  })

var phaser = new Tone.Phaser({
  "frequency" : 0.5,
  "octaves" : 3,
  "baseFrequency" : 300,
  "Q": 15,
  "wet": 0
})

var pingpong = new Tone.PingPongDelay({
  "delayTime" : "8n",
  "feedback" : 0.6,
  "wet" : 0
})
 
var bigReverb = new Tone.Freeverb({
  "roomSize": 0.75, 
  "dampening": 4000, 
  "wet": 0
});

var compressor = new Tone.Compressor({
  "threshold" : -12,
  "ratio" : 6,
  "attack" : 0.3,
  "release" : 0.1
})

var filter = new Tone.Filter(16000, "lowpass");