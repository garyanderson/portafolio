import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import logo from '/images/en.png'
import en from '/images/en.png'
import es from '/images/es.png'
import pt from '/images/pt.png'
import './styles/NavBar.css'
import '../utilities/scripts/animation_menu.ts'


interface NavBarProps {
    selectedLanguage: string
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
    setDesplazar: React.Dispatch<React.SetStateAction<string>>;
}



const NavBar: React.FC<NavBarProps> = ({ selectedLanguage, setSelectedLanguage, setDesplazar }) => {
    const [t] = useTranslation('global');

    const [displaceMenu, setDisplaceMenu] = useState(false)
    const [darkMode, setDarkMode] = useState<boolean>(true)
    
    
 
    useEffect(() => {
        const setMode = async () => {
            if (!darkMode) {
                
                //const link  = document.querySelector('link[href="../utilities/darkmode/ligth_color.css"]') as HTMLLinkElement;
                //if(link){
                    //link.href = '../utilities/darkmode/dark_color.css';
                //}*/
                 //Importa el archivo CSS de modo oscuro
                //await import('../utilities/darkmode/dark_color.css');
                //const link  = document.querySelector('link[href="../utilities/darkmode/dark_color.css"]') as HTMLLinkElement;
                //if(link){
                    //link.href = '../utilities/darkmode/ligth_color.css';
                //}
                const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './src/assets/components/utilities/darkmode/dark_color.css';
    link.id = 'darkModeCss'; // Agregar un id al link
    document.head.appendChild(link);
                
            } else {
                console.log("perra sigue vacia")
                //console.log("link esta vacio")
                // Importa el archivo CSS de modo claro
                //await import('../utilities/darkmode/ligth_color.css');
            }
            
        };
console.log(darkMode)
        setMode();
    }, [darkMode]);
   
    
  return (
    <div className='navbar__container'>
        <div className="navbar1">
            <ul className={`navbar__list1 }`}>
                <li onClick={() => setDesplazar('cabeza')} className='navbar__item'>
                    <img className='icon' src="/images/icon-inicio.png" alt="" /><span>{t('navbar.start')} </span>
                </li>
                <li onClick={() => setDesplazar('acerca')} className='navbar__item'>
                    <img className='icon' src="/images/icon-profile.png" alt="" /><span>{t('navbar.about_me')}</span>
                </li>
                <li onClick={() => setDesplazar('habilidades')} className='navbar__item'>
                    <img className='icon' src="/images/icon-skills.png" alt="" /><span>{t('navbar.skills')}</span>
                </li>
                <li onClick={() => setDesplazar('portafolio')} className='navbar__item'>
                    <img className='icon' src="/images/icon-briefcase.png" alt="" /><span>{t('navbar.skills')}</span>
                </li>
                <li onClick={() => setDesplazar('contactos')} className='navbar__item'>
                    <img className='icon' src="/images/icon-contacts.png" alt="" /><span>{t('navbar.skills')}</span>
                </li>
            </ul>
        </div>
        <div className="navbar2" id='nav2'>
            <div onClick={() => setDarkMode(!darkMode)} className={`darkmode ${darkMode ? 'sun' : 'moon'}`}>
                    <div className={`selector ${darkMode ? 'moon' : 'sun'}`}>
                        <img className='icon-darkmode' src={`/images/icon-${darkMode ? 'moon' : 'sun'}.png`} alt="" />
                    </div>
                </div>
            <div className='logo_name'>
                <img  className={`icon`} src={logo} alt="logo"   />
                <span className={`navbar__name`}>Gary</span>
            </div>
            <div className='navbar__language'>
            <ul className='navbar__list2'>
                <li onClick={() => setDisplaceMenu(!displaceMenu)}>
                    <img className='icon-language' src={`/images/${selectedLanguage}.png`} alt="" />
                </li>

                <li onClick={() => {setSelectedLanguage('es'); setDisplaceMenu(!displaceMenu);} } 
                    className={`${selectedLanguage === 'es' ? 'selected' : 'notselected'} 
                    ${displaceMenu ? 'displace__on' : 'displace__off'}`}>
                    <img className='icon-language' src={es} alt="" />
                </li>
                <li onClick={() => {setSelectedLanguage('en'); setDisplaceMenu(!displaceMenu);}} 
                    className={`${selectedLanguage === 'en' ? 'selected' : 'notselected'} 
                    ${displaceMenu ? 'displace__on' : 'displace__off'}`}>
                    <img className='icon-language' src={en} alt="" />
                </li>
                <li onClick={() => {setSelectedLanguage('pt'); setDisplaceMenu(!displaceMenu);}}                 
                    className={`${selectedLanguage === 'pt' ? 'selected' : 'notselected'} 
                    ${displaceMenu ? 'displace__on' : 'displace__off'}`}>
                    <img className='icon-language' src={pt} alt="" />
                </li>
            </ul>
            </div>
                
            
       </div>
    </div>
  )
}

export default NavBar


