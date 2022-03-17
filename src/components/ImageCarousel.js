import { Carousel } from "bootstrap";
import React from "react";
import OnionImage from "./OnionsImage";
import Onions from "../Images/Onions.jpeg"
import Onion1 from "../Images/onion1.webp"
import onion2 from "../Images/onion2.png"
import onionstorage from "../Images/onionstorage.png"
import Proto from "../Images/Proto.jpeg"
import LCD from "../Images/LCD.jpeg"
import "./ImageCarousel.css";
class ImageCarousel extends React.Component{
    render()
    {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{backgroundColor:"black"}}>
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner ChangeSize " style={{height:"500px"}} >
            <div className="carousel-item active MarginChange">
                <img src={Onion1} className="d-block w-50"  alt="..." />
            </div>
            <div className="carousel-item MarginChange">
                <img src={Proto} className="d-block w-50" alt="..." />
            </div>
            <div className="carousel-item MarginChange">
                <img src={LCD} className="d-block w-50" alt="..." />
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
            </button>
            </div>
        );
    }
}
export default ImageCarousel;