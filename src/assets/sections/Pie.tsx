import { useTranslation } from "react-i18next"
import Foot from "../components/pie/Foot";



const pie = () => {

  const [t] = useTranslation('global');

  return (
    <div className="pie__container">
      <Foot />
    </div>
  )
}

export default pie