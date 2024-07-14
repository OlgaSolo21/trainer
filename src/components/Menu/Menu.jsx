import {useEffect, useState} from 'react'
import {NavLink, useLocation} from 'react-router-dom';
const data = [
    {
        title: 'Все',
        link: '/portfolio',
    },
    {
        title: 'Тренинги',
        link: '/portfolio/trainings',
    },
    {
        title: 'Вебинары',
        link: '/portfolio/webinars',
    },
    {
        title: 'Электронные курсы',
        link: '/portfolio/courses',
    },
    {
        title: 'Wellbeing',
        link: '/portfolio/wellbeing',
    },
];

const Menu = () => {
    const navs = data;
    const location = useLocation(); // обновлённое состояние
    const [activeLink, setActiveLink] = useState(null); // обновлённое состояние

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
            <ul className="menu">
                {navs.map((nav, index) => (
                    <li key={index}
                        className={`${nav.link === activeLink ? "menu__active" : ""} menu__item link`}>
                        <NavLink to={nav.link}>{nav.title}</NavLink>
                    </li>
                ))}
            </ul>
    );
}

export default Menu