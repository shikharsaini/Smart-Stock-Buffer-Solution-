import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import DHT from "../Images/DHT.jpg";
import useHttp from "../Hooks/use-https";
import { getData } from "../api/api";
import NoDataFound from "../Data/NoData";
import HumidityData from "../Data/DataCalls/Humidity";
import TempData from "../Data/DataCalls/Temperature";

const HumidityModule = () => {
    return (
        <div className="card" style={{width: '30rem',height:'41rem'}}>
        <img className="card-img-top" src={DHT} alt="Card image cap" style={{width:"60%",margin:"15%",marginTop:"2%",marginBottom:"1%"}}/>
        <div className="card-body " >
            <h5 className="card-title">DHT 11</h5>
            <p className="card-text">
            The DHT11 is a basic, ultra low-cost digital temperature and humidity sensor. It uses a capacitive humidity sensor and a thermistor to measure the surrounding air, and spits out a digital signal on the data pin
            </p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h5>Humidity :</h5>
                <HumidityData/>
            </li>
            <li className="list-group-item">
                <h5>Temperature :</h5>
                <TempData/>
            </li>
        </ul>
        </div>
    );
}
export default HumidityModule;