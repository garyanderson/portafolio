import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import logo from '../../../../public/images/logo.png'
import menu from '../../../../public/images/menu.png'
import './styles/NavBar.css'

interface NavBarProps {
    selectedLanguage: string
    setSelectedLanguage: React.Dispatch<React.SetStateAction<string>>;
}



const NavBar: React.FC<NavBarProps> = ({ selectedLanguage, setSelectedLanguage }) => {
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
        <div>
            <img  className={`icon icon-logo ${!isMenu}`} src={logo} alt="logo"   />
            <span className={`navbar__name ${!isMenu}`}>Gary</span>
            <span className={`icon__closed ${isMenu}`} onClick={handleClose}>❌</span>
        </div>
        <ul className={`navbar__list } ${isMenu}`}>
            <li className='navbar__item'><span>{t('navbar.start')} </span></li>
            <li className='navbar__item'><span>{t('navbar.about_me')}</span></li>
            <li className='navbar__item'><span>{t('navbar.skills')}</span></li>
            <li className='navbar__item'><span>{t('navbar.briefcase')}</span></li>
            <li className='navbar__item'><span>{t('navbar.contact')}</span></li>
        </ul>
        <div>
            <select className={`navbar__select ${!isMenu}`} name={selectedLanguage} onChange={handleChange}>
                <option className='navbar__option' value={'1'}>es</option>
                <option className='navbar__option' value={'2'}>en</option>
                <option className='navbar__option' value={'3'}>pt</option>
            </select>
        </div>
        <img onClick={handleMenu} className='icon icon-menu' src={menu} alt="" />
    </div>
  )
}

export default NavBar