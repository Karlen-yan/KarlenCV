import Image from "next/image";
import './style.css'
import ImageAuthor from './../images/img_karlen.png';
export default function AboutPage() {
  return (
   <div>
      <div className="cv">
        <div className="profile">
          <Image
             src={ImageAuthor}
             width={200}
             height={200}
             alt="Picture of the author"
             />           
        </div>
        <div className="cv-content">
          <h1>Sobre mí</h1>
        </div>
      </div>
      <div className="cv__content-text">
      <p>¡Hola a todos! Mi nombre es Karlen Hakobyan y me complace compartir con ustedes un poco sobre mí. Soy un apasionado desarrollador web con un fuerte deseo de convertir ideas en realidad.</p>

<p>He completado un Grado Superior en Desarrollo de Aplicaciones Web, donde adquirí un conjunto sólido de habilidades y conocimientos necesarios para enfrentar los desafíos del mundo de la programación. Sin embargo, mi pasión por la música es lo que realmente me define.</p>

<p>Desde hace tiempo, he estado tocando instrumentos de viento armenios como el duduk, zurna, parkapzuk y shvi. La música es mi verdadero escape y una fuente inagotable de inspiración para mi trabajo como desarrollador web.</p>

<p>La creatividad es uno de los elementos clave que aplico en el diseño y desarrollo de aplicaciones web. Siempre busco nuevas ideas y soluciones innovadoras para hacer que mis proyectos se destaquen y brinden una experiencia excepcional.</p>

<p>Antes de embarcarme en mi formación en diseño web, comencé a aprender por mi cuenta de forma autodidacta. Fue entonces cuando descubrí mi pasión por este campo y decidí estudiarlo formalmente. Esta proactividad y dedicación demuestran mi motivación para aprender y crecer constantemente.</p>

<p>Además, disfruto trabajando en equipos colaborativos, donde puedo aportar mis ideas y sugerencias constructivas. Participar activamente en reuniones de equipo me permite mejorar la calidad del código y la eficiencia del desarrollo. Considero que el trabajo en equipo es esencial para lograr resultados sobresalientes.</p>

<p>En resumen, soy un desarrollador web apasionado, creativo y resolutivo. Mi amor por la música y mi dedicación a la programación me convierten en un profesional único y valioso. Estoy emocionado por aplicar mis habilidades y conocimientos en proyectos del mundo real y enfrentar nuevos desafíos. </p>
          
        
      </div>
   </div>
  )
}
