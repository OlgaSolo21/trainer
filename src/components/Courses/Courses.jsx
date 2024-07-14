import React, { useState } from 'react'
import Menu from '../Menu/Menu';
import MenulistAll from '../MenuListAll/MenuListAll';
import { data } from '../../data';

const Courses = () => {
    const [meals] = useState(data);
    return (
        <>
            <Menu />
            {meals && (
                <MenulistAll meals={meals.filter((meal) => meal.type === 'courses')} />
            )}
        </>
    );
}

export default Courses
