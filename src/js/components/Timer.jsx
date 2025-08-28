import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

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
        <p>
           seconds 
        </p>
    )

}
Timer.propTypes = {
    inicio: PropTypes.string,
    direccion: PropTypes.string,
}


export default Timer;