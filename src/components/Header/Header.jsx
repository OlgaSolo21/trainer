import {Link, NavLink} from "react-router-dom";

export default function Header({ openBurger }) {

    return(
        <header id="header">
            <div className="header">
                <Link className="header__link-logo link" to="/"/>
                <div className="header__links">
                    <NavLink to="/trainer-s-portfolio/" className={({isActive}) =>
                        `${isActive ? "header__active" : "header__inactive"} link`}>Главная</NavLink>
                    {/*<NavLink to="/aboutMe" className={({isActive}) =>*/}
                    {/*    `${isActive ? "header__active" : "header__inactive"} link`}>Обо мне</NavLink>*/}
                    <NavLink to="/trainer-s-portfolio/portfolio" className={({isActive}) =>
                        `${isActive ? "header__active" : "header__inactive"} link`}>Портфолио</NavLink>
                    <NavLink to="/trainer-s-portfolio/contacts" className={({isActive}) =>
                        `${isActive ? "header__active" : "header__inactive"} link`}>Контакты</NavLink>
                    <NavLink to="/trainer-s-portfolio/resume" className={({isActive}) =>
                        `${isActive ? "header__active" : "header__inactive"} link`}>Резюме</NavLink>
                </div>
                <div className="burger">
                    <button className="burger__button" type="button" onClick={openBurger}/>
                </div>
            </div>
        </header>
    )
}