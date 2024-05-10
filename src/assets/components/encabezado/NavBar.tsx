import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import logo from '../../../../public/images/logo.png'
import en from '../../../../public/images/en.png'
import es from '../../../../public/images/es.png'
import pt from '/images/pt.png'
import './styles/NavBar.css'
import '../utilities/scripts/animation_menu.ts'
import { dark } from '../utilities/scripts/dark.ts'


interface NavBarProps {
    selectedLanguage: string
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
    setDesplazar: React.Dispatch<React.SetStateAction<string>>;
}



const NavBar: React.FC<NavBarProps> = ({ selectedLanguage, setSelectedLanguage, setDesplazar }) => {
    const [t] = useTranslation('global');

    const [displaceMenu, setDisplaceMenu] = useState(false)
    const [darkmode, setDarkMode] = useState<boolean>(true)
    
 
   useEffect(() => {
        dark(darkmode)
   }, [darkmode])
   
    
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
            <div onClick={() => setDarkMode(!darkmode)} className={`darkmode ${darkmode ? 'sun' : 'moon'}`}>
                    <div className={`selector ${darkmode ? 'moon' : 'sun'}`}>
                        <img className='icon-darkmode' src={`/images/icon-${darkmode ? 'moon' : 'sun'}.png`} alt="" />
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


