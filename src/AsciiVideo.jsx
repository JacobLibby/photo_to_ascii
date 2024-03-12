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
  // const density = " .,:;xX&@"
  let density;
  let pic;
  let brightness;
  let video;
  let asciiDiv;

  p5.setup = () => {
    //   density = document.getElementById("selection_density").value
    // console.log(density)
    p5.noCanvas();
    video = p5.createCapture(p5.VIDEO);
    video.size(100, 100);
    asciiDiv = p5.createDiv();
  };
  p5.draw = () => {
    density = document.getElementById("selection_density").value;
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j++) {
      for (let i = 0; i < video.width; i++) {
        const pixelIndex = (i + j * video.width) * 4;
        const r = video.pixels[pixelIndex + 0];
        const g = video.pixels[pixelIndex + 1];
        const b = video.pixels[pixelIndex + 2];
        brightness = document.getElementById("selection_brightness").value;
        let avg = (r + g + b) / 3;
        if (brightness === "avg") {
          avg = (r + g + b) / 3;
        } else {
          avg = p5.brightness(r, g, b);
        } 
        const len = density.length;
        let charIndex = p5.floor(p5.map(avg, 0, 255, len, 0));
        if (density[0] === " ") {
          charIndex = p5.floor(p5.map(avg, 0, 255, 0, len));
        } else {
          charIndex = p5.floor(p5.map(avg, 0, 255, len, 0));
        }

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
  const [selectedBrightness, setSelectedBrightness] = useState("avg");
  const [selectedDensity, setSelectedDensity] = useState("  .:░▒▓█");

  const [seed, setSeed] = useState(1);
  // useEffect(() => {
  //   console.log(document.getElementById("Selection").value)
  // }, [document.getElementById("Selection")])
  // console.log(document.getElementById("Selection").value)
  useEffect(() => {
    setSeed(Math.random());
    console.log("updating BRIGHTNESS");
    console.log(selectedBrightness);
  }, [selectedBrightness]);
  useEffect(() => {
    setSeed(Math.random());
    console.log("updating DENSITY");
    console.log(selectedDensity);
  }, [selectedDensity]);
  const forceUpdate = useForceUpdate();

  function useForceUpdate() {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here
    // is better than directly setting `setValue(value + 1)`
  }
  return (
    <>
      <h1 id="TEST">SELECT A Brightness Calculation and a Density Mapping</h1>
      {/* <UploadImage image={props.image} prop={props.prop}/> */}
      <label>
        Pick a brightness calculation:
        <select
          name="brightness"
          id="selection_brightness"
          value={selectedBrightness}
          onChange={(e) => setSelectedBrightness(e.target.value)}
        >
          <option value="avg">Averaging r,g,b values</option>
          <option value="brightness">P5.JS Brightness function</option>
        </select>
      </label>
      <label>
        Pick a density mapping:
        <select
          name="density"
          id="selection_density"
          value={selectedDensity}
          onChange={(e) => setSelectedDensity(e.target.value)}
        >
          <option value="  .:░▒▓█"> .:░▒▓█</option>
          <option value=" .,:;xX&@"> .,:;xX&@</option>
          <option value="Ñ@#W$9876543210?!abc;:+=-,._   ">
            Ñ@#W$9876543210?!abc;:+=-,._{" "}
          </option>
          <option value=" _.,-=+:;cba!?1723456908$W#@">
            {" "}
            _.,-=+:;cba!?1723456908$W#@
          </option>
          <option value="$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~i!lI;:,^`.  ">
            $@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~i!lI;:,"^`.{" "}
          </option>
          <option value="%%%%#########********+++++++++=========--------:::      ">
            "%%%%#########********+++++++++=========--------:::{" "}
          </option>
          <option value=" .:-i|=+%O#@Ñ"> .:-i|=+%O#@Ñ</option>
          <option value=" .:-=+*#%@"> .:-=+*#%@</option>
          <option value="  `.,:-~+=^*#MW&8%B@$"> `.,:-~+=^*#MW&8%B@$</option>
          
        </select>
      </label>
      {<ReactP5Wrapper className="ascii-width" sketch={sketch} />}
    </>
  );
}
