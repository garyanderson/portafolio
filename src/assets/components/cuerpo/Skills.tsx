import { useTranslation } from "react-i18next";
import { useState } from "react";
import html from '../../../../public/images/html.png'
import css from '../../../../public/images/css.png'
import js from '../../../../public/images/js.png'
import react from '../../../../public/images/react.png'
import './styles/Skills.css'

const Skills: React.FC = () => {

    const [selected, setSelected] = useState<number | null>(null)

    const [t] = useTranslation('global');

    

    const handleClick = (index: number) => {
       setSelected(index === selected ? null : index)
    }
    

  return (
    <div id="habilidades" className="skills__container">    
        <h2 className="skills__title">{t("body.skills")}</h2>
        <p className="skills__text-title">{t("body.skills_text")}</p>
        <div className="containe__cards">
             <div onClick={() => handleClick(0)}  className={`card card1 ${selected === 0 ? 'open-card' : ''}`}>
                <div className="skills__icon"><img src={html} alt="html5" /></div>
                <h3 className="skills__title">HTML5</h3>
                <p   className="skills__text">{t("body.html")}</p>
            </div>
            <div onClick={() => handleClick(1)} className={`card card2 ${selected === 1 ? 'open-card' : ''}`}>
                <div className="skills__icon"><img src={css} alt="css3" /></div>
                <h3 className="skills__title">CSS3</h3>
                <p   className="skills__text">{t("body.cs3")}</p>
            </div>
            <div onClick={() => handleClick(2)} className={`card card3 ${selected === 2 ? 'open-card' : ''}`}>
                <div className="skills__icon"><img src={js} alt="javascript" /></div>
                <h3 className="skills__title">JS</h3>
                <p   className="skills__text">{t("body.js")}</p>
            </div>
            <div onClick={() => handleClick(3)} className={`card card4 ${selected === 3 ? 'open-card' : '' }`}>
                <div className="skills__icon"><img src={react} alt="react" /></div>
                <h3 className="skills__title">REACT</h3>
                <p   className="skills__text">{t("body.react")}</p>
            </div>
        </div>
        <h3 className="sft-sklls__title">{t("body.soft_skills")}</h3>
        <div className="sft-skills__container">
            <span className="sft-skills__item">{t("body.soft_skills1")}</span>
            <span className="sft-skills__item">{t("body.soft_skills2")}</span>
            <span className="sft-skills__item">{t("body.soft_skills3")}</span>
            <span className="sft-skills__item">{t("body.soft_skills4")}</span>
            <span className="sft-skills__item">{t("body.soft_skills5")}</span>
            <span className="sft-skills__item">{t("body.soft_skills6")}</span>
        </div>
    </div>
  )
}

export default Skills