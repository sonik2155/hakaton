import React from "react"; 
import {  useHistory } from 'react-router-dom';
import refreshButton from '../resources/images/refresh.svg';
import {api} from '../utils/utils';
import getData from './helpers/findData';

function PoemForm({onAddPopup}) {
const history = useHistory();
const [poem, setPoem] = React.useState('');
const [poems, setPoems] = React.useState([]);

//const rand = Math.floor(Math.random() * Array.length)

function updatePoem(e) {
  setPoem(e.target.value)
};


React.useEffect(() => {
  api.getPoetry()
  .then(res => {
    setPoems(res)
  })
  .catch((err) => { 
    console.log(err); 
  }); 
}, []); 

const poet = poems.filter( item => {
  return item.fields.text.includes('я долго')
});


const rand = Math.floor(Math.random * Array.length)
const { author, text } = getData(poems)

console.log(getData())

//const { fields: { author, text } = {} } = poet[5] || {}



    return (
        <section className="main main_page_one root__main">
        <div className="main__pic-container">
          <h2 className="main__subtitle">Остался последний шаг</h2>
          <div className="main__illustration main__illustration_page_four"></div>
        </div>
        <div className="main__form-container">
          <div className="main__progress-bar main__progress-bar_step_four"></div>
          <form className="form form_step_four">
            <div className="form__textarea-wrapper">
              <p className="form__input form__input_type_textarea" name="rhymes" readOnly>{text}
 
              </p>
              <p className="form__author">{author}</p>
            </div>
            <button onClick={console.log('soon')} className="button button_type_refresh">Сгенерировать другой стих
              <img className="button__refresh-icon" src={refreshButton} alt="Обновить стихи" width="13" height="15"/>
            </button>
          </form>
          <div className="form__buttons">
             <button onClick={() => history.goBack()} className="button button_type_back">Назад</button> 
             <button onClick={onAddPopup} className="button button_type_next">Дальше</button>
            </div>
        </div>
      </section>
    )
};

export default PoemForm;