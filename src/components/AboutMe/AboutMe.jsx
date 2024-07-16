import profileImg from "../../images/myFoto.jpg"

function AboutMe() {
    return (
        <section className="container">
            <div className="aboutMe__info">
                <div className="aboutMe__profile">
                    <h2 className="aboutMe__greeting">HI, THERE!</h2>
                    <h2 className="aboutMe__title">Солодовникова Ольга</h2>
                    <p className="aboutMe__subtitle">тренер отдела обучения</p>
                    <p className="aboutMe__caption">Добро пожаловать на созданный мною сайт-визитку!<br></br>
                        Здесь Вы можете подробнее узнать обо мне и моём карьерном пути.
                        Скачать мое резюме и/или получить контакты для связи - в соответствующих разделах.
                    </p>
                    <p className="aboutMe__caption">
                        В разделе "Портфолио" предлагаю познакомиться с моими работами.
                        Тут Вы найдете фрагменты созданных мной курсов, очных и дистанционных тренингов.
                        Также материалы, разработанные для самостоятельного изучения на платформе обучения.
                    </p>
                </div>
                <img className="aboutMe__pic" src={profileImg} alt="фото профиля"/>
            </div>
        </section>
    )
}

export default AboutMe