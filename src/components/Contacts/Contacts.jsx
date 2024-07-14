import telegramIcon from "../../images/telegramIcon.png"
import instagramIcon from "../../images/instaIcon.png"
import gmailIcon from "../../images/gmailIcon.png"


export default function Contacts() {

    return (
        <section className="container">
            <div className="contacts__container">
                <div className="contacts__map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac2b49a38357ff7e70a4bfd0ec7c0c309d3822526631f934db1f35b3bf5c368c8&amp;source=constructor"
                        width="488" height="433"></iframe>
                </div>
                <div className="contacts__info">
                    <h2 className="contacts__title">Вы можете связаться со мной через:</h2>
                    <nav className="contacts__links">
                        <a href="https://t.me/OlgaSoloSh">
                            <img src={telegramIcon} alt="telegram icon" className="contacts__link"/>
                        </a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                            <img src={gmailIcon} alt="mail icon" className="contacts__link"/>
                        </a>
                        <a href="https://www.instagram.com/os_solodovnikova?igsh=MXBwYnF4MndieWx2&utm_source=qr">
                            <img src={instagramIcon} alt="instagram icon" className="contacts__link"/>
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    )
}