import React from "react"; 
import { NavLink } from "react-router-dom";

function SubmitPopup(props) {
    return(
<div className={`done root__done ${props.isOpen && "done_visible"}`}>
      <div className="done__container">
        <h3 className="done__title">Готово!</h3>
        <p className="done__text">Поздравляем, твоя инициатива <br/> опубликована на сайте.</p>
        <div className="done__illustration"></div>
        <p className="done__text">Ты всегда сможешь найти её в разделе <br/> «Мои инициативы»</p>
        <NavLink to='/Initiative'><button onClick={props.onClose} className="button">Дальше</button></NavLink>
      </div>
    </div>
    )
};

export default SubmitPopup;