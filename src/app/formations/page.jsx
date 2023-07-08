import Image from "next/image";
import "./style.css";
import ImageAuthor from "./../images/img_karlen.png";
import Certificate from "./../images/Certificado_PF_DAW.jpg";
import CertificateSoc from "./../images/Certificado_creacion_publicacion_paginas_web.png";
import CertificateSocDescription from "./../images/Certificado_soc_intraducion_horas.png";

export default function Formations() {
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
          <h1>Formaciones</h1>
        </div>
      </div>

      <div className="formations__container">
        <h2>FP de Grado Superior de Desarrollo de aplicaciones web </h2>
        <h5>Xavier Escola técnico profesional, Barcelona, 2021-2023</h5>
        <Image
          src={Certificate}
          alt="Certificado de grado superior"
          width={400}
          height={300}
        />

        <h2>Grado en musicología</h2>
        <h5>Universidad Central de Armenia, Armenia, 2017-2019</h5>

        <h2>Bachillerato científico tecnológico </h2>
        <h5>Escuela secundaria Yerevan N 195, Armenia, 2017,</h5>
        <Image
          src="/../img/Karlen.png"
          alt="Certificado de bachelerato homologada"
          width={500}
          height={500}
        />
        <h2>Formación coplementaria</h2>
        <h3>CP de Programación y diseño de páginas web (480h), 2021</h3>
        <h5>IVEAEMPA - BAIX WORLD TRADE CENTER</h5>
        <div>
          <Image
            src={CertificateSoc}
            alt="Certificado de bachelerato homologada"
            width={400}
            height={300}
          />
          <Image
            src={CertificateSocDescription}
            alt="Certificado de bachelerato homologada"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
