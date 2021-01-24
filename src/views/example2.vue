<template>
  <div class="container">
    <div id="p5Canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas: null,
    }
  },
  created() {
    const sketch = p5 => {
        let w = window.innerWidth;
        let h = window.innerHeight;

        p5.setup = () => {
            p5.createCanvas(w, h, p5.WEBGL);
        };

        p5.draw = () => {
            p5.background(250);
            p5.rotateY(p5.frameCount * 0.01);
            for (let j = 0; j < 5; j++) {
              p5.push();
              for (let i = 0; i < 80; i++) {
                p5.translate(
                  p5.sin(p5.frameCount * 0.001 + j) * 100,
                  p5.sin(p5.frameCount * 0.001 + j) * 100,
                  i * 0.1
                );
                p5.rotateZ(p5.frameCount * 0.002);
                p5.push();
                p5.sphere(8, 6, 4);
                p5.pop();
              }
              p5.pop();
            }

        };
    }
    this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  mounted () {
    this.p5Canvas = null;
  },
  destroyed(){
    this.p5Canvas = null;
  },
  unmounted () {
    
  },
}
</script>

<style>
#p5Canvas {
  width: 100vw;
  position: absolute;
  margin: 0px;
  top:0%;
  left:0%;
}

main {
  margin: 0px;
  width: 90vw;
}
</style>