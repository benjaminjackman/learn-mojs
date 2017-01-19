// import _ from 'lodash';
import mojs from 'mo-js';
import MojsPlayer from 'mojs-player';
import MojsCurveEditor from 'mojs-curve-editor'


// var shapex = new mojs.Shape({
//   shape:        'circle',  // shape "circle" is default
//   radius:       25,        // shape radius
//   fill:         'white',   // same as 'transparent'
//   stroke:       '#F64040', // or 'cyan'
//   strokeWidth:  5,         // width of the stroke
//   isShowStart:  true,      // show before any animation starts
// });

// var shape = new mojs.Shape({
//   shape:        'circle',  // shape "circle" is default
//   scale: {0:1},
//   duration 1000,
//   delay: 1000,
//   easing: 'cubic.out',
//   repeat 99,
//   radius:       25,        // shape radius
//   fill:         'white',   // same as 'transparent'
//   stroke:       '#F64040', // or 'cyan'
//   strokeWidth:  5,         // width of the stroke
//   isShowStart:  true,      // show before any animation starts
// }).play();

const yCurve = new MojsCurveEditor({name: 'yOffset'});
const scaleCurve = new MojsCurveEditor({name: 'scaleCurve'});

const shape = new mojs.Shape({
  shape:        'circle',
  radius:        40,
  y: {[-300]:-300, curve: yCurve.getEasing()},
  scaleX: {1:1, curve: scaleCurve.getEasing()},
  scaleY: {1:1, curve: scaleCurve.getEasing({
    transform: (k) => 1 / k
  })},
  isShowStart: true,
  duration:      2000,
  // delay:         1000,
  easing:        'cubic.out',
});

//
// const shape2 = new mojs.Shape({
//   shape:        'circle',
//   radius:        40,
//   y: {[-300]:-300, curve: yCurve.getEasing()},
//   scaleX: {1:1, curve: scaleCurve.getEasing()},
//   scaleY: {1:1, curve: scaleCurve.getEasing({
//     transform: (k) => 1 / k
//   })},
//   isShowStart: true,
//   duration:      1000,
//   // delay:         1000,
//   easing:        'cubic.out',
// });

const eye = x => new mojs.Shape({
  shape:        'circle',
  radius:        10,
  y: {[-300]:-300, curve: yCurve.getEasing({
    transform: k => k + 0.05
  })},
  x: x,
  isShowStart: true,
  fill: 'black',
  // y: {[-300]:-300, curve: yCurve.getEasing()},
  scaleX: {1:1, curve: scaleCurve.getEasing()},
  scaleY: {1:1, curve: scaleCurve.getEasing({
    transform: (k) => 1 / k
  })},
   duration:      2000,
  // delay:         1000,
  //  easing:        'cubic.out',
});

const leye = eye(-20);
const reye = eye(20);

const mouth = new mojs.Shape({
  shape:        'circle',
  radius:        10,
  y: {[-280]:-280, curve: yCurve.getEasing()},
  x: 0,
  isShowStart: true,
  fill: 'white',
  stroke: 'red',
  // y: {[-300]:-300, curve: yCurve.getEasing()},
  scaleX: {2:2, curve: scaleCurve.getEasing()},
  scaleY: {0.5:0.5, curve: scaleCurve.getEasing({
    transform: (k) => 1 / k
  })},
   duration:      2000,
  // delay:         1000,
  //  easing:        'cubic.out',
});


const timeline = new mojs.Timeline();
timeline.add(shape, leye, reye, mouth);

new MojsPlayer({add: timeline});


// new mojs.Html();

// const html = new mojs.Html({
//   el: '#js-el',
//   x: { 200: 0, delay: 200, duration: 2000, easing: 'cubic.in' },
//   y: { 0: 200, duration: 2000, easing: 'cubic.out', onComplete () { /* ... */ } }
// });

// const shiftCurve = mojs.easing.path( 'M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0' );
// const scaleCurveBase = mojs.easing.path( 'M0,100 C21.3776817,95.8051376 50,77.3262711 50,-700 C50,80.1708527 76.6222458,93.9449005 100,100' );
// const scaleCurve = (p) => { return 1 + scaleCurveBase(p); };
// const nScaleCurve = (p) => { return 1 - scaleCurveBase(p)/10; };

// const circle = new mojs.Shape({
//   shape:        'rect',
//   fill:         { '#F64040' : '#F64040', curve: scaleCurve },
//   radius:       10,
//   rx:           3,
//   x:            { [-125] : 125, easing: shiftCurve },
//   scaleX:       { 1 : 1, curve: scaleCurve },
//   scaleY:       { 1 : 1, curve: nScaleCurve },
//   origin:       { '0 50%' : '100% 50%', easing: shiftCurve },

//   isYoyo:         true,
//   delay:        500,
//   duration:     800,
//   repeat:       999
// }).play();


// const shape = new mojs.Shape({
//   shape:          'rect',
//   fill:           'none',
//   stroke:         'cyan',
//   radius:         10,
//   strokeWidth:    20,
//   angle:          { [-180] : 0 },
//   repeat: 4,
//   duration:       600
// }).then({
//   strokeWidth:    0,
//   scale:          { to: 2, easing: 'sin.in' },
//   repeat: 2,
// });
// shape.play();

// const square1 = new mojs.Html({
//   el: document.getElementById("js-el"),
//   //el: '#js-el',
//   y: { [-300]: 0},
//   duration: 2000
// })




// .play();

// function component () {
//   var element = document.createElement('div');

//   /* lodash is required for the next line to work */
//   // element.innerHTML = _.map(['Hello','webpack'], function(item){
//   //   return item + ' ';
//   // });
//   element.innerHTML = "Hello world, how are you doing today?";

//   return element;
// }

// document.body.appendChild(component());