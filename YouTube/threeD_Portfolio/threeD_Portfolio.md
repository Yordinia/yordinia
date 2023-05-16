- import * 'three' as THREE 
scene
- holds oll objects and light new THREE.Scene()
camera
- common is const camera = new THREE.ProspectiveCamera( 75(feel the view, based on 360) ,aspect ration window.innerWidth / window.innerHeight, 0.1 , 1000 last two are view frustrum, how far we can see )
renderer - new THREE.WebGLRenderer({canvas: document.querySelector('#bg)})
.setPixelRatio( window.devicePixelRatio) // set pixed ratio
.setSize(window.innerWidth, widow.innerHeight  ) // make it full screen canvas
camera.position.setZ(30) // camera is positioned in the middle of the scene, give better prespective by moving it along the Z axis
renderer.render(scene, camera) 

add object
geometry = new THREE.TorusGeometry(10, 3, 16, 100)
material is like wrapping paper for geometry
material = new THREE.MeshBasicMaterial({color: 0xFF6347, wireframe:true}) // wireframe to get a better look at its actuall geometry
// can use webGL  custom shaders
// TO ENABLE Lighting SHADING use this material
material = new THREE.MeshStandardMaterial({color: 0xFF6347})

// create a Mesh by combining geometry with material
const torus = new THREE.Mesh(geometry, material)

scene.add(torus)

// lighting
const pointLight = new THREE.PointLight(0xffffff)
pointLight.pointLight.set(5,5,5) // to move it away from center
const ambientLight = new THREE.AmbientLight(0Xffffff) // is more like a floodlignt that lights up everything
scene.add(pointLight, ambientLight)

// helpers 
// PointLightHelper shows us the position of a point light
const lightHelper = new THREE.PointLightHelper(pointLight)
scene.add(lightHelper)

// GridHelper draws a 2D grid along the scene
const gridHelper = new THREE.GridHelper(200,50)
scene.add(gridHelper)

// OrbitControls // interact with mouse
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

const controls = new OrbitControls(camera, renderer.domElement);
// listen to DOM events with the mouse, and update the camera position acconrdingly (thus use update in anim functin)

// How we can use three js math helpers, to randomly generate a mass number of objects in the scene!!
// randomly generated stars
function addStar() {
    const geometry = new THREE.SphereGeometry(r 0.25, 24, 24);
    const meterial = new THREE.MeshStanderdMaterial({color: 0xffffff})
    const star = new THREE.Mesh(geometry, material)

    // randomly posision
    // use randFloatSpread gets us random number bn -x to x
    const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100 ));
    star.position.set(x,y,z);
    scene.add(star)
}

Array(200).fill().forEach(addStar)

// looks pretty cool, but lets make this better by adding a backgroud to outer space

// load image using TextureLoader that u can pass a call back function here to be notified when the image is done loading (useful if u wanna show learning bar, if ur scene relys on a lot of static assets)
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture; // set background property

// To set properties (textures) to individual materials
// Texture Mapping 2D > map them to > 3D
const jeffTexture = new THREE.TextureLoader().load('jeff.png')
const jeff = new THREE.Mesh(
    new THREE.BoxGeometry(3,3,3),
    new THREE.MeshBasicMaterial({map: jeffTexture})
)
then,  scene.add(jeff)

// combine multiple maps to create more interesting objects
// moon, create the illusionn of crators and mountains
const moonTexture = new THREE.TextureLoader().load('moon.png')
const normalTexture = new THREE.TextureLoader().load('normal.png')

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3,32,32),
    new THREE.MeshStandardMaterial({map: moonTexture,
    normalMap: normalTexture
    })
)
then,  scene.add(moon)

//finally

> To animate while scrolling

> first 
> add HTML files (main should have a position absolute) 
// position moon to be further down z ( the DXN we'll be scrolling)
mooon.position.z = 30;
moon.position.setX(-10); //assign .z= OR .setX

function moveCamera(){
  //calculate where the user is currently scrolled to
  // getBoundingClientRect will give us the dimentions of our view port .top .left .right .bottom
  // top is always negative
  const t = document.body.getBoundingClientRect().top;

  // rotation
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  // camera position
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

}
document.body.onscroll = moveCamera;// fires when user scrolls

// to see it >  renderer.render (scene, camera) 
// to setup recursive to call the render
function animate(){
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    controls.update();

    renderer.render(scene, camera) 
}
animate();

// CSS Grid to make this layout really easy to build

main {
    display: grid;
    grid-template-columns: repeat(12, 1fr)
}
header {
    grid-column: 2/ span 5; // 2/7
}
child {
    grid-column: 2/8;
}

// Bottom line - easy to position elements how ever you like