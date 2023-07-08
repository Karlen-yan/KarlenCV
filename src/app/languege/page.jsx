import Image from "next/image";
import './style.css'
import ImageAuthor from './../images/img_karlen.png';
import FlagArmenian from './../images/Armenia.png';
import FlagSpine from './../images/España.png';
import FlagUSA from './../images/USA.png';
import FlagRussian from './../images/russian.png';

export default function languages() {
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
          <h1>Idiomas </h1>
        </div>
      </div>
      
        <div className="len__container">

        <div><Image className="icon__flags" src={FlagArmenian} /><span>Armenio:</span> Nivel nativo 
        <Image className="icon__flags" src={FlagSpine} /><span>Español:</span> Nivel alto</div>
        <div><Image className="icon__flags" src={FlagUSA} /><span>Inglés:</span> Nivel medio
        <Image className="icon__flags" src={FlagRussian} /><span>Ruso:</span> Nivel medio</div>        
        
        </div>
   </div>
  )
}