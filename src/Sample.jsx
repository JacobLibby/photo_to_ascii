import React, { useState } from "react";
import Sketch from "react-p5";
// import background from "./data/test.png";

const Sample = (props) => {
    const [p5, setP5] = useState(null);
    let backgroundImage;

    const preload = (p5) => {
        backgroundImage = p5.loadImage("./obama_100.png");
    }

    const setup = (p5, parent) => {
        setP5(p5);
        p5.createCanvas(500, 500).parent(parent);
        p5.textAlign(p5.CENTER, p5.CENTER);
        
        // I've also tried loading the image this way
        // p5.loadImage("./data/test.png", img => {
        //     backgroundImage = img;
        //     p5.redraw();
        // })

        p5.noLoop();
        
    }

    const draw = (p5) => {
            p5.image(backgroundImage, 0, 0);
    }

    return <Sketch preload={preload} setup={setup} draw={draw} />
}
export default Sample;