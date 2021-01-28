import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
import MainPage from './MainPage';
import FormInitiative from './FormInitiative';
import FormSelection from './FormSelection';
import FormCategory from './FormCategory';
import PoemForm from './PoemForm';
import Initiative from './navigation/Initiative';
import AboutProject from './navigation/AboutProject';
import MyInitiative from './navigation/MyInitiative';
import UserContext from '../contexts/Context';
import SubmitPopup from './Popups/SubmitPopup';
import CommentsPopup from './Popups/CommentsPopup'

function App() {
    const [donePopupOpen, setDonePopupOpen] = React.useState(false);
    const [comentsPopupOpen, setComentsPopupOpen] = React.useState(false);

    function openComentsPopup() {
        setComentsPopupOpen(true)
    }

    function openPopupSubmit() {
        setDonePopupOpen(true)
    };

    function closeAllPopup() {
        setDonePopupOpen(false)
        setComentsPopupOpen(false)
    }

    React.useEffect(() => {
        function EscClose(evt) {
            if (evt.key === 'Escape') {
                CommentsPopup()
            }
        }
        document.addEventListener('keydown', EscClose)
        return () => {
            document.removeEventListener('keydown', EscClose)
        }
    }, [])

    return ( <UserContext.Provider >
        <div className = "page" >
        <Route >
        <Header / >
        </Route> 
        <Route path = '/Initiative' >
        <Initiative 
        onAddPopupComent = { openComentsPopup }/> 
        </Route> 
        <Route path = "/AboutProject" >
        <AboutProject / >
        </Route> 
        <Route path = "/MyInitiative" >
        <MyInitiative / >
        </Route> 
        <Switch >
        <Route exact path = "/" >
        <MainPage / >
        </Route>
         <Route path = "/FormInitiative" >
        <FormInitiative 
        isDisabled
        / >
        </Route>
         <Route path = "/FormSelection" >
        <FormSelection / >
        </Route>
         <Route path = "/FormCategory" >
        <FormCategory / >
        </Route>
         <Route path = "/PoemForm" >
        <PoemForm 
        onAddPopup = { openPopupSubmit }/>
         </Route> 
         </Switch> 
         <SubmitPopup isOpen = { donePopupOpen }
        onClose = { closeAllPopup }/> 
         <CommentsPopup isOpen = { comentsPopupOpen }
        onClose = { closeAllPopup } /> 
        <Footer / >
        </div> 
        </UserContext.Provider>
    );
}

export default App;