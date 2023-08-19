import React from "react";

export default function Inf({ title, desc1, button, desc2 }) {
    return (
        <div className="inf__block flex">
            <h1 className="title_block">{title}</h1>
            <div>
                <h1 className="description">{desc1}</h1>
                {button && <button className="button_desc__about_us">{button}</button>}
            </div>
            <h1 className="description">{desc2}</h1>
        </div>
    )
}