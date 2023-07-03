'use client'
import  { useState } from 'react';
import Link from 'next/link';

const Navbar =() =>{
  const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return(
    <nav className={`cv__nav-content ${menuOpen ? 'open' : ''}`}>
       <div className="menu-toggle" onClick={toggleMenu}>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
        <div className="hamburger"></div>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
         <li><Link href="/">Inicio</Link></li>
         <li><Link href="/about">Sobre mí</Link></li>
         <li><Link href="/experience">Experencia</Link></li>
         <li><Link href="/langueges">Idiomas</Link></li>
         <li><Link href="/contact">Contacto</Link></li>
         <li><Link href="/formations">Formación</Link></li>
       </ul>
    </nav>
  )
}

export default Navbar;