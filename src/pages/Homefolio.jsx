import "./Homefolio.scss";
import React, { useEffect } from "react";
import * as THREE from "three";
import dinesh from "../assets/images/din1.png";
import space from "../assets/images/space.jpg";
import normal from "../assets/images/normal.jpg";
import moon1 from "../assets/images/moon.jpg";
import tech1 from "../assets/images/html.png";
import tech2 from "../assets/images/css.png";
import tech3 from "../assets/images/js3.png";
import tech4 from "../assets/images/react.png";
import tech5 from "../assets/images/boot.jpg";
import tech6 from "../assets/images/tailwind.webp";
import tech7 from "../assets/images/treejs.webp";
import tech8 from "../assets/images/mui.png";
import Navbar from "../components/navbar/Navbar";
import { motion } from "framer-motion";
import { FaArrowCircleDown } from "react-icons/fa";
import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const Homefolio = () => {
  useEffect(() => {
    // Setup

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg"),
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

    const din = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ map: dinTexture })
    );

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
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <canvas id="bg"></canvas>
      </div>

      <main>
        <header>
          <p>🚀 Welcome to my website!</p>

          <h4>Hi, I'm Dinesh </h4>
          <h4>I Develop creative user interfaces and web applications</h4>
          <div className="button">
            <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }} // Define the scale values for the bouncing effect
              transition={{ duration: 3.3, repeat: Infinity }} // Set the duration and repeat
              whileHover={{
                scale: 1.1,
              }}
            >
              <a
                href="https://drive.google.com/file/d/13t81p_w8yv2kbXEzvdyZWlzd3o226HGg/view?usp=drive_link"
                rel="opener noreferrer"
                target="_blank"
                className="CV"
              >
                VIEW CV <FaArrowCircleDown className="icon" />
              </a>
            </motion.h1>
          </div>
        </header>

        <blockquote>
          <p>I like making 3D Websites.</p>
        </blockquote>

        <section>
          <h2>📜 Skills</h2>
          
            <div className="images">
            <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech1} alt="" />
              </Tilt>
              <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech2} alt="" />
              </Tilt>
              <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech3} alt="" />
              </Tilt>
              <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech5} alt="" />
              </Tilt>
              
            </div>
            <div className="images">
           
              <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech4} alt="" />
              </Tilt>
              <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech6} alt="" />
              </Tilt>
              <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech7} alt="" />
              </Tilt>
              <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
              <img src={tech8} alt="" />
              </Tilt>
            </div>
         

          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> */}
        </section>
        <section class="right">
          <h2>👩🏽‍🚀 Projects</h2>

          

          {/* <h2>🏆 Accomplishments</h2> */}
          <marquee class="marq"
                
                loop="">
            Project-1 : Sansid Solutions
        </marquee> 
          <p>
          
Primary focus in developing the recruitment
company website is to provide visitors with comprehensive
information about our company and our clients. Additionally,
we aim to facilitate direct communication with our staff
through WhatsApp, allowing users to send messages or emails
conveniently via the contact us page.
          </p>
          <marquee class="marq"
                
                loop="">
            Project-2 : LoopUp IT Solutions
        </marquee> 
          <p>
          
          LookUP IT Solutions is a Global Technology Services Company-offering a full range of Technology Products, Solutions, and Services with a presence in all key markets in the US, Europe, Asia-Pacific, etc serving large, medium, and small-sized enterprise.
          </p>
        </section>
        <section class="left">
          <h1>🌮 Work History</h1>
<div className="ship"> <h2>Internship:-</h2>
            <h3>

Promena LLP - Bangalore</h3></div>
<h2>Project -1</h2>
          <p>
            Yozoi revolutionizes domiciliary support services
for senior citizens by combining deep technology with
community empowerment, fostering a hybrid model for
enhanced efficiency and quality. Our mission is to address the
social challenges of aging populations while empowering
individuals and delivering top-tier services through innovative
mobile technology.
Develop an interactive, clean code, good user interface
web application & responsive.
Form validation for Singn UP & Sing in.
 <br /><span>Skills Used: </span>HTML, CSS, Javascript, React J.S, SCSS
          </p>
          <h2>Project -2</h2>
          <p>
          LookUP IT Solutions is a Global Technology Services Company-offering a full range of Technology Products, Solutions, and Services with a presence in all key markets in the US, Europe, Asia-Pacific, etc serving large, medium, and small-sized enterprise.
 <br /><span>Skills Used: </span>HTML, CSS, Javascript, React J.S, SCSS,Tailwind CSS
          </p>
        </section>

        <blockquote>
          <p>Thanks for watching!</p>
        </blockquote>
      </main>
    </>
  );
};

export default Homefolio;
