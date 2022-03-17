import React from "react";
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import arduino from "../Images/arduino.jpg";
import useHttp from "../Hooks/use-https";
import { getData } from "../api/api";
import NoDataFound from "../Data/NoData";
import TempData from "../Data/DataCalls/Temperature.js";
const TempModule = () => {
    return (
        <div className="card" style={{width: '20rem',height:'30rem'}}>
        <img className="card-img-top" src={arduino} alt="Card image cap" style={{width:"60%",alignItems: "center"}}/>
        <div className="card-body">
            <h5 className="card-title">Module Name</h5>
            <p className="card-text">Working and findings</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <h5>Temperature :</h5>
                <TempData/>
            </li>
        </ul>
        </div>
    );
}
export default TempModule;