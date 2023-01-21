import Core from './core';
var socket = io();

function main(){
    const scene = new Core();
    scene.init();
    scene.resize();

    let cube = scene.BoxGeometry(1, 1, 1, 0xffff00, false);

    if(document.cookie == ''){
        socket.on('player', (val: any) => {
            document.cookie = `id=${val.id}; color=${val.color}`
            cube.material.color.setHex(val.color);
        });
    }else{
        // TODO: use cookies to set id and color
    }
    

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
