import React from "react";

export default function TechnologyCard({ img, title, desc }) {
    return (
        <div className="card">
            <img src={img} alt={title} />
            <h1 className="title_card">{title}</h1>
            <h1 className="desc_card">{desc}</h1>
        </div>
    )
}