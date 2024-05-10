import NavBar from "../components/encabezado/NavBar"
import Information from "../components/encabezado/Information";
import './styles/Encabezado.css'
import React from "react";

interface EncabezadoProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
  setDesplazar: React.Dispatch<React.SetStateAction<string>>;
}

const Encabezado: React.FC<EncabezadoProps> = ({ selectedLanguage, setSelectedLanguage, setDesplazar })  => {
  return (
    <div className="Encabezado-container">
      <NavBar 
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      setDesplazar={setDesplazar}
      />
      <Information/>
    </div>
  )
}

export default Encabezado