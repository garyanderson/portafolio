import NavBar from "../components/encabezado/NavBar"
import Information from "../components/encabezado/Information";
import './styles/Encabezado.css'

interface EncabezadoProps {
  selectedLanguage: string;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const Encabezado: React.FC<EncabezadoProps> = ({ selectedLanguage, setSelectedLanguage })  => {
  return (
    <div className="Encabezado-container">
      <NavBar 
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      />
      <Information/>
    </div>
  )
}

export default Encabezado