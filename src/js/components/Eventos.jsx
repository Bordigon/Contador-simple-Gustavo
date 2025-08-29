import React from 'react'
import Timer from "./Timer.jsx"
import ReactDOM from 'react-dom/client'
import reloj from "./../../img/reloj.jpg"

window.onload = () =>{
    let contador=1;
    let input = document.getElementById("input")
    const root = ReactDOM.createRoot(document.getElementById("timerComponente"));
    const button = document.getElementsByClassName("btn")
    root.render(<Timer id="timer" inicio="0" direccion="true"/>);
        function hola (event) {
        console.log("hola")
        if(event.target.id==="2")
            root.render(<Timer id="timer" inicio={parseInt(input.value)} direccion='true'/>)
        else if(event.target.id==="3")
           root.render(<Timer id="timer" inicio={parseInt(input.value)} direccion='false'/>)
        else{
            const seconds = (document.getElementById("seconds"))
            console.log(seconds.innerHTML)
            root.render("")
            if(contador%2==1){
            root.render(  
                    <div className="reloj d-flex align-items-center justify-content-center">
                      <img id="reloj" src={reloj}/><strong id="seconds">{seconds.innerHTML}</strong> 
                    </div>)
                    contador++;
            }
            else{
                root.render(<Timer id="timer" inicio={parseInt(seconds.innerHTML) +1}/>)
                contador++;
            }
        }
    };
    for(let t=0; t<button.length; t++)
        button[t].addEventListener("click", hola)
}