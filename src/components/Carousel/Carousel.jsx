import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

export  default function Carousel({ images }) {
    const settings = {
        infinite: true,
        dots: !useMediaQuery({ query: '(max-width: 930px)' }), // Добавляем проверку ширины экрана
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="imgslider">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`item.alt`}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    )
}