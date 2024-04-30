import React, { useEffect } from 'react'
import "./Contact.scss";
import * as THREE from 'three';
import dinesh from "../../assets/images/dinesh.png";
import space from "../../assets/images/space.jpg";
import normal from "../../assets/images/normal.jpg";
import moon1 from "../../assets/images/moon.jpg";
import Navbar from '../../components/navbar/Navbar';
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";

const Contact = () => {
    useEffect(() => {
        // Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Torus

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
  
scene.add(torus);

// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load(space);
scene.background = spaceTexture;

// Avatar

const dinTexture = new THREE.TextureLoader().load(dinesh);

const din = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: dinTexture }));

scene.add(din);

// Moon

const moonTexture = new THREE.TextureLoader().load(moon1);
const normalTexture = new THREE.TextureLoader().load(normal);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

din.position.z = -5;
din.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  din.rotation.y += 0.01;
  din.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
    }, [])
  return (
    <>
    <div>
   <canvas id="bg"></canvas>
   </div>
    <Navbar/>

    <main>
   <header>
       <h4> <p>
         I am interested in working with any company that thinks my skill
         will be helpful for them. If you are looking for someone like me,
         please let me know.
       </p> </h4>
       
     </header> 
     <header>
       <h4>  
           <ul>
         <li>
           
           <p>
           <CiMail /> dineshchokkai@gmail.com
           </p>
         </li>
         <li>
           
           <p>
           <FaSkype />dinesh dns
           </p>
         </li>
         <li>
          
           <p>
           <FaLinkedin />- @dineshchokkai
           </p>
         </li>
         <li>
           <h5><FaAddressBook />Address</h5>
           <p>Uttarahalli- Bangalore</p>
         </li>
         <li>
           <h5><FaAddressBook />Mobile</h5>
           <p>9966006852</p>
         </li>
       </ul> </h4>
       
     </header> 
    


     <blockquote>
       <p>Thanks for watching!</p>
     </blockquote>
     </main>
   
   <div className="contact">
     <div className="contact_container">
       <p>
         I am interested in working with any company that thinks my skill
         will be helpful for them. If you are looking for someone like me,
         please let me know. Or you can just 'say hi' to me.
       </p>
       <div>
         {/* <Button
           title="Contact Me"
           mt="25px"
           bgColor="#00cf5d"
           color="#fff"
           link="mailto:zonayedpca@gmail.com"
         /> */}
       </div>
     </div>
     <div className="contact-details">
       <ul>
         <li>
           <h5>Email</h5>
           <p>
             zonayedpca@gmail.com <span>(Recommended)</span>
           </p>
         </li>
         <li>
           <h5>Skype</h5>
           <p>
             zonayedpca <span>(Always Available)</span>
           </p>
         </li>
         <li>
           <h5>Social</h5>
           <p>
             Facebook/Twitter - @zonayedpca <span>(Slow response)</span>
           </p>
         </li>
         <li>
           <h5>Address</h5>
           <p>Gouripur, Daudkandi, Cumilla, Bangladesh - 3517</p>
         </li>
       </ul>
     </div>
   </div>
 

   </>  )
}

export default Contact