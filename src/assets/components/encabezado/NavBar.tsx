import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import logo from '../../../../public/images/logo.png'
import menu from '../../../../public/images/menu.png'
import es from '../../../../public/images/es.png'
import './styles/NavBar.css'


interface NavBarProps {
    selectedLanguage: string
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>
    setDesplazar: React.Dispatch<React.SetStateAction<string>>;
}



const NavBar: React.FC<NavBarProps> = ({ selectedLanguage, setSelectedLanguage, setDesplazar }) => {
    const [t] = useTranslation('global');

    const [isMenu, setIsMenu] = useState(false);
    
 const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value);
    };

    const [alto, setalto] = useState("5%")
    
    const handleMenu = () => {
        setIsMenu(true);
        setalto("15%")
    };

    const handleClose = () => {
        setIsMenu(!isMenu);
        setalto("5%")
    }


  return (
    <div className='navbar__container' style={{height: `${alto}`}}>
        <div >
            <img  className={`icon icon-logo ${!isMenu}`} src={logo} alt="logo"   />
            <span className={`navbar__name ${!isMenu}`}>Gary</span>
            <span className={`icon__closed ${isMenu}`} onClick={handleClose}>❌</span>
        </div>
        <ul className={`navbar__list } ${isMenu}`}>
            <li onClick={() => setDesplazar('cabeza')} className='navbar__item'><span>{t('navbar.start')} </span></li>
            <li onClick={() => setDesplazar('acerca')} className='navbar__item'><span>{t('navbar.about_me')}</span></li>
            <li onClick={() => setDesplazar('habilidades')} className='navbar__item'><span>{t('navbar.skills')}</span></li>
            <li onClick={() => setDesplazar('portafolio')} className='navbar__item'><span>{t('navbar.briefcase')}</span></li>
            <li onClick={() => setDesplazar('contactos')} className='navbar__item'><span>{t('navbar.contact')}</span></li>
        </ul>
        <div>
            <select className={`navbar__select ${!isMenu}`} name={selectedLanguage} onChange={handleChange}>
                <option className='navbar__option icon es' value={'1'}>es</option>
                <option className='navbar__option icon en' value={'2'}>en</option>
                <option className='navbar__option icon pt' value={'3'}>pt</option>
            </select>
        </div>
        <img onClick={handleMenu} className='icon icon-menu' src={menu} alt="" />
    </div>
  )
}

export default NavBar


