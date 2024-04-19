import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './styles/Projects.css'

const Projects = () => {

  const [selected, setSelected] = useState(0)
const url = 'https://hoteles-proyecto6.netlify.app/#/'
    const [t] = useTranslation('global');

    const img:string[] = ['../../../../public/images/img_academlo1.jpg',
                           '../../../../public/images/img_academlo2.jpg',
                          '../../../../public/images/img_academlo3.jpg', 
                          '../../../../public/images/img_academlo4.jpg',
                          '../../../../public/images/img_academlo5.jpg', 
                          '../../../../public/images/img_academlo6.jpg']

   const objStyle = {
      width: `${img.length * 100}%`,
      transform: `translateX(calc(-${selected}/${img.length}*100%))`,
  };

    const handlePrev = () => {
    if (selected !== 0) {
      setSelected(selected - 1);
    }else{
      setSelected(selected)
    }
  };

  const handleNext = () => {
    if (selected !== img.length - 1) {
      setSelected(selected + 1);
    }else{
      setSelected(selected)
    }
  };

  return (
    <div className="projects__container">
        <h2>{t("projects.project")}</h2>
        <div className="content__slider">
          <div className="sliders__container">
            <button onClick={handlePrev} className="slider__btn prev">⏪</button>
            <div style={objStyle} className="slider__mobable">
            
              {
                img.map(image => (
                  <div className="slider__img" key={`${image}`}><img className="projects__img" src={`${image}`} alt="" /></div>
                ))
              }
             
            </div> 
            <button onClick={handleNext} className="slider__btn next">⏩</button>        
          </div>
          </div>
          
        <div className="projects__info">
          <h3 className="projects__name">{t(`projects.project${selected + 1}_name`)}</h3>
          <p className="projects__description">{t(`projects.project${selected + 1}_text`)}</p>

          <button  className="btn btn_demo"
           onClick={() => window.location.href = t(`projects.project${selected + 1}_url_demo`)} >
            {t(`projects.see_demo`)}
          </button> 

          <button  className="btn btn__code"
           onClick={() => window.location.href = t(`projects.project${selected + 1}_url_code`)} >
            {t(`projects.see_code`)}
          </button>               
            
        </div>
        
    </div>
  )
}

export default Projects