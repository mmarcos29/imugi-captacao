import React from "react";
import './Texto.css'
import img from '../../img/logo.png'

export const Texto = () => {
  return (
    <div className="Texto">
      <img src={img} alt=""/>
      <p className="p">EDUCAÇÃO COM</p>
      <p className="s">TECNOLOGIA</p>
      <p className="t">E INGLÊS</p>
    </div>
  );
};
