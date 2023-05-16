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

// create a Mesh bu combining geometry with material
torus = new THREE.Mesh(geometry, material)

scene.add(torus)

to see it >  renderer.render (scene, camera) 
// to setup recursive to call the render
function animate(){
    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;


    renderer.render(scene, camera) 
}
animate();