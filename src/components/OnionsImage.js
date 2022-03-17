import React from "react";
import Onions from "../Images/Onions.jpeg"
class OnionImage extends React.Component{
    render()
    {
        return (
            <img style={{width:"30%"}} src={Onions} alt={"logo"} className="mb-5"/> 
        );
    }
}
export default OnionImage;