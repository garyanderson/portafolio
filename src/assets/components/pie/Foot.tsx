import { useTranslation } from "react-i18next";
import './styles/Foot.css'

const Foot = () => {

    const [t] = useTranslation('global');

    return (
      <div id="piesote" className="foot__container">
        <h3 className="foot__title">{t("footer.footer_title")}</h3>
        <p className="foot__text">{t("footer.footer_text")}</p>
        <span className="foot__rigth">{t("footer.footer_rigth")}</span>
      </div>
    )
}

export default Foot