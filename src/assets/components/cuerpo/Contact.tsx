import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import './styles/Contact.css'

interface FormData {
    name: string;
    email: string;
    affair: string;
    message: string;
}

const Contact = () => {

    const [t] = useTranslation('global');

    const { register, handleSubmit, reset } = useForm<FormData>();// formState: { errors }

    const onSubmit = () => {

        const formElement = document.querySelector('contact__form') as HTMLFormElement;
        if (formElement) {

        emailjs.sendForm('service_1t2je68', 'template_7iquo64', formElement, 'QTgARvQRTmft7LxPt')
            .then((result) => {
                console.log(result.text);
                reset({
                    name: "",
                    email: "",
                    affair: "",
                    message: ""
                }); 
            }, (error) => {
                console.log(error.text);
            });
        }
    };  

    console.log(emailjs)

  return (
    <div className="contact__container">
        <div className="contact__info">
            <h3 className="contact__name">{t("contacts.contact")}</h3>
            <h4 className="contact__title">{t("contacts.contact_title")}</h4>
            <p className="contact__text">{t("contacts.contact_text")}</p>
            <span className="contact__whatsapp">{t("contacts.whatsapp")}</span>
            <span>numero whatsapp</span>
            <span>correo</span>
            <span>Santiago de cali, Colombia</span>
        </div>        
        <form onSubmit={handleSubmit(onSubmit)} id="form__contact" className="contact__form">
          <h4 className="form__title">{t("contacts.form_title")}</h4>
          <label className="form__label">{t("contacts.name")}</label>
          <input type="text" {...register('name')} placeholder="Nombre" className="form__input"  />
          <label className="form__label">{t("contacts.e_mail")}</label>
          <input type="email" {...register('email')} placeholder="Correo electrónico" className="form__input" />
          <label className="form__label">{t("contacts.affair")}</label>
          <input type="text" {...register('affair')} placeholder="Affair" className="form__input" />
          <label className="form__label">{t("contacts.message")}</label>
          <textarea {...register('message')} placeholder="message" className="form__textarea" />
          <button type="submit" className="form__btn">{t("contacts.form_button")}</button>
        </form>
    </div>
  )
}

export default Contact