import * as THREE from 'three';

export class Geometry{
    BoxGeometry(scale1: number, scale2: number, scale3: number, color: number, bool: boolean){

        let BoxGeometry = new THREE.Mesh(
            new THREE.BoxGeometry(scale1, scale2, scale3),
            new THREE.MeshPhongMaterial({wireframe: bool})
        );

        BoxGeometry.material.color.setHex(color);
        return BoxGeometry;
    };
};
