import Image from "next/image";
import "./style.css"
import ImageAuthor from './../images/img_karlen.png';

export default function Contact() {
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
          <h1>Contacto</h1>
        </div>
      </div>

      <ul className="contact__container">
        <li>Tel: <a href="tel:632582005">632582005</a></li>
        <li>Email:<a href="tel:karlentkzar@gmail.com"> karlentkzar@gmail.com</a></li>
        <li>Dirección:<a href="https://goo.gl/maps/HqUPzRD732FqBuMq7"> Via Favencia Barcelona, 08033</a></li>
        <li>Github:<a href="https://github.com/Karlen-yan/"> https://github.com/Karlen-yan/</a></li>
        <li>Linledin: <a href="https://www.linkedin.com/in/karlen-hakobyan/">https://www.linkedin.com/in/karlen-hakobyan/</a></li>
      </ul>    
      
   </div>
  )
}