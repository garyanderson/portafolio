import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import  Encabezado  from "./assets/sections/Encabezado.tsx";
import  Cuerpo  from "./assets/sections/Cuerpo.tsx";
import  Pie  from "./assets/sections/Pie.tsx";
import './App.css';


function App() {

  const [selectedLanguage, setSelectedLanguage] = useState<string>('es')

  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    
    selectedLanguage === 'es' && i18n.changeLanguage('es');
    selectedLanguage === 'en' && i18n.changeLanguage('en');
    selectedLanguage === 'pt' && i18n.changeLanguage('pt');
    setDesplazar('cabeza')

  }, [selectedLanguage, i18n, ]);

const [desplazar, setDesplazar] = useState<string>('cabeza')


const element = document.getElementById(desplazar);


    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }


    console.log(t);

    


  return (
  <div className={`container_app}` }>
    
    <div id='cabeza'></div>
    <Encabezado  
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      setDesplazar={setDesplazar}
    />
    <Cuerpo />
    <Pie />
  </div>
  )
}

export default App
