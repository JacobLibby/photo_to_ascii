// import React, { useState } from "react";
// import Sketch from "react-p5";
// import p5Types from "p5";

import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";
import UploadImage from "./UploadImage";
import { useState, useEffect } from "react";

function sketch(p5) {
  // const density = "Ñ@#W$9876543210?!abc;:+=-,._   ";
  // const density = " _.,-=+:;cba!?1723456908$W#@"
  // const density = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~i!lI;:,"^`.  '
  // const density = "%%%%#########********+++++++++=========--------:::      "
  // const density = " .:-i|=+%O#@Ñ";
  // const density = " .:-=+*#%@"
  // const density = "  `.,:-~+=^*#MW&8%B@$"
  // const density = '  .:░▒▓█'
  const density = " .,:;xX&@"

  let pic;

  let video;
  let asciiDiv;

  p5.setup = () => {
    p5.noCanvas();
    video = p5.createCapture(p5.VIDEO);
    video.size(100, 100);
    asciiDiv = p5.createDiv();
  };
  p5.draw = () => {
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
      for (let i = 0; i < video.width; i++) {
        const pixelIndex = (i + j * video.width) * 4;
        const r = video.pixels[pixelIndex + 0];
        const g = video.pixels[pixelIndex + 1];
        const b = video.pixels[pixelIndex + 2];
        const avg = (r + g + b) / 3;
        // const avg = p5.brightness(r,g,b)
        const len = density.length;
        const charIndex = p5.floor(p5.map(avg, 0, 255,0, len));

        const c = density.charAt(charIndex);
        if (c == " ") asciiImage += "&nbsp;";
        else asciiImage += c;
      }
      asciiImage += "<br>";
    }
    asciiDiv.html(asciiImage);
  };
}

export default function AsciiVideo(props) {
  // console.log("props")
  // console.log(props)
  // console.log("props")

  const [seed, setSeed] = useState(1);
  useEffect(() => {
    setSeed(Math.random());
    console.log("ASCII ");
    console.log(props.image);
    console.log(seed);
  }, [props.image]);
  const forceUpdate = useForceUpdate();

  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here
    // is better than directly setting `setValue(value + 1)`
  }
  return (
    <>
      <h1 id="TEST">TEST</h1>
      {/* <UploadImage image={props.image} prop={props.prop}/> */}
      {<ReactP5Wrapper className="ascii-width" sketch={sketch} />}
    </>
  );
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
