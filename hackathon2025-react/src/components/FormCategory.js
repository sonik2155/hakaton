import React from "react"; 
import {  NavLink, useHistory } from 'react-router-dom';

function FormCategory() {
  const history = useHistory();


    return (
        <section className="main main_page_one root__main">
      <div className="main__pic-container">
        <h2 className="main__subtitle">Из какой это оперы?</h2>
        <div className="main__illustration main__illustration_page_two"></div>
      </div>
      <div className="main__form-container">
        <div className="main__progress-bar main__progress-bar_step_two"></div>
        <form className="form form_step_two">
          <label className="form__label">Выбери категорию</label>
          <fieldset className="form__fieldset">
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Образование"/>
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Здоровье"/>
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Экология"/>
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Право"/>
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Общество"/>
            <input className="form__input form__input_type_radio" type="radio" name="category" value="Государство"/>
          </fieldset>
          <p className="form__info">Можно выбрать только одну категорию.</p>
        </form>
        <div className="form__buttons">
            <button onClick={() => history.goBack()} className="button button_type_back">Назад</button>
            <NavLink to='/FormSelection'><button className="button button_type_next">Дальше</button></NavLink>
          </div>
      </div>
    </section>
    )
};

export default FormCategory;