import React from "react"; 
import {  NavLink, useHistory } from 'react-router-dom'; 

function FormSelection() {
const history = useHistory();


    return (
        <section className="main main_page_one root__main">
      <div className="main__pic-container">
        <h2 className="main__subtitle">Давай уточним детали</h2>
        <div className="main__illustration main__illustration_page_three"></div>
      </div>
      <div className="main__form-container">
        <div className="main__progress-bar main__progress-bar_step_three"></div>
        <form className="form form_step_two">
          <label className="form__label" >Выбери подкатегорию</label>
          <fieldset className="form__fieldset">
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Образование"/>
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Здоровье"/>
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Экология"/>
          </fieldset>
          <p className="form__info">Ты всегда можешь вернуться и изменить свой выбор, нажав кнопку «Назад».</p>
          <label className="form__photo-label"/>
            <input className="form__input form__input_type_photo" type="file" name="photo"/>
            <div className="form__photo-label-container">
              <p className="form__photo-label-title">Загрузи фото</p>
              <p className="form__photo-label-text">Фото должно отражать суть твоей инициативы.</p>
            </div>
          <label/>
        </form>
        <div className="form__buttons">
            <button onClick={() => history.goBack()} className="button button_type_back">Назад</button>
           <NavLink to='/PoemForm'> <button className="button button_type_next">Дальше</button></NavLink>
          </div>
      </div>
    </section>
    )
};

export default FormSelection;

