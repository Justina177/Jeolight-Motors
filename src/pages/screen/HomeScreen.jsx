import React from 'react';
import data from '../data';
import '../Car.css'
import { Link } from 'react-router-dom'
import { Btn } from  "../../components/styles/Button.styled.jsx"


function HomeScreen() {
  return (
  <div>
    <h1>Featured Cars</h1>
  <div className="cars">
    {
    data.cars.map((car) => (
    <div className="car" key={car.slug}>
      <Link to={`/car/${car.slug}`}>
      <img src={car.image} alt={car.name} />
      </Link>
      <div className="car-info">
      <Link to={`/car/${car.slug}`}>
      <p>{car.name}</p>
      </Link>
      <p>{car.price}</p>
      <Link to={`/car/${car.slug}`}>
      <Btn className='button'>View More</Btn>
      </Link>
    </div>
  </div>

  
  ))}
  </div>
  </div>
);
}

export default HomeScreen;
