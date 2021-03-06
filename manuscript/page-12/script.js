(function(window) {
window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

	var w = window;
	var d = document;
	var e = d.documentElement;
	var g = d.getElementsByTagName('body')[0];


  var W = w.innerWidth || e.clientWidth || g.clientWidth;
  var H = w.innerHeight || e.clientHeight || g.clientHeight; 

  canvas.width = W;
  canvas.height = H;
  
  var num = 40;
  var arr = [];
  var speed = 5;
  
  for (var i = 0; i < num; i++) {
    arr.push({
      x: Math.random() * W,
      y: Math.random() * H,
      w: 2,
      h: Math.random() * 30,
      s: Math.random() * 10 + 2
    });
  }
  
  function raindrops() {
    ctx.clearRect(0,0,W,H);
    for(var i = 0; i < num; i++) {
      ctx.fillStyle = 'rgba(255, 55, 55, 0.2)';

      
      ctx.fillRect(arr[i].x, arr[i].y, arr[i].w, arr[i].h);
    }
    makeItRain();
  }
  
  function makeItRain() {
    for(var i = 0; i< num; i++){ 
     arr[i].y += arr[i].s;
     if(arr[i].y > H){
      arr[i].y =- arr[i].h;
     }
    }
  }
  setInterval(raindrops, 15);
};

})(window)