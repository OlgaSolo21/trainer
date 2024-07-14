import {Link, NavLink} from "react-router-dom";
import {useRef, useState} from "react";

export default function BurgerMenuPopup({isOpen, onClose}) {

    return (
        <header>
            <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <button
                        type="button"
                        aria-label="Close"
                        className="popup__buttonClose"
                        onClick={onClose}
                    />
                    <div className="popup__navigation">
                        <nav className="popup__links">
                            <NavLink
                                onClick={onClose}
                                to="/"
                                className={({isActive}) =>
                                    `${isActive ? "popup__links-active" : ""} popup__title link`}>Главная</NavLink>
                            {/*<NavLink*/}
                            {/*    onClick={onClose}*/}
                            {/*    to="/aboutMe"*/}
                            {/*    className={({isActive}) =>*/}
                            {/*        `${isActive ? "popup__links-active" : ""} popup__title link`}>Обо мне</NavLink>*/}
                            <NavLink
                                onClick={onClose}
                                to="/portfolio"
                                className={({isActive}) =>
                                    `${isActive ? "popup__links-active" : ""} popup__title link`}>Портфолио</NavLink>
                            <NavLink
                                onClick={onClose}
                                to="/contacts"
                                className={({isActive}) =>
                                    `${isActive ? "popup__links-active" : ""} popup__title link`}>Контакты</NavLink>
                            <NavLink
                                onClick={onClose}
                                to="/resume"
                                className={({isActive}) =>
                                    `${isActive ? "popup__links-active" : ""} popup__title link`}>Резюме</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}