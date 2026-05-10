import React from 'react';

const Footer: React.FC = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#333', color: '#fff'}}>
      <div>
        <a href="#home" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#about" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Contact</a>
      </div>
    </nav>
  );
};

export default Footer;