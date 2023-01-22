import Core from './core';
import * as GEOMETRY from './geometries';

function main(){
    const scene = new Core();
    scene.init();
    scene.resize();

    let cube = new GEOMETRY.Geometry().BoxGeometry(1, 1, 1, 0xa0ffa0, false);

    scene.add(cube);

    function frame(){
        requestAnimationFrame(frame);
    
        cube.rotation.y += 0.05;
        cube.rotation.z += 0.05;
        
        scene._renderer.render(scene, scene._camera)
    };

    frame();

};

main();
