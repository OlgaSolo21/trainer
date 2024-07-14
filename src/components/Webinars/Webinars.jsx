// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Menu from '../Menu/Menu';
import MenulistAll from '../MenuListAll/MenuListAll';
import { data } from '../../data';

const Webinars = () => {
    const [meals] = useState(data);
    return (
        <>
            <Menu />
            {meals && (
                <MenulistAll meals={meals.filter((meal) => meal.type === 'webinars')} />
            )}
        </>
    );
}

export default Webinars