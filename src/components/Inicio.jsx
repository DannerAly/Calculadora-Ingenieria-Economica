// src/Inicio.js
import React from 'react';
import './Inicio.css';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <h1>Ingeniería Económica</h1>
      <p className="intro-text">
        La Ingeniería Económica es una rama de la ingeniería que se centra en la evaluación económica de proyectos de ingeniería. Implica el uso de principios y técnicas económicas para tomar decisiones sobre inversiones, presupuestos, y análisis de costos y beneficios.
      </p>
      <div className="image-container">
        <img src="https://as2.ftcdn.net/v2/jpg/01/18/12/09/1000_F_118120916_Qb2ZHxblyOzOpwtq4oXWB1P42xB5UUOk.jpg" alt="Economic Graph" className="intro-image"/>
        <img src="https://static.vecteezy.com/system/resources/previews/010/885/299/non_2x/the-graph-of-the-economy-went-down-the-growth-of-unemployment-market-trading-problems-women-are-sitting-on-the-graph-and-are-sad-illustration-business-is-low-and-arrow-fall-lost-money-vector.jpg" alt="Cash Flow" className="intro-image"/>
      </div>
      <section className="concepts-section">
        <h2>Conceptos Clave</h2>
        <ul>
          <li>Valor Presente y Futuro</li>
          <li>Tasa de Retorno</li>
          <li>Análisis de Inversión</li>
          <li>Costos y Beneficios</li>
          <li>Análisis de Sensibilidad</li>
          <li>Flujo de Caja</li>
          <li>Amortización</li>
          <li>Análisis de Costo de Ciclo de Vida</li>
          <li>Análisis de Punto de Equilibrio</li>
          <li>Ingeniería del Valor</li>
        </ul>
      </section>
      <div className="image-container">
        <img src="https://miro.medium.com/v2/resize:fit:795/1*Xaz0_aiArU9UU-7uD7uOIg.png" alt="Cost Benefit Analysis" className="intro-image"/>
        <img src="https://content.cdntwrk.com/files/aHViPTg1NDMzJmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVmOWNjYzdlMjdlYWYuanBnJnZlcnNpb249MDAwMCZzaWc9NDNmYzQ0OTVhNjU1YWM3ODU5ZmM5NjIxODE3ODkyNzk%253D" alt="Sensitivity Analysis" className="intro-image"/>
      </div>
      <section className="importance-section">
        <h2>Importancia</h2>
        <p>
          La Ingeniería Económica es crucial para asegurar que los proyectos de ingeniería no solo sean técnicamente viables sino también económicamente rentables. Ayuda a los ingenieros a tomar decisiones informadas que optimizan el uso de recursos y maximizan el valor de los proyectos.
        </p>
      </section>
      <section className="applications-section">
        <h2>Aplicaciones</h2>
        <p>
          La Ingeniería Económica se aplica en diversas áreas, incluyendo:
        </p>
        <ul>
          <li>Evaluación de Proyectos</li>
          <li>Gestión de Recursos</li>
          <li>Planeación Financiera</li>
          <li>Optimización de Procesos</li>
          <li>Gestión de Riesgos</li>
          <li>Planificación de Infraestructuras</li>
          <li>Desarrollo Sostenible</li>
        </ul>
      </section>
      <section className="tools-section">
        <h2>Herramientas y Métodos</h2>
        <p>
          Algunas de las herramientas y métodos utilizados en la Ingeniería Económica incluyen:
        </p>
        <ul>
          <li>Análisis de Valor Actual Neto (VAN)</li>
          <li>Índice de Rentabilidad</li>
          <li>Análisis de Costo-Beneficio</li>
          <li>Modelo de Flujo de Caja Descontado</li>
          <li>Optimización Lineal</li>
          <li>Simulación Monte Carlo</li>
        </ul>
      </section>
    </div>
  );
};

export default Inicio;
