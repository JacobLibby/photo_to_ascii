// import React, { useState } from "react";
// import Sketch from "react-p5";
// import p5Types from "p5";

import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

function sketch(p5) {
  const density = "Ñ@#W$9876543210?!abc;:+=-,._  ";
  let pic;

  p5.preload = () => {
    pic = p5.loadImage("obama_100.png");
  };

  p5.setup = () => {
    p5.noCanvas();
    // }

    // function draw() {
    p5.background(0);
    // image(pic, 0, 0, width, height);

    // let w = width / pic.width;
    // let h = height / pic.height;

    pic.loadPixels();
    for (let j = 0; j < pic.height; j++) {
      let row = "";
      for (let i = 0; i < pic.width; i++) {
        const pixelIndex = (i + j * pic.width) * 4;
        const r = pic.pixels[pixelIndex + 0];
        const g = pic.pixels[pixelIndex + 1];
        const b = pic.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
        const len = density.length;
        const charIndex = p5.floor(p5.map(avg, 0, 255, len, 0));

        const c = density.charAt(charIndex);
        if (c == " ") row += "&nbsp;";
        else row += c;
      }
      var div = p5.createDiv(row)//.center('horizontal');
      div.style('margin', '0')
      div.style('padding', '0')
      div.style('background-color', '#000')
      div.style('font-family', 'Courier')
      div.style('color', '#FFF')
      div.style('font-size', '8pt')
      div.style('line-height', '6pt')
       
      // console.log(row);
    }
  };
  //   p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

  //   p5.draw = () => {
  //     p5.background(250);
  //     p5.normalMaterial();
  //     p5.push();
  //     p5.rotateZ(p5.frameCount * 0.01);
  //     p5.rotateX(p5.frameCount * 0.01);
  //     p5.rotateY(p5.frameCount * 0.01);
  //     p5.plane(100);
  //     p5.pop();
  //   };
}

export default function Ascii() {
  return <ReactP5Wrapper sketch={sketch} />;
}

/*
const Ascii = (props) => {
  const [p5, setP5] = useState(null);
  let backgroundImage;
  const density = "Ñ@#W$9876543210?!abc;:+=-,._  ";

  let pic;
  const preload = (p5) => {
    backgroundImage = p5.loadImage("./obama_100.png");
    pic = p5.loadImage("obama_100.png");
  };

  const setup = (p5, parent) => {
    setP5(p5);
    // p5.createCanvas(500, 500).parent(parent);
    // p5.textAlign(p5.CENTER, p5.CENTER);
    p5.noCanvas();
    p5.background(0);

    let w = width / pic.width;
    let h = height / pic.height;
    // p5.noLoop();
    pic.loadPixels();
    for (let j = 0; j < pic.height; j++) {
      let row = "";
      for (let i = 0; i < pic.width; i++) {
        const pixelIndex = (i + j * pic.width) * 4;
        const r = pic.pixels[pixelIndex + 0];
        const g = pic.pixels[pixelIndex + 1];
        const b = pic.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
        const len = density.length;
        const charIndex = p5.floor(p5.map(avg, 0, 255, len, 0));

        const c = density.charAt(charIndex);
        if (c == " ") row += "&nbsp;";
        else row += c;
      }
      div += row
    }
    console.log("div")
    return div
  };
//   return <h1>HELLO WORLD</h1>
    console.log("setup")
    return <div>div</div>
//   const draw = (p5) => {
//     p5.image(backgroundImage, 0, 0);
//   };

//   return <Sketch preload={preload} setup={setup} draw={draw} />;
};
export default Ascii;


*/

// export function Ascii(props) {
//     const density = "Ñ@#W$9876543210?!abc;:+=-,._  ";

//     let pic;
//     let pic_path = "./obama_100.png";
//     //   pic = p5.loadImage(pic_path);
//     p5.loadImage(pic_path, img => {
//         p5.image(img, 0, 0);
//         p5.redraw();
//     })

//     // function setup() {
//       // createCanvas(400, 400);
//       noCanvas();
//       // }

//       // function draw() {
//       background(0);
//       // image(pic, 0, 0, width, height);

//       let w = width / pic.width;
//       let h = height / pic.height;

//       pic.loadPixels();
//       for (let j = 0; j < pic.height; j++) {
//         let row = "";
//         for (let i = 0; i < pic.width; i++) {
//           const pixelIndex = (i + j * pic.width) * 4;
//           const r = pic.pixels[pixelIndex + 0];
//           const g = pic.pixels[pixelIndex + 1];
//           const b = pic.pixels[pixelIndex + 2];
//           const avg = (r + g + b) / 3;
//           const len = density.length;
//           const charIndex = floor(map(avg, 0, 255, len, 0));

//           const c = density.charAt(charIndex);
//           if (c == " ") row += "&nbsp;";
//           else row += c;
//         }
//         createDiv(row);
//         // console.log(row);
//       }
//     // }
//     return <h1>HELLO WORLD</h1>
// }

// let x = 50;
// let y = 50;

// export function Ascii(props){
//     const setup = (p5, canvasParentRef) => {
//         // use parent to render the canvas in this ref
//         // (without that p5 will render the canvas outside of your component)
//         p5.createCanvas(500, 500).parent(canvasParentRef);
//       };

//       const draw = (p5) => {
//         p5.background(0);
//         p5.ellipse(x, y, 70, 70);
//         // NOTE: Do not use setState in the draw function or in functions that are executed
//         // in the draw function...
//         // please use normal variables or class properties for these purposes
//         x++;
//       };

//       return <Sketch setup={setup} draw={draw} />;
//     };
