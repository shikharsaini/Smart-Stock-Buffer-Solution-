import Navbar from '../components/NavBar';
import ProbStatement from '../components/ProbStatement';
import Idea from '../components/Idea';
import Footer from '../components/footer';
import HumidityModule from '../components/HumidityModule';
import TempModule from '../components/TempModule';
import React, { useState, useEffect} from "react";


setInterval(function(){window.location.reload(false);},20000);

const DataPage = () => {

    return (
        <div className="App" style={{height:"47.3rem",marginTop:"1%"}}>
            <h1 style={{color: "#3377aa",fontFamily:"Trirong",fontSize:"350%"}}>
                Data Obtained
            </h1>
            <hr className='mb-3' style={{color: "grey",backgroundColor: "grey",height: 3}}/>
            <div class="container col-3 m-6 "  >
                <div class="row">
                    <div class="m-2 ">
                       <HumidityModule/>
                    </div>
                </div>
            </div>    
        </div>
    );
}
export default DataPage;
  