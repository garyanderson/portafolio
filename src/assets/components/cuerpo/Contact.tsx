import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import './styles/Contact.css'

interface FormData {
    name: string,
    e_mail: string,
    affair: string,
    myName: string,
    message: string
}

const initialValues: FormData = {
  name: '',
  e_mail: '',
  affair: '',
  myName: 'Gary Botina',
  message: ''
}

const Contact = () => {

    const [t] = useTranslation('global');

   const  { register, handleSubmit, reset } = useForm<FormData> ({defaultValues: initialValues})  

   const serviceID = 'service_b5xazpk'
   const templateID = 'template_6y7xsh7'
   const publicKey = 'eEuz7Gto-fL63OmQ6'

   const sendEmail = (data: FormData) => {
   const btn = document.getElementById('btn') as HTMLButtonElement;
   
   btn.value = 'Enviando...';
   
      const params = {
          user_name: data.name,
          to_name: data.myName,
          user_affair: data.affair,
          user_email: data.e_mail,
          user_message: data.message
      }
      emailjs.init(publicKey)
       emailjs.send(serviceID, templateID, params)
         .then(() => {
           btn.value = 'Send Email';
           reset()
           alert('Enviado!');
          })
          .catch((err) => {
            btn.value = "send Eamil"
            reset()
            alert("eror al enviar el correo" + JSON.stringify(err))
          })
     };
   
   
  return (
    <div id="contactos" className="contact__container">
        <div className="contact__info">
            <h3 className="contact__name">{t("contacts.contact")}</h3>
            <h4 className="contact__title">{t("contacts.contact_title")}</h4>
            <p className="contact__text">{t("contacts.contact_text")}</p>
            <span className="contact__whatsapp">{t("contacts.whatsapp")}</span>
            <span>numero whatsapp</span>
            <span>correo</span>
            <span>Santiago de cali, Colombia</span>
        </div>        
        <form onSubmit={handleSubmit(sendEmail)} className="contact__form">
          <h4 className="form__title">{t("contacts.form_title")}</h4>
          <label className="form__label">{t("contacts.name")}</label>
          <input {...register('name')} type="text"  placeholder="Nombre" className="form__input"  />
          <label className="form__label">{t("contacts.e_mail")}</label>
          <input {...register('e_mail')} type="email"  placeholder="Correo electrónico" className="form__input" />
          <label className="form__label">{t("contacts.affair")}</label>
          <input {...register('affair')} type="text"  placeholder="Affair" className="form__input" />
          <label className="form__label">{t("contacts.message")}</label>
          <textarea {...register('message')}  placeholder="message" className="form__textarea"/>
          <button type="submit" id="btn" className="form__btn">{t("contacts.form_button")}</button>
        </form>
    </div>
  )
}

export default Contact