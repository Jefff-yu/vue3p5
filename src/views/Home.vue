<template>
  <div class="c">
    <router-view v-if="isReloadAlive"></router-view>
    <div class="marqee">
      <ul>
        <li>Jeff's p5.js works collection</li>
      </ul>
    </div>
    <div class="rightLinear"></div>
    <div class="leftLinear"></div>
    <div class="p5Canvas"></div>
    <!-- <div class="point"></div> -->
    <div class="ti"></div>
    <button class="modernla">
      <router-link to="/Modernla" style="text-decoration: none; color: #edf051"
        >Modernla</router-link>
    </button>
    <button class="example2">
      <router-link to="/example2" style="text-decoration: none; color: #edf051"
        >Example2</router-link
      >
    </button>
    <button class="example3">
      <router-link to="/example3" style="text-decoration: none; color: #edf051" 
        >Example3</router-link
      >
    </button>
    <button class="example4">
      <router-link to="/example4" style="text-decoration: none; color: #edf051"
        >Example4</router-link
      >
    </button>
    <a herf="https://www.instagram.com/tasuketasukemasu/" class="ig"
      >@tasuketasukemasu</a
    >
    <div class="element"></div>
    <div class="cube"></div>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<style>
.marqee {
  height: 0px;
  font-size: 80px;
  top: 3%;
  overflow: hidden;
  position: auto;
  z-index: 1000;
}

.marqee > ul {
  padding-left: 0;
  display: flex;
  list-style-type: none;
  animation: marqee 15s linear infinite;
  position: absolute;
}

.marqee > ul > li {
  white-space: nowrap;
  margin-right: 2em;
  font-weight: bold;
  color: yellow;
}

@keyframes marqee {
  0% {
    left: 100%;
    transform: translateX(0%);
  }

  100% {
    left: 0;
    transform: translateX(-100%);
  }
}
.cube {
  position: absolute;
  width: 10%;
  padding-top: 10%;
  background: linear-gradient(
    225deg,
    #edf051 -0.27%,
    rgba(237, 240, 81, 0) 100.27%
  );
  animation: move 4s infinite;
  opacity: 1;
}
@keyframes move {
  0% {
    transform: translate3d(0, 80vh, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(80vw, 80vh, 0) rotate(360deg);
  }
  100% {
    transform: translate3d(0, 80vh, 0) rotate(0deg);
  }
}
@keyframes stretch {
  0% {
    transform: scale(0.3);
    background-color: red;
    border-radius: 100%;
  }
  50% {
    background-color: orange;
  }
  100% {
    transform: scale(1.5);
    background-color: yellow;
  }
}
/* .element {
  position:absolute;
  height: 250px;
  width: 250px;
  margin: 0 auto;
  background-color: red;
  animation-name: stretch;
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-delay: 0;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-fill-mode: none;
  animation-play-state: running;
} */
.c {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: absolute;
  left: 0px;
  top: 0px;
  color: #2c3e50;
  background: #030d25;
  width: 100%;
  height: 100%;
  margin: 0px;
}
.rightLinear {
  position: absolute;
  left: 50%;
  width: 50%;
  height: 100%;
  z-index: 10;
  top: 0%;
  background: linear-gradient(
    180deg,
    rgba(78, 51, 185, 0.49) 0%,
    rgba(22, 11, 65, 0) 100%
  );
}
.leftLinear {
  position: absolute;
  left: 0%;
  width: 50%;
  height: 100%;
  z-index: 10;
  top: 0%;
  background: linear-gradient(
    0deg,
    rgba(78, 51, 185, 0.49) 0%,
    rgba(22, 11, 65, 0) 100%
  );
}
/* .p5Canvas {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  margin: 0px;
} */
.point {
  position: absolute;
  left: 10%;
  top: 50%;
  width: 8%;
  padding-top: 8%;
  background: linear-gradient(
    225deg,
    #edf051 -0.27%,
    rgba(237, 240, 81, 0) 100.27%
  );
  border: transparent;
  z-index: 122;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-duration: 3s;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.ig {
  position: absolute;
  z-index: 200;
  color: #edf051;
  font-family: "Arial Narrow", sans-serif;
  font-size: 30;
  left: 90%;
  top: 95%;
}

.modernla {
  position: absolute;
  color: #edf051;
  background-color: transparent;
  border: 1px solid #edf051;
  border-radius: 1px;
  top: 50%;
  left: 10%;
  cursor: pointer;
  align-content: center;
  height: 10%;
  font-size: 3vw;
  transition: all 0.2s ease-in-out;
  z-index: 300;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-duration: 10s;
}
.modernla:hover {
  box-shadow: 2px 2px#edf051, 4px 4px #edf051, 6px 6px #edf051;
  transform: translateX(-3px);
}
.modernla:active {
  box-shadow: 1px 1px#edf051, 2px 2px #edf051, 3px 3px #edf051;
  transform: translateX(-3px);
}
.example2 {
  position: absolute;
  color: #edf051;
  background-color: transparent;
  border: 1px solid #edf051;
  border-radius: 1px;
  top: 50%;
  left: 30%;
  cursor: pointer;
  align-content: center;
  height: 10%;
  font-size: 3vw;
  transition: all 0.2s ease-in-out;
  z-index: 300;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-duration: 11s;
}
.example2:hover {
  box-shadow: 2px 2px#edf051, 4px 4px #edf051, 6px 6px #edf051;
  transform: translateX(-3px);
}
.example2:active {
  box-shadow: 1px 1px#edf051, 2px 2px #edf051, 3px 3px #edf051;
  transform: translateX(-3px);
}
.example3 {
  position: absolute;
  color: #edf051;
  background-color: transparent;
  border: 1px solid #edf051;
  border-radius: 1px;
  top: 50%;
  left: 55%;
  cursor: pointer;
  align-content: center;
  height: 10%;
  font-size: 3vw;
  transition: all 0.2s ease-in-out;
  z-index: 300;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-duration: 12s;
}
.example3:hover {
  box-shadow: 2px 2px#edf051, 4px 4px #edf051, 6px 6px #edf051;
  transform: translateX(-3px);
}
.example3:active {
  box-shadow: 1px 1px#edf051, 2px 2px #edf051, 3px 3px #edf051;
  transform: translateX(-3px);
}
.example4 {
  position: absolute;
  color: #edf051;
  background-color: transparent;
  border: 1px solid #edf051;
  border-radius: 1px;
  top: 50%;
  left: 75%;
  cursor: pointer;
  align-content: center;
  height: 10%;
  font-size: 3vw;
  transition: all 0.2s ease-in-out;
  z-index: 300;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-duration: 13s;
}
.example4:hover {
  box-shadow: 2px 2px#edf051, 4px 4px #edf051, 6px 6px #edf051;
  transform: translateX(-3px);
}
.example4:active {
  box-shadow: 1px 1px#edf051, 2px 2px #edf051, 3px 3px #edf051;
  transform: translateX(-3px);
}
</style>
<script>
// router.go(0)
export default {
    provide() {
        return {
            reload: this.reload
        }
    },
    data(){
        isReloadAlive : true
    },
    methods: {
        reload() {
			this.isReloadAlive = false;
			this.$nextTick(function(){
				this.isReloadAlive = true;
			})
		}
    }
}
// import P5 from "p5";
// export default {
//   data() {
//     return {
//       p5Canvas: null,
//     };
//   },
//   created() {
//     const sketch = (p5) => {
//       let w = window.innerWidth;
//       let h = window.innerHeight;
//       let stokewidth = h;
//       let sqsw = p5.sqrt(stokewidth * 6);
//       let ssqsw = sqsw / p5.sqrt(2);
//       let x = p5.max(w, h);
//       let n = p5.min(w, h);
//       let textsize = x / 16;
//       var mexcellent;
//       p5.preload = () => {
//         mexcellent = p5.loadFont("/fonts/mexcellent rg.ttf");
//       };
//       p5.setup = () => {
//         p5.createCanvas(w, h);
//         let textTopa=h*55/100;
//         let textLefta=w*4/7;
//         p5.fill("#EDF051");
//         p5.textFont(mexcellent);
//         p5.textSize(textsize);
//         p5.text("T A ", textLefta,textTopa);

//         let textTopb=h*70/100;
//         p5.fill("#EDF051");
//         p5.textFont(mexcellent);
//         p5.textSize(textsize);
//         p5.text("S U ", textLefta,textTopb);

//         let textTopc=h*85/100;
//         p5.fill("#EDF051");
//         p5.textFont(mexcellent);
//         // p5.translate(textLefta,textTopc);
//         p5.textSize(textsize);
//         // p5.rotate( p5.radians(90));
//         p5.text("K E ", textLefta,textTopc);
//       };

//       p5.draw = () => {
//         p5.noStroke();
//         p5.fill("#EDF051");
//         p5.quad(x / 4, 0, x / 4 + sqsw, 0, 0, x / 4 + sqsw, 0, x / 4);

//         p5.noStroke();
//         p5.fill("#EDF051");
//         p5.quad(
//           x / 2 - sqsw,
//           n / 4 + sqsw,
//           x / 2,
//           n / 4 + sqsw,
//           n / 4 + sqsw,
//           n,
//           n / 4,
//           n
//         );

//         p5.noStroke();
//         p5.fill("#EDF051");
//         p5.translate(0, sqsw - ssqsw);
//         p5.quad(
//           x / 8 + ssqsw,
//           n / 4,
//           x,
//           n / 4,
//           x,
//           n / 4 + ssqsw,
//           x / 8,
//           n / 4 + ssqsw
//         );

//         p5.noStroke();
//         p5.fill("#EDF051");
//         p5.translate(0, -sqsw + ssqsw);
//         p5.quad(
//           x / 2,
//           n,
//           x / 2 + sqsw,
//           n,
//           x / 4 + n / 8 + sqsw,
//           (5 * n) / 8,
//           x / 4 + n / 8 + sqsw / 2,
//           (5 * n) / 8 + sqsw / 2
//         );

//         let p5jsX=w*83/100;
//         let p5jsY=h*45/100;
//         let textsize2=x/24;
//         p5.fill("#EDF051");
//         p5.textFont(mexcellent);
//         p5.textSize(textsize2);
//         p5.translate(p5jsX,p5jsY);
//         p5.rotate(p5.radians(90));
//         p5.text("p5.js", 0,0);

//         let worksdX=w*5/100;
//         p5.fill("#EDF051");
//         p5.textFont(mexcellent);
//         p5.translate(0,worksdX);
//         p5.textSize(textsize2);
//         p5.text("works",0,0);

//         let collectiondX=w*5/100;
//         p5.fill("#EDF051");
//         p5.textFont(mexcellent);
//         p5.translate(0,collectiondX);
//         p5.textSize(textsize2);
//         p5.text("collection",0,0);
//         // p5.fill("#EDF051");
//         // p5.textFont(mexcellent);
//         // p5.textSize(textsize);
//         // p5.rotate(p5.PI/2);
//         // p5.text("collection", textLefta,textTopc);
//       };
//     };

//     this.p5Canvas = new P5(sketch, "p5Canvas");
//   },
// };
</script>
