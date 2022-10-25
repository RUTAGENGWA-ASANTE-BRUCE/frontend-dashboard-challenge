import React, { Component } from "react";
import * as THREE from "three";

class Scene extends Component {
  constructor(props) {
    super(props);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(
      60,
      this.mount.clientWidth / this.mount.clientHeight,
      0.1,
      10
    );
    camera.position.set(1, 1.5, 1).setLength(2.5);
    camera.lookAt(scene.position);
    let renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    renderer.setClearColor(0x161616);
    // document.body.appendChild(renderer.domElement);
    // let controls = new OrbitControls(camera, renderer.domElement);

    let light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.setScalar(1);
    scene.add(light, new THREE.AmbientLight(0xffffff, 0.5));

    let grid = new THREE.GridHelper(2, 20, 0xffff00, 0xffff00);
    grid.position.y = -0.001;
    scene.add(grid, new THREE.AxesHelper(1));

    let graphGeom = new THREE.PlaneGeometry(2, 2, 20, 20);
    graphGeom.rotateX(Math.PI * -0.5);
    let graphMat = new THREE.MeshNormalMaterial({
      side: THREE.DoubleSide,
      wireframe: false,
    });
    let graph = new THREE.Mesh(graphGeom, graphMat);

    // f(x,z)
    let pos = graphGeom.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let z = pos.getZ(i);
      pos.setY(
        i,
        Math.sin(x * z * Math.PI) * Math.cos(z * z * Math.PI * 0.5) * 0.75
      );
    }
    graphGeom.computeVertexNormals();

    scene.add(graph);

    // const width = this.mount.clientWidth;
    // const height = this.mount.clientHeight;

    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // const renderer = new THREE.WebGLRenderer({ antialias: true });
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: "#433F81" });
    // const cube = new THREE.Mesh(geometry, material);

    // camera.position.z = 4;
    // scene.add(cube);
    // renderer.setClearColor("#000000");
    // renderer.setSize(width, height);

    // window.addEventListener("resize", onResize);

    renderer.setAnimationLoop((_) => {
      renderer.render(scene, camera);
    });

    function onResize(event) {
      camera.aspect = this.mount.clientWidth /this.mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(this.mount.clientWidth, this.mount.clientHeight);
    }

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.mount.appendChild(this.renderer.domElement);
    this.start();
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId);
  }

  animate() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div
        style={{ width: "400px", height: "400px" }}
        ref={(mount) => {
          this.mount = mount;
        }}
      ></div>
    );
  }
}

export default Scene;
