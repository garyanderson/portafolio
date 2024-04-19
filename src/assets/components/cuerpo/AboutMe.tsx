import { useTranslation } from "react-i18next";
import './styles/AboutMe.css'

const AboutMe = () => {

    const [t] = useTranslation('global');

  return (
    <div className="about__container">
        <section>
        <h2 className="title about__title">{t("body.about_me")}</h2>
        <p className="text about__text">{t("body.about_text")}</p>
        <div className="container__img">
            <div className="img__ing about__img">
                
            </div>
            <div className="img__des about__img">
                
            </div>
            <div className="img__eq about__img">
                 
            </div>     
        </div>
        
      </section>
    </div>
  )
}

export default AboutMe