import React from "react";
import Sih from "../Images/Sih.jpeg";
class IdeaImage extends React.Component{
    render()
    {
        return (
            <div className="m-5" style={{alignItems: "center",justifyContent: 'center'}}>
            <img  style={{width:"55%"}} src={Sih} alt={"logo"}/> 
            </div>
        );
    }
}
export default IdeaImage;