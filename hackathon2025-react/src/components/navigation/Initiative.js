import React from "react"; 
import imagePlaceholder from '../../resources/images/image-placeholder.png';
import userpicPlaceholder from '../../resources/images/userpic-placeholder.png';
import supportBar from '../../resources/images/support-bar.svg';
import logoFb from "../../resources/images/Facebook.svg";
import logoVk from "../../resources/images/VK.svg";
import logoInst from "../../resources/images/Instagram.svg";
import logoTwit from "../../resources/images/Twitter.svg";
import { Link } from "react-router-dom";

function Initiative({onAddPopupComent}) {
const [count, setCount] = React.useState(0)


    return (
      <main className="initiative">
      <h1 className="initiative__title">Больше детских садов городам!</h1>
      <div className="initiative__container">
        <div className="initiative__main">
          <img className="initiative__image" src={imagePlaceholder} alt="Иллюстрация к инициативе"/>
          <pre className="initiative__text" >
«Спи, дитя моё, усни
Сладкий сон к себе мани:
В няньки я тебе взяла
Ветер, солнце и орла.
Улетел орел домой
Солнце скрылось под водой;
Ветер, после трёх ночей,
Мчится к матери своей.
Ветра спрашивает мать:
„Где изволил пропадать?
Али звезды воевал?
Али волны всё гонял?“
„Не гонял я волн морских,
Звезд не трогал золотых;
Я дитя оберегал,
Колыбелочку качал!“»</pre>
          <div className="initiative__comments">
            <h2 className="initiative__comments-title">Комментарии</h2>
            <article className="comment">
              <section className="comment__title">
                <img className="comment__userpic" src={userpicPlaceholder} alt="Аватар пользователя"/>
                <h3 className="comment__author">Александр Пушкин</h3>
                <p className="comment__time">Неделю назад</p>
              </section>
              <pre className="comment__text">
Когда-то (помню с умиленьем)
Я смел вас няньчить с восхищеньем
Вы были дивное дитя.
Вы расцвели - с благоговеньем
Вам ныне поклоняюсь я.
За вами сердцем и глазами
С невольным трепетом ношусь
И вашей славою и вами,
Как нянька старая, горжусь.</pre>
              <section className="comment__reaction">
                <button className="comment__like"></button>
                <p className="comment__like-count">556</p>
              </section>
            </article>
            <article className="comment">
              <section className="comment__title">
                <img className="comment__userpic" src={userpicPlaceholder} alt="Аватар пользователя"/>
                <h3 className="comment__author">Александр Пушкин</h3>
                <p className="comment__time">Неделю назад</p>
              </section>
              <pre className="comment__text">
Когда-то (помню с умиленьем)
Я смел вас няньчить с восхищеньем
Вы были дивное дитя.
Вы расцвели - с благоговеньем
Вам ныне поклоняюсь я.
За вами сердцем и глазами
С невольным трепетом ношусь
И вашей славою и вами,
Как нянька старая, горжусь.</pre>
              <section className="comment__reaction">
                <button className="comment__like"></button>
                <p className="comment__like-count">556</p>
              </section>
            </article>
            <article className="comment">
              <section className="comment__title">
                <img className="comment__userpic" src={userpicPlaceholder} alt="Аватар пользователя"/>
                <h3 className="comment__author">Александр Пушкин</h3>
                <p className="comment__time">Неделю назад</p>
              </section>
              <pre className="comment__text">
Когда-то (помню с умиленьем)
Я смел вас няньчить с восхищеньем
Вы были дивное дитя.
Вы расцвели - с благоговеньем
Вам ныне поклоняюсь я.
За вами сердцем и глазами
С невольным трепетом ношусь
И вашей славою и вами,
Как нянька старая, горжусь.</pre>
              <section className="comment__reaction">
                <button className="comment__like"></button>
                <p className="comment__like-count">556</p>
              </section>
            </article>
            <button className="initiative__more-comments">Ещё 10 комментариев из 35</button>
            <button className="button button_type_comment" onClick={onAddPopupComent}>Комментировать</button>
          </div>
        </div>
        <aside className="initiative__aside">
          <section className="initiative__support">
            <img className="initiative__support-bar" src={supportBar} alt="Количество подписавшихся"/>
            <div className="initiative__labels">
              <p className="initiative__support-count">Подписали {count}</p>
              <p className="initiative__support-target">Цель: 50 000</p>
            </div>
          </section>
          <button onClick={() => setCount(count+1)} className="button button_type_support">Подписать</button>
          <ul className="initiative__share">
            <li className="initiative__share-item">
              <Link className="initiative__share-link">
                <img className="initiative__share-icon" src={logoInst} alt="Instagram"/>
              </Link>
            </li>
            <li className="initiative__share-item">
              <Link className="initiative__share-link">
                <img className="initiative__share-icon" src={logoVk} alt="ВКонтакте"/>
              </Link>
            </li>
            <li className="initiative__share-item">
              <Link className="initiative__share-link">
                <img className="initiative__share-icon" src={logoFb} alt="Facebook"/>
              </Link>
            </li>
            <li className="initiative__share-item">
              <Link className="initiative__share-link">
                <img className="initiative__share-icon" src={logoTwit} alt="Twitter"/>
              </Link>
            </li>
          </ul>
          <section className="initiative__actual">
            <h2 className="initiative__actual-title">Актуальные инициативы</h2>
            <article className="initiative__actual-card">
              <img className="initiative__actual-image" src={imagePlaceholder} alt="Иллюстрация к инициативе"/>
              <div className="initiative__actual-card-texts">
                <h3 className="initiative__actual-card-title">Построим дивный новый мир</h3>
                <p className="initiative__actual-supporters">500 подписей</p>
              </div>
            </article>
            <article className="initiative__actual-card">
              <img className="initiative__actual-image" src={imagePlaceholder} alt="Иллюстрация к инициативе"/>
              <div className="initiative__actual-card-texts">
                <h3 className="initiative__actual-card-title">Не дадим вырубить леса Сибири</h3>
                <p className="initiative__actual-supporters">500 подписей</p>
              </div>
            </article>
            <article className="initiative__actual-card">
              <img className="initiative__actual-image" src={imagePlaceholder} alt="Иллюстрация к инициативе"/>
              <div className="initiative__actual-card-texts">
                <h3 className="initiative__actual-card-title">В каждый домик — томик Блока!</h3>
                <p className="initiative__actual-supporters">500 подписей</p>
              </div>
            </article>
            <article className="initiative__actual-card">
              <img className="initiative__actual-image" src={imagePlaceholder} alt="Иллюстрация к инициативе"/>
              <div className="initiative__actual-card-texts">
                <h3 className="initiative__actual-card-title">Не дадим забыть творчество Мендельштама!</h3>
                <p className="initiative__actual-supporters">500 подписей</p>
              </div>
            </article>
            <article className="initiative__actual-card">
              <img className="initiative__actual-image" src={imagePlaceholder} alt="Иллюстрация к инициативе"/>
              <div className="initiative__actual-card-texts">
                <h3 className="initiative__actual-card-title">Откроем грант для учителей-литераторов</h3>
                <p className="initiative__actual-supporters">500 подписей</p>
              </div>
            </article>
            <article className="initiative__actual-card">
              <img className="initiative__actual-image" src={imagePlaceholder} alt="Иллюстрация к инициативе"/>
              <div className="initiative__actual-card-texts">
                <h3 className="initiative__actual-card-title">В каждый район — библиотеку</h3>
                <p className="initiative__actual-supporters">500 подписей</p>
              </div>
            </article>
          </section>
        </aside>
      </div>
    </main>
      
    )
};

export default Initiative;