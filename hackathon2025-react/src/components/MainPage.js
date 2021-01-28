import React from "react"; 
import {  NavLink } from 'react-router-dom'; 

function MainPage() {
    return (
      <main className="main main_page_index root__main">
        <h1 className="main__title">Прояви свою <span className="main__title_bold">инициативу</span></h1>
        <p className="main__text">Расскажи людям в стихах, как ты можешь изменить жизнь к лучшему. Переосмысли классические произведения и примени их в современном мире.</p>
        <NavLink to="/FormInitiative"> <button className="button button_type_create">Создать инициативу</button></NavLink>
      </main>
    )
};

export default MainPage;