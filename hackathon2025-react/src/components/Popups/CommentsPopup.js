import React from "react"; 
import refreshButton from '../../resources/images/refresh.svg';

function CommentsPopup({onClose, isOpen}) {

function handleSubmit(e) {
    e.preventDefault()
}

    return (
<div className={`new-comment root__new-comment ${isOpen && "new-comment_visible"}`}>
      <form className="new-comment__container" onSubmit={handleSubmit}>
        <section className="new-comment__header">
          <fieldset className="new-comment__fieldset">
            <input className="new-comment__input" type="text" placeholder="Ваше имя"/>
            <input className="new-comment__input" type="email" placeholder="Почта"/>
          </fieldset>
          <button className="button button_type_comment" onClick={onClose}>Комментировать</button>
          <button className="close root__close" onClick={onClose}></button>
        </section>
        <section className="new-comment__choice">
          <input className="new-comment__option" required type="radio" name="comment-option"/>
          <input className="new-comment__option" required type="radio" name="comment-option"/>
          <input className="new-comment__option" required type="radio" name="comment-option"/>
        </section>
        <button className="button button_type_refresh">Сгенерировать другой стих
          <img className="button__refresh-icon" src={refreshButton} alt="Обновить стихи"/>
        </button>
      </form>
    </div>
    )
};

export default CommentsPopup;