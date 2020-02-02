import {Animation} from '../../Manim.three.js/index.js';
import {draw, checkpoint, delay, fill, graphTransform, undraw, unfill,animateArray, removeArray, showGraph, removeGraph, graphTransformParametricCartesian, graphTransformCartesianParametric, graphTransformParametric, showArrow, removeArrow} from "../../Manim.three.js/animations.js";


(async () => {
    let anim = new Animation();
    let mesh_array = await anim.addText("Ista", '#ffffff', 18, -1, 1);
    for(let i = 0; i < mesh_array.length; i++)
        anim.addAnimation(draw(mesh_array[i], 150000));
    anim.addAnimation(checkpoint());
    anim.addAnimation(delay());
    anim.addAnimation(checkpoint());
    for(let i = 0; i < mesh_array.length; i++)
        anim.addAnimation(undraw({shape: mesh_array[i]}, 150000));
    anim.play();
})();