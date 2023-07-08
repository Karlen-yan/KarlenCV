import Image from "next/image";
import './style.css'
import ImageAuthor from './../images/img_karlen.png';

export default function Experience() {
  return (
   <div>
      <div className="cv">
        <div className="profile">
          <Image
             src={ImageAuthor}
             alt="Picture of the author"
             width={200}
             height={200}
             />           
        </div>
        <div className="cv-content">
          <h1>Experencía </h1>
        </div>
      </div>
      <div className="cv__container-text">
        
      <h2>Desarrollador web:</h2>
        <h5>MIXO 2022 - 2023</h5>
        <p>Como desarrollador web full-stack, he adquirido experiencia práctica en el desarrollo de frontend y backend a través de mi trabajo en varios proyectos, incluido Mixo. He sido responsable del diseño y desarrollo de páginas de sitios web, usando mis habilidades en tecnologías frontend y backend.</p>

        <h2>Diseñador web</h2>
        <h5>Mercat Immobiliari 2022</h5>
        <p>Como diseñador web autodidacta, he desarrollado sitios web utilizando la plataforma WordPress, con especial foco en el sector inmobiliario a través del proyecto Mercat Immobiliari.</p>
      
        <h2>Ventas</h2>
        <h5>Ereven, 2017, Yerevan (Armenia)</h5>
        <p>Asistí a los clientes con sus compras y brindé recomendaciones de productos mientras realizaba tareas como cargar y descargar mercancías.</p>  
      </div>
   </div>
  )
}