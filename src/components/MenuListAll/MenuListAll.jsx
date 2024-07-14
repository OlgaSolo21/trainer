/* eslint-disable */
// eslint-disable-next-line
import React from 'react'
import Carousel from "../Carousel/Carousel";

const MenulistAll = ({meals}) => {
    return (
        <div className="container">
            {/* eslint-disable-next-line react/prop-types */}
            {meals.map((meal) => (
                <div key={meal.id} className="portfolio__container">
                        <div className="portfolio__items">
                            <div className="info">
                                <h2 className="info__title">{meal.title}</h2>
                                <p className="info__description">{meal.description}</p>
                                <p className="info__description">{meal.addDescription}</p>
                                <p className="info__description">{meal.addTwoDescription}</p>
                            </div>
                            <Carousel images={meal.img}/>
                        </div>
                </div>
            ))}
        </div>
    );
}

export default MenulistAll