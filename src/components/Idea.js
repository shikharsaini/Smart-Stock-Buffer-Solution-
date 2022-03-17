import React from "react";
import IdeaImage from "./IdeaImage";
class Idea extends React.Component{
    render()
    {
        return (
        <div >
            <h1 className="m-3 " style={{color: "#3377aa",fontFamily: "Trirong",fontSize:"350%"}}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAALaklEQVR4nO2be3BU9RXHP+fuJmx4xypWbbUIVcDxkWzAByMC7bTqaH3ALgg6FSugVdpSZDcpaG+tFjboqEO1Qis+igXuipZanVp1QHybbEBGo+MgPuobBSGBDSR7T//YjaNLNtzde1cE9/PXzd7f75yz3/3d3z2/8/sFSpQoUaJEiRIlSnwbkX3hdLS52r8j+emIlOhIUY4FjgWOAPoDvTNxtaC0ImwReNNGNxoqr6RSvrXrbh73zr6Iuyu+NgFPnWlV7OrBz4BJoowlLVRhKP/D0IdRWZaIhZ4FUc8CzZOiC3jiHOsIfwe/BX4B9PvSrWZE14gaG1TtNwzD/04bbVvLt7S29jn8GP2s7YM+Pe1Arw5tH4DPNwjVQQLDFUYCh37Jzlsgt1ARuCthnruz2N8nm6IJeOpM66Dd5dxAWrjyzMcvKLq0zJd64MU/Tfq4UNtVddYwSUlIRCcCQzIff6qoOWiT3BmPh1Muw3dMEQRUqYnEL1MhBnwHSCka99kSa1gQXu+1t+paa6woEeCnmY/Wq3B50/xwwmtfXeGpgJlRdxdwPoDCE2IYMxLzxr/upZ+uqJ4dP118+meUE4BdqEYS9eGFxZ4fPRMwGLWOB/4NHAlsFeSXjbHQcq/sO2G0udrfunNzVAUT8CuypG/FwdPXmGM6iuXTEwGHz7bOsA3+C
                fQX5flUynfRvkw1qqIrRhlIHBgArGqrIPyqGd5dDF+GWwPByIoxtsF/SOdw8c+Tvcfs6zxtXWzCWp9hn47wDnBeYKfcA1qUF6YrAWsi1ghEVgEBVO5MVDRP3Ljw7F0exeaKl+ZNfANlFPABohcFa60bi+Gn4F+lKrLscEN8TcChKvy9KdB8KaZpexibJwyfbZ1kG6wFeit6VlNswmNe2i9oBI42V/sNw7ecdEL7eN/AIZd9E8UDaFgQXi/I1YAIcu/xtfdXemm/IAFbdn5Sh3I68J5tMLmYbzkvaIyF7gPiwKE9tPyPXtrOW8ARdcuPQeR3gIrIJevmhTd7GVCx6PAzE9ih6BVVddYwr+z68+1gp4zbEAKKLEnMD61xG8DgGY/26N9zxwRVzkT0FNJVGQPYqOh6RKxdAR5xm4a8fGP4/WDUuhm4zlCJAJe6jR3yHIHVkeWnqHAmsN1v+CJunVdH4pP79Wx9W9F7Eb0IGEh63ewHhggyUZQHA0ler54dP8etPzo6FgI7UZ104hzrCNf2yFNAEWMugAoLX5p34WddtamOWs8Go9bT3dkJhSxfTXTFEhFdCnxXoFGF6aIM2bazdwDoj2EMFWUGyivAQDH04WDUmre3fK47/4mbJ30qylKgzJdikpPvvDccP8JVs1YeBamzgKRf/LfkaidgI3S7/tx0NItApgDbVOWqRH3o/qwmu4BtwOuY5h3BtqHTULkVqK2JxH2N9eQc/Xv1b8gyVKeJMglY0F2cTnCcB1ZH4r8XUVOQpY2x0CWO+kStZwXsRCx8eudnwag1Cbgf2Gar8eN19eMbndjKLBcfA8
                oFuaAxFlrVnZ+cmKYRTA77EDjEsDm8YUH4Iyf+c+H4ERbRCQAp5R7HfbJGw+AZj/YA6jP2rnQqHkDDgvBTiP4GEEVvCk5bVJbLT7ek89W1gKhPxzj1nwtHj/DJkZXf6yA1FNjer+fBTzk1nj0i+le0hjX9ln2pcf6EZfmFConAa4uDbcOuRDlBK/tfAFhd+XHAM8B4tQkCecfxZRyNwJTYYwFUWOMmabZFzwZQ9G8FGTBNG2UJgIFxbqFxKJquTxpybKE2OnH4CNtVAII+58aZICMA/IY6HsXZGBhPACg6ovBA5E3SRgYWbOOLeJygMgRAleZcTbLThxzpxCEAbe27388/1DTlWvZu5vKwAvwD0E57Zwp2UKFxdOJIQBUGAxgqb+Rqkz2R55jY/QC9UoGCCw92+67OKeQr87dD/wCUb2ltzVwedMI19/UqNJY9guiGfgApH1tyNcieyHNM7B8BA1MB+/tAzh+jO9rLODJz+WEB/tP3Fk9vr45aDQLD/f5AHTC3kFjAeRrTB6Bfjx0thTrK0AjQYcsZBVsQGZ25cJwCdYnavwJUlFnB2csHFWrGqYA+gJYPdrvab1VhZfpKphZWYldRdCqAYq90E0tT/cQXgHuBgBhGzpXV3nAqYAtAea/KPvkYz57IZcvWB4FNAsODkQeuzMcWQE0kfhkQBDbJ1s8fyuXHKX5fRy2wXeHcmmj8rHz7g1MBJS1gm+HLS8DsiTyxeHq7GDoDUERvq6lbcbZTW1WR+I9UWAioClclFk9vz+XHKZnTEX8AUPTW40yrfC9d9sDRY1QTsZ5T4VS1ZVTTglC3v7STdWkwsuJaRK4HOhBd0Cew8/o15pS2rtoeZ1rlgTadicr1QDnItYlY6AY3/r8Sy7RFZVRWrgeGCRJtjIXqnfTrxNEItEVeS7e2h+ylqaPRkKif8EdErgFApa4l2asZ0+wiFpVAktdRmZ+JdVZ34jn1/5VYFk9vN0R/DaDo3KrIssOd9s342zvB2vgsVG8S5PbGWOjqfBx0R3WtFRSlAZCjN+Hf41BQunKSAtRWY0Q+xYd8qYlaKxUuzKfaBI7nQHkGQNGxBcbXJZkDQHsk1cGopcGopRnxALSY4gEozAR2Kjq5KrpilNN+jgQ8eqPdCGwFhqYLqwceiVj4XRFdAIiB3BoKWT4n/RwJGI+HU4I8AiD+jsku4nREIhaWRCwsiYpmR1/CK8p2SQx4G6h662i53EkfxwVVW/RuAEGmdD3h7/88f0s4KaLXACh6lZM+joVoCjSvATYCg2vahl5QWIhd8jHAmz+Q07JvVO84bmTm0lXZPR9s5OXM5WHdNszgfF/YNG1q4zFU/6oqczHNhzw5ziF6Lyp1YujaYNTKupnORgRxvI1QKINnPNqjf0XrVFXq0q7lcSf98tpYbwvofYEkc4CTatqGXtpIujrshj6BAde1JD9JgVwBHJx1+1NE/tI7cPD1bv3kIjhtUZkeVDlFtHWO8kWlZ43tS+eGeyPvBX2wNh5C1QI+8Rn+Ybn2h/NleDR+mo0+86WY1DYYuW5e+Hkv7Gcz2lzt3962+WJRroNMZVrYICrXNcbG/8vp0eC8XwaJ+aG4wJPAgJSduiPf/rloiIWeU+EK4C1gk6LTiyUeQEty86ui3E1avGZEwolAc1V6u9T5ueqCzgdWzVp5lOFPbQD6ApMTsfA/CrGzLwlGLQVQlYuber66rND5vOADltWR+BQRXQJs9avvhBfrx71XqK19QaeAiVjY1dHfgvO5pvrQ3QIPApUpSd3vNHM/0HCVEO9O+a8EPlIY9dZAaj2Kab/ClYAbbrrwE0R+DtgqmMOj8T2S4QMd10uyxPzQf0W5GfDb6H1B8+GeHsS13+DJmjbZk7nAy8AgkslrvbC5v+CJgK+a4d2G2FOBFHDN8NnWSV7Y3R/wrKrSMH9
                iA+gdgD9lcLtXdovByMiqzs0xt/vc3gkIENDAHOAjgdOCtfGfeGnbS3brrs6NdNe5q6cCPlt/Xosg6U1qTdfVvonYoucCKLrWrS3PC6OKLgLagLH57nBB4ZvkTjnZXNoXkRkAoqxwa89zAROx8DaFRwCfgf/8fPsXuknuDJWOZPldwCECTybqJ6x2azHvf7RxgoE8rug4EU4F8qrYFHBc1xEnm0v7diTjdwHjgc9EfNO8sFsUAdVONWAYqKqrdCbfUwbZHGdavSvajB+qnTqnIykzSB/w/EwMPa9h3rhNbmLrpCgCtmv5e2V0gDDAjZ3sxzlb0MzfuZePSVBsEOm096SIb5pX4kGRBCzbvnkrlZUArv61NHvkdXkKtXtagXcVfVqUFY0ezHlfG52nCw4UP7k4IPd3v05KArqkJKBLSgK6pCRgiRIlSpQoUaLEt5P/A20YbABUfLE5AAAAAElFTkSuQmCC"
                style={{width:"4%",marginRight:"1%",marginBottom:"0.5%"}}/>
                Idea/Approach Details :
            </h1>
            <hr style={{color: "grey",backgroundColor: "grey",height: 3}}/>
            <h4 className="m-5" style={{color: "#696969",fontFamily:"Raleway",fontSize:"150%"}}>
            <strong>Team Elite will be doing the following tasks:-</strong><br></br>
            </h4>
            <h5 className="m-5" style={{color: "#696969",fontFamily:"Raleway",fontSize:"150%"}}>
            <strong>
            • Designing IOT based automated inventory management system with load cell and NodeMCU for finding out the approximate number of onions on a shelf.<br></br>
            • Using sensors like MQ137, LM35, DHT11 sensor for measuring Ammonia gas, Temperature and humidity respectively inside the warehouse.<br></br>
            • Creating a web server using NODEMCU where all the sensor data will be updated in real time with the help of AJAX .<br></br>
            • MATLAB will be used to perform statistical and visual analysis of the processed data eg the average humidity in the past 1 month.<br></br>
            • Creating a Notification system to inform the user through SMS, alarm and display if onion starts to rot.<br></br>
            • For maintaining the temperature inside the container, thermoelectric cooling system will be used. The exhaust fan attached to the cooling module blows cooling air from the thermoelectric module inside the container to bring down the temperature exponentially.<br></br>
            </strong>
            </h5>
            <div style={{marginLeft:"35%"}}><IdeaImage/></div>
        </div>
        )
    }
}
export default Idea;