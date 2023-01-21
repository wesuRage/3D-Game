import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import * as THREE from 'three';

export default class Core extends THREE.Scene{
	_camera: THREE.PerspectiveCamera;
	_renderer: THREE.WebGLRenderer;
	_light: THREE.DirectionalLight;

	_composer: EffectComposer;
	_renderPass: RenderPass;
	_glitchPass: GlitchPass;

	init(){		
		this._camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
		this._camera.position.z = 10;

		this._renderer = new THREE.WebGLRenderer();

		if(innerWidth < 720){
			this._renderer.setSize(innerWidth, 350);
		}else{
			this._renderer.setSize(720, 350);
		}

		document.body.appendChild(this._renderer.domElement);

		this._light = new THREE.DirectionalLight(0xffff00, 0.5);
		this._light.position.set(5, 4, 2);
		this.add(this._light);
		this.add(new THREE.AmbientLight(0x888888));
	};

	glitch(){
		this._composer = new EffectComposer(this._renderer);
		this._renderPass = new RenderPass(this, this._camera);
		this._glitchPass = new GlitchPass();

		this._composer.addPass(this._renderPass);
		this._composer.addPass(this._glitchPass);
	}

	BoxGeometry(scale1: number, scale2: number, scale3: number, color: number, bool: boolean){

        let BoxGeometry = new THREE.Mesh(
            new THREE.BoxGeometry(scale1, scale2, scale3),
            new THREE.MeshPhongMaterial({wireframe: bool})
        );

        BoxGeometry.material.color.setHex(color);
        return BoxGeometry;
    };

	resize(){
		addEventListener('resize', () => {

			if(innerWidth < 720){
				this._renderer.setSize(innerWidth, 350);
			}else{
				this._renderer.setSize(720, 350);
			}
		})
	}

};
