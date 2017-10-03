const context = new (window.AudioContext || window.webkitAudioContext)();

nx.onload = function(){
  nx.colorize = color.black;

  var dials = [dial1, dial2, dial3, dial4, dial5, dial6];
  dials.forEach(function(dl) {
    dl.init();
    dl.colors.accent = color.orange;
    dl.draw();
  });

  drumMatrix.col = 32;
  drumMatrix.row = 4;
  drumMatrix.colors.accent = color.black;
  drumMatrix.init();
  drumMatrix.draw();

  filterLabel.init();
  filterLabel.colors.accent = color.orange;
  filterLabel.draw();
  filterLabel.set({
    value: 0.5
  });

  var selector = [hiHatSelector, snareSelector, kickSelector, rimSelector];
  selector.forEach(function(dl) {
    dl.init();
    dl.colors.accent = color.blueish;
    dl.draw();
  });

  
  var volumeSlider = [drumVolume1, drumVolume2, drumVolume3, drumVolume4];
  volumeSlider.forEach(function(dl) {
    dl.init();
    dl.hslider = true;
    dl.colors.accent = color.blueish;
    dl.draw();
    dl.set({
      value: 0.5
    });
  });
  
  toggle1.init();
  toggle1.colors.accent = color.dark;
  toggle1.colors.border = color.dark;
  toggle1.colors.fill = color.dark;
  toggle1.colors.black = color.dark;
  toggle1.colors.white = color.dark;
  toggle1.draw();
  
  volume.init();
  volume.set({
    value: 0
  });
  volume.colors.accent = color.dark;
  volume.draw();

  tempo.init();
  tempo.set({
    value: 120
  });
  tempo.colors.accent = color.dark;
  tempo.draw();

  
  dial1.on("*", function(data) {
    distortion.wet.value = data.value;
  })

  dial2.on("*", function(data) {
    reverb.wet.value = data.value;
  })

  dial3.on("*", function(data) {
    phaser.wet.value = data.value;
  })

  dial4.on("*", function(data) {
    console.log(data.value);
    pingpong.wet.value = data.value;
  })

  dial5.on("*", function(data) {
    console.log(data.value);
    pingpong.feedback.value = data.value;
  })

  dial6.on("*", function(data) {
    console.log(data.value);
    bigReverb.wet.value = data.value;
  })

  filterLabel.on('*',function(data) {
    filter.frequency.value = 50 + (data.x * 22000);
    filter.Q.value = 1 + (data.y * 15);
  })

  toggle1.on("*", function(data) {
    if (data.value == 1) {
      Tone.Transport.start();
      loop.start()
    } else {
      Tone.Transport.stop();
      [drumMatrix].forEach(matrix => matrix.stop())
    } 
  })

  drumVolume1.on("*", function(data) {
    params.hihatvelocity = data.value;
  })

  drumVolume2.on("*", function(data) {
    params.snarevelocity = data.value;
  })

  drumVolume3.on("*", function(data) {
    params.kickvelocity = data.value;
  })

  drumVolume4.on("*", function(data) {
    params.rimvelocity = data.value;
  })

  tempo.on("*", function(data) {
    Tone.Transport.bpm.value = data.value;
  })

  volume.on("*", function(data) {
    Tone.Master.volume.value = data.value;
  })
}

hiHatSelector.onclick = function(e){
  params.hihat = hiHatSelector.val.index.toString();
}
snareSelector.onclick = function(e){
  params.snare = snareSelector.val.index.toString();
}
kickSelector.onclick = function(e){
  params.kick = kickSelector.val.index.toString();
}
rimSelector.onclick = function(e){
  params.rim = rimSelector.val.index.toString();
}

