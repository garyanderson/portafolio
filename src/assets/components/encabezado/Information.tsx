import { useTranslation } from 'react-i18next';
import marca from '../../../../public/images/marca.png'
import './styles/Information.css'



const Information = () => {

  const [t] = useTranslation('global');

  return (
    <div className='container__info'>
      <h1 className='information__info'>{t('information.info')}</h1>
      <p>{t('information.text')}</p> 
      <img className='information__img' src={marca} alt="" />     
      <div className='information__button'>
        <button className='information__btn'>{t('information.button')}</button> 
      </div>
           
    </div>
  )
}

export default Information