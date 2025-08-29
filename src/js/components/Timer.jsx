import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import reloj from "../../img/reloj.jpg";

const Timer = (props) => {

    const inicio = parseInt(props.inicio)
    //el contador inicia en 0

    const [seconds, setSeconds] = useState(inicio);

    console.log(seconds)

    //vigila si el props.inicio cambia, ya que seconds SOLO se inicializa una vez con el useState
    useEffect(()=> {
        setSeconds(inicio)
    },[props.inicio])

    //Para aumentar el contador
    useEffect(() => {
    const increaseTime = () =>{
        if(props.direccion==="false")
        setSeconds(seconds-1);
        else 
        setSeconds(seconds+1);
    };

        const timer = setInterval(increaseTime, 1000);
        return() => clearInterval(timer);
    });

    return(
        <div className="reloj d-flex align-items-center justify-content-center">
          <img id="reloj" src={reloj}/><strong id="seconds">{seconds}</strong> 
        </div>
    )

}
Timer.propTypes = {
    inicio: PropTypes.string,
    direccion: PropTypes.string,
}


export default Timer;