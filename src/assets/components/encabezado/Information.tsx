import { useTranslation } from 'react-i18next';
import marca from '../../../../public/images/marca.png'
import hv_human from '../../../../public/docs/hv_human.pdf'
import './styles/Information.css'



const Information = () => {

  const [t] = useTranslation('global');


  return (
    <div className='container__info'>
      <h1 className='information__info'>{t('information.info')}</h1>
      <p>{t('information.text')}</p> 
      <img className='information__img' src={marca} alt="" />     
      <div className='information__button'> 
        <a className='information__btn' href={hv_human}>{t('information.button')}</a>
      </div>
           
    </div>
  )
}

export default Information