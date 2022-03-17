import React from "react";
import OnionImage from "./OnionsImage";
class ProbStatement extends React.Component{
    render()
    {
        return (
            <div className="navbar-light " >
            <br></br>
            <h1 className="m-3 " style={{color: "#3377aa",fontFamily:"Trirong",fontSize:"350%"}}>
            <img src="data:image/png;base64,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"
            style={{width:"4%",marginRight:"1%",marginBottom:"0.5%"}}/>
                Problem Statement :
            </h1>
            <hr style={{color: "grey",backgroundColor: "grey",height: 3}}/>
            <h5 className="app m-5" style={{color: "#696969",fontFamily:"Raleway",fontSize:"150%"}}>
            <strong>The Department wishes to create buffer stock of onions in the harvest season and keep the buffer stock intact with its food value, moisture and taste for at least a period of six months from date of storage. <br></br>
            <br></br>We would want the technical solution to be proposed for the following:- 
            <br></br>(a) Storage of onions in the traditional storage systems and warehouses available in the country. 
            <br></br>(b) Technical solutions for storage of onions in temperature-controlled storage systems, warehouses.<br></br> 
            </strong>
            </h5> 
            </div>
        );
    }
}
export default ProbStatement;