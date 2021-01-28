import React from "react"; 
import {  NavLink } from 'react-router-dom'; 
import UserContext from '../contexts/Context';
import useForm from './helpers/useForm';

function  FormInitiative({onUndateForm, isDisabled = false}) {
const userContext = React.useContext(UserContext)
const {values, handleChange, isValid} = useForm()



function handleSubmit(e) {
  e.preventDefault();
  onUndateForm({
    initiative: values.initiative,
    username: values.username,
    usermail: values.usermail
  })
}

    return (
<section className="main main_page_one root__main">
      <div className="main__pic-container">
        <h2 className="main__subtitle">Давай создадим инициативу</h2>
        <div className="main__illustration main__illustration_page_one"></div>
      </div>
      <div className="main__form-container">
        <div className="main__progress-bar main__progress-bar_step_one"></div>
        <form noValidate  method="POST" isDisabled={!isValid} action="#" onSubmit={handleSubmit} className="form form_step_one">
          <label className="form__label" >Назови инициативу</label>
          <input className="form__input" onChange={handleChange} value={values.initiative} autoComplete="off" required minLength='2' maxLength='35' type="text" name="initiative"/>
          <label className="form__label" >Введи имя</label>
          <input className="form__input" onChange={handleChange} value={values.username} autoComplete="off" required minLength='3' maxLength='150' type="text" name="username" placeholder="ФИО"/>
          <label className="form__label" >Укажи почту</label>
          <input className="form__input" onChange={handleChange} value={values.usermail} autoComplete="off" required minLength='3' type="e-mail" name="usermail" placeholder="e-mail"/>
          <p className="form__info">Мы не передаём данные третьим лицам и коммерческим организациям. Тебе не будут писать мошенники и приходить спам. 
          Это сделано для того, чтобы ты мог получать уведомления о статусе своей инициативы.</p>
          <NavLink className='form__next' to='/FormCategory'><button className={`button button_type_next ${isDisabled} && 'form_next'`}  disabled={!isDisabled}>Дальше</button></NavLink>
        </form>
      </div>
    </section>
    )
};

export default FormInitiative;