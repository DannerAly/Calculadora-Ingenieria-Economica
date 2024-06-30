// src/Perfil.js
import React from 'react';
//import './Perfil.css';

const Developer = () => {
  return (
    <div className="perfil-container">
      <h1>Desarrollador</h1>
      <p className="intro-text">
          Aly Delgado Danner Abel </p>
        <p>Inquieto, un poco hiperactivo, apasionado por la imagen, el sonido, el desarrollo de Software y frontEnd, BLA BLA BLA. </p>
      <div className="image-container">
        <img src="https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/314705498_1842801536113696_5767736930012456105_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=8C7SDdoA2UgQ7kNvgFK4TDj&_nc_ht=scontent.flpb1-1.fna&oh=00_AYANgG7wTwXs24xu8fSoCVEZu2B9iPhgU9F7DIZpTawVnw&oe=667792D1" alt="Developer Coding" className="intro-image"/>
        <img src="https://media.licdn.com/dms/image/D4D12AQEtdhfU9rTyfg/article-cover_image-shrink_600_2000/0/1695133555250?e=2147483647&v=beta&t=4DpciPKxW1OT9qph2ur1jBlPEWSTK5NV_uyaSdsxx5g" alt="Code on Screen" className="intro-image"/>
       </div>
      <section className="skills-section">
        <h2>Habilidades</h2>
        <ul>
          <li>Desarrollo Frontend: React, Angular, Vue.js</li>
          <li>Desarrollo Backend: Node.js, Python, Java</li>
          <li>Desarrollo Mobile: React Native, Flutter</li>
          <li>Base de Datos: MySQL, PostgreSQL </li>
          <li>Control de Versiones: Git, GitHub, GitLab</li>
          <li>Metodologías Ágiles: Scrum, Kanban</li>
          <li>Producción Audiovisual: Adobe Premiere, After Effects, Audition, Illustrator, Photoshop, Lightroom, Character</li>
            
          <li>3D: Blender, Cinema 4d</li>
        </ul>
      </section>
      <div className="image-container">
        <img src="https://www.adobe.com/homepage/media_1fa8e1e0ac21d8c3414a42022ebae7d0bc0dbe61e.png?width=750&format=png&optimize=medium" alt="Full Stack Development" className="intro-image"/>
        <img src="https://miro.medium.com/v2/resize:fit:2000/1*ItGd7Itb99Cr6rE4qVD8wg.png" alt="Development Tools" className="intro-image"/>
      </div>
     
      <section className="tools-section">
        <h2>Herramientas y Tecnologías</h2>
        <p>
          Utilizo una variedad de herramientas y tecnologías para asegurar la calidad y eficiencia de mi trabajo:
        </p>
        <ul>
          <li>Visual Studio Code</li>
          <li>Postman</li>
          <li>Jenkins</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>AWS</li>
        </ul>
      </section>
    </div>
  );
};

export default Developer;
