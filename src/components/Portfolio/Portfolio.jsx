import Menu from "../Menu/Menu";
import {useState} from "react";
import {data} from "../../data";
import MenulistAll from "../MenuListAll/MenuListAll";

export  default function Portfolio() {
    const [meals] = useState(data)

    return(
        <section>
            <Menu/>
            <MenulistAll meals={meals}/>
        </section>
    )
}