import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import  Encabezado  from "./assets/sections/Encabezado.tsx";
import  Cuerpo  from "./assets/sections/Cuerpo.tsx";
import  Pie  from "./assets/sections/Pie.tsx";
import './App.css'


function App() {

  const [selectedLanguage, setSelectedLanguage] = useState<string>('1')

  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    
    selectedLanguage === '1' && i18n.changeLanguage('es');
    selectedLanguage === '2' && i18n.changeLanguage('en');
    selectedLanguage === '3' && i18n.changeLanguage('pt');

  }, [selectedLanguage, i18n]);



  return (
  <div className='container_app'>
    <Encabezado 
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
    />
    <Cuerpo />
    <Pie />
  </div>
  )
}

export default App
