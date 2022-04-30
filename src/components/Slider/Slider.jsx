import React, {useContext} from "react";
import { Carousel } from "react-bootstrap";
import { context } from "../../context/CartProvider";
import slider1 from '../../assets/01.png'
import slider2 from '../../assets/02.png'
import slider3 from '../../assets/03.png'
import slider4 from '../../assets/04.png'

const SliderContent = () => {
  return (
  <Carousel fade>
    <Carousel.Item interval={2000}>
        <img
        className="d-block w-100"
        src={slider1}
        alt="First slide"
        />
        <Carousel.Caption>
          <h3>El Tottem Muñiz</h3>
          <h6>Simplemente, inigualables</h6>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img
        className="d-block w-100"
        src={slider2}
        alt="Second slide"
        />
        <Carousel.Caption>
          <h3>El Tottem Muñiz</h3>
          <h6>Sabemos lo que te gusta</h6>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img
        className="d-block w-100"
        src={slider3}
        alt="Third slide"
        />
        <Carousel.Caption>
          <h3>El Tottem Muñiz</h3>
          <h6>Protagonistas en tu mesa</h6>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
        <img
        className="d-block w-100"
        src={slider4}
        alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>El Tottem Muñiz</h3>
          <h6>Siempre primera calidad</h6>
        </Carousel.Caption>
    </Carousel.Item>
  </Carousel>   
  )
}

export default function Slider(){

  const {error, loading} = useContext(context)

  return (
  <div>
    {
      !error && !loading && <SliderContent/>   
    }
    
  </div>
  );
};

