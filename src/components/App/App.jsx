import Header from "../Header/Header";
import AboutMe from "../AboutMe/AboutMe";
import {Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import {useState} from "react";
import BurgerMenuPopup from "../BurgerMenuPopup/BurgerMenuPopup";
import Contacts from "../Contacts/Contacts";
import Portfolio from "../Portfolio/Portfolio";
import Trainings from "../Trainings/Trainings";
import Courses from "../Courses/Courses";
import WellBeing from "../WellBeing/WellBeing";
import Webinars from "../Webinars/Webinars";
import Resume from "../Resume/Resume";

function App() {
    const [isBurgerMenu, setIsBurgerMenu] = useState(false)
    function handleOpenBurger() {
        setIsBurgerMenu(true)
    }
    function handleClosePopup() {
        setIsBurgerMenu(false)
    }

    return (
        <>
            <Header openBurger={handleOpenBurger}/>

            <Routes>
                <Route path="/"
                       element={<AboutMe/>} />
                <Route path="/contacts"
                       element={<Contacts/>}/>
                <Route path="/portfolio"
                       element={<Portfolio/>}/>
                <Route path="/resume"
                       element={<Resume />}/>
                <Route path="/portfolio/trainings"
                       element={<Trainings/>}/>
                <Route path="/portfolio/courses"
                       element={<Courses/>}/>
                <Route path="/portfolio/wellbeing"
                       element={<WellBeing/>}/>
                <Route path="/portfolio/webinars"
                       element={<Webinars/>}/>
            </Routes>

            <Footer/>

            <BurgerMenuPopup
                isOpen={isBurgerMenu}
                onClose={handleClosePopup}
            />
        </>
  )
}

export default App;
