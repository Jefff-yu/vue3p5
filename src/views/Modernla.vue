<template onload="if (location.href.indexOf('reload')==-1) location.replace(location.href+'?reload');">
  <div class="container">
    <div class="p5Canvas"></div>
    <router-link to="/" style="text-decoration: none; color: #edf051">Index</router-link>|
    <router-link to="example2" style="text-decoration: none; color: #edf051">next</router-link>
  </div>
</template>

<style>
.index{
  position:absolute;

}
#p5Canvas {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top:0%;
  left:0%;
}
.container{
  width: 100%;
  background-color:black;
  height: 100%;
}
main {
  margin: 0px;
  width: 100vw;
  background-color:black;
}
</style>

<script>
import P5 from 'p5';

export default {
  data() {
    return {
      p5Canvas:null,
      socketX:null,
      socketY:null,
      bSocket:false,
    }
  },
  created() {
    const sketch = p5 => {
        // let w = window.innerWidth;
        // let h = window.innerHeight;
        p5.preload = () =>{
          this.hashira = p5.loadImage("hashira.png");
          this.lotus =p5.loadImage("lotus.png");
          this.dale =p5.loadImage("dale.png");
          this.wisdom =p5.loadImage("wisdom.png");
          this.color =p5.loadImage("color.png");
          this.lanan =p5.loadImage("Lanan.png");
          this.yee =p5.loadImage("Yee.png");
          this.wuu =p5.loadImage("wuu.png");
          this.yeewuu =p5.loadImage("yeewuu.png");
          this.shen =p5.loadImage("shen.png");
          this.circles =p5.loadImage("circles.png");
        };
        p5.setup = () => {
            // p5.createCanvas(p5.min(window.innerWidth,window.innerHeight),p5.min(window.innerWidth,window.innerHeight));
            p5.createCanvas(window.innerWidth,window.innerHeight);
        };

        p5.draw = () => {
            // call your method:
            this.currentTime = Date.now();
            let step = p5.millis()*0.1 % 6000;
            let scale =9;
            p5.background(0);
            const s = p5.min(p5.width,p5.height);
            let ratio =1/9;
            let lotusR = s / ratio ;
            let hashiraR = lotusR*11/6 ;
            let wisdomR = hashiraR*12/11 ;
            let colorR =wisdomR*19/12;
            let lananR =colorR*23/19;
            let yeeR =wisdomR*9/2;
            let wuuR= lotusR*635/36;
            let yeewuuR =lotusR*568/36;
            let shenR =lotusR*1298/36;
            let circlesR = lotusR*1872/36;

            p5.translate(p5.width/2 , s / 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.circles, -circlesR / 2, -circlesR/2, circlesR , circlesR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.shen, -shenR / 2, -shenR/2, shenR , shenR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.yeewuu, -yeewuuR / 2, -yeewuuR/2, yeewuuR , yeewuuR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.wuu, -wuuR / 2, -wuuR/2, wuuR , wuuR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            p5.rotate(this.msSinceStart * 0.001 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.lotus, -lotusR / 2, -lotusR/2, lotusR, lotusR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.dale, -lotusR / 2, -lotusR/2, lotusR, lotusR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.hashira, -hashiraR / 2, -hashiraR/2, hashiraR, hashiraR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.wisdom, -wisdomR / 2, -wisdomR/2, wisdomR, wisdomR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.color, -colorR / 2, -colorR/2, colorR, colorR);
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.lanan, -lananR / 2, -lananR/2, lananR , lananR );
            p5.resetMatrix();

            p5.translate(p5.width / 2, s / 2);
            //p5.rotate(this.msSinceStart * -0.00005 % Math.PI * 2);
            p5.applyMatrix(scale / step, 0, 0, scale / step, 0, 0);
            p5.image(this.yee, -yeeR / 2, -yeeR/2, yeeR , yeeR);
            p5.resetMatrix();
            // p5.changeBG(p5.mouseX, p5.mouseY);
            // if(this.bSocket){
            //   p5.ellipse(this.socketX, this.socketY, 100);
            // }else{
            // // p5.background(33, 33, 33);
            // p5.ellipse(p5.mouseX, p5.mouseY, 100);
            // var pos = Object.assign({},{x:p5.mouseX, y: p5.mouseY});
            // this.socket.emit('mouseMove',pos);
            // }
        };

        // create methods:
        // p5.changeBG = (x, y) => {
        //   let _x = p5.map(x, 0, w, 0, 255);
        //   let _y = p5.map(y, 0, h, 0, 255);
        //   p5.background(_x, _y, 33);
        // }
    }
    
      this.p5Canvas = new P5(sketch, 'p5Canvas');
  },
  // mounted(){
  //   this.socket=io('http://localhost:3000');
  //   this.socket.on('mouseMove',function(msg){
  //     this.bSocket =true;
  //     this.socketX = msg.x;
  //     this.socketY = msg.y;
  //   });
  // },
  // unmounted () {
  //   this.p5Canvas = null;
  // },
}
</script>

