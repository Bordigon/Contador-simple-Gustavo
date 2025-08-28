import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import reloj from "../../img/reloj.jpg";

const Timer = (props) => {
    
    //el contador inicia en 0
    const [seconds, setSeconds] = useState(parseInt(props.inicio));

    //Para aumentar el contador
    const increaseTime = () =>{
        if(props.direccion)
        setSeconds(seconds+1);
        else
        setSeconds(seconds-1);
    };
    useEffect(() => {
        const timer = setInterval(increaseTime, 1000);
        return() => clearInterval(timer);
    });

    return(
        <div className="reloj d-flex align-items-center justify-content-center">
          <img id="reloj" src={reloj}/> {seconds} 
        </div>
    )

}
Timer.propTypes = {
    inicio: PropTypes.string,
    direccion: PropTypes.string,
}


export default Timer;