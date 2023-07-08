import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Configuración básica de i18next
i18n.use(initReactI18next).init({
  resources: {
    EN: {
      translation: {
        home: "Home",
        about: "About",
        experience: "Experience",
        languege: "Language",
        contact: "Contact",
        formations: "Education",
        downloadCV: "Download",
        indexParagraph1:
          "I have experience in web development using a variety of technologies, including Java, Vue.js, PHP, Node.js, Express, and MongoDB. I am also familiar with relational databases like MySQL and PostgreSQL, and I have skills in version control systems like Git and GitHub.",
        indexParagraph2:
          "Additionally, I have knowledge in front-end technologies such as HTML5 and CSS3, and I have worked with modern frameworks like Next.js and Bootstrap 5. I also have experience using UI libraries like Material UI to create attractive and responsive interfaces.",
        indexParagraph3:
          "In the backend development field, I have worked with Node.js and Express to create robust and scalable APIs. I have also used NoSQL databases like MongoDB for efficient data storage.",
        indexParagraph4:
          "Furthermore, I have experience using Flask, a Python framework, for rapid web application development. I have also explored the field of big data using Pandas and Matplotlib for data analysis and visualization.",
        " indexParagraph5":
          "I also have knowledge in WordPress for website creation and customization, as well as a strong understanding of object-oriented programming in Java, Python, JavaScript, and PHP.",
        indexParagraph6:
          "Although I am a junior developer, I am committed to continue learning and improving my technical skills in web development.",
        welcomeTitle: "Welcome to my interactive full-stack web development CV",
        technicalSkillsTitle: "My technical skills"
      }
    },
    ES: {
      translation: {
        home: "Inicio",
        about: "Sobre mí",
        experience: "Experiencia",
        languege: "Idioma",
        contact: "Contacto",
        formations: "Formación",
        downloadCV: "Download",
        indexParagraph1:
          "Poseo experiencia en el desarrollo de aplicaciones web utilizando una variedad de tecnologías, incluyendo Java, Vue.js, PHP, Node.js, Express y MongoDB. También estoy familiarizado con bases de datos relacionales como MySQL y PostgreSQL, y tengo habilidades en el manejo de sistemas de control de versiones como Git y GitHub.",
        indexParagraph2:
          "Además, tengo conocimientos en tecnologías front-end como HTML5 y CSS3, y he trabajado con frameworks modernos como Next.js y Bootstrap 5. También tengo experiencia en el uso de bibliotecas de interfaz de usuario como Material UI para crear interfaces atractivas y responsivas.",
        indexParagraph3:
          "En el ámbito de desarrollo backend, he trabajado con Node.js y Express para crear APIs robustas y escalables. También he utilizado bases de datos NoSQL como MongoDB para el almacenamiento eficiente de datos.",
        indexParagraph4:
          "Además, tengo experiencia en el uso de Flask, un framework de Python, para el desarrollo rápido de aplicaciones web. También he explorado el campo del big data utilizando Pandas y Matplotlib para el análisis y visualización de datos.",
        indexParagraph5:
          "También tengo conocimientos en WordPress para la creación y personalización de sitios web, así como una sólida comprensión de la programación orientada a objetos en Java, Python, JavaScript y PHP.",
        indexParagraph6:
          "Aunque soy un desarrollador junior, estoy comprometido en seguir aprendiendo y mejorar mis habilidades técnicas en el desarrollo web.",
        welcomeTitle:
          "Bienvenidos a mi CV interactivo de desarrollo web full stack",
        technicalSkillsTitle: "Mis habilidades técnicas",
        
      }
    }
  },
  lng: "es",
  fallbackLng: "en"
});

export default i18n;
