var THREE = require('three');
var TWEEN = require('@tweenjs/tween.js');

export default () => {
  let sparks = [];
  let blown = [];
  let s_group = new THREE.Group();
  let nuked = false;
  let scene = new THREE.Scene();
  let camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    8000
  );
  camera.position.z = 400;
  let renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  // renderer.setClearColor(0x0a0026);
  document.body.append(renderer.domElement);

  function random(min, max, sign) {
    let rn = Math.floor(Math.random() * max + min);

    if (sign) rn *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

    return rn;
  }

  function grab_lighter(n) {
    let m = new THREE.SpriteMaterial({ color: 0xffffff });
    blown = [];

    for (let i = 0; i < n; i++) {
      let s = new THREE.Sprite(m);
      s.scale.set(2, 2, 2);
      s.position.set(0, 0, 0);
      sparks.push(s);
      s_group.add(s);
      blown.push({
        x: random(0, window.innerWidth, true),
        y: random(0, window.innerHeight, true),
        z: random(0, 1000, true)
      });
    }

    scene.add(s_group);
  }

  function nukeit() {
    for (let i = 0; i < sparks.length; i++) {
      let tween = new TWEEN.Tween(sparks[i].position)
        .to(blown[i], 100000)
        .easing(TWEEN.Easing.Exponential.Out)
        .onComplete(() => {
          nuked = true;
        });
      tween.start();
    }
  }

  function animate() {
    camera.position.z -= 0.04;
    TWEEN.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
  grab_lighter(700);
  nukeit();
};
