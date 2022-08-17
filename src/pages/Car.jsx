import React from "react";
import data from "./data";
import "./car.css"


export default function Car () {
    return(

            <div className="main">
                <div>
                    <h1>Featured Cars</h1>
                    {data.cars.map((car) => (
                        <div key={car.slug}>
                            <img src={car.image} alt={car.name} />
                            <p>{car.name}</p>
                            <p>{car.price}</p>
                        </div>
                        ))}
                </div>
            </div>
    );
}