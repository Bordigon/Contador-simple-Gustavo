import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Timer from "./Timer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">holaaaa</h1>
			<p>
				<img src={rigoImage} /><br/>
				<strong>Funcionamiento:</strong><br/> El botón <strong className="text-success">verde</strong> es para pausar y continuar <br/>
				El botón <strong className="text-primary">azul</strong> es para contar para arriba desde un número que hayas elegido<br/>
				Y el botón <strong className="text-danger">rojo</strong> es para contar en cuenta regresiva, también desde el número puesto<br/>
				El contador siempre inicializa por defecto en 0<br/>
				<strong>Problemas:</strong><br/>
				Si has puesto un número en el input y has dado a los botones <strong className="text-danger">rojo</strong> o <strong className="text-primary">azul </strong> 
				tienes que cambiar el número del input para que vuelvan a funcionar
				<br/>Al pausar el contador, al continuar, continuará en cuenta progresiva<br/>
				Esto pasa por problemas en el hook de useState, que solo se inicializa una vez y necesita de un useEffect para cambiar, pero el useEffect solo se activa con un cambio en el input
			</p>
			<input id="input" placeholder="Tiempo en segundos" type="number"></input><br/>
			<div className="mt-3">
				<div id="1" className="btn btn-success">
					⏸/▶️
				</div>
				<div id="2" className="btn btn-primary mx-3">
					cuenta progresiva
				</div>
				<div id="3" className="btn btn-danger">
					cuenta regresiva
				</div>
			</div>
			<p id="timerComponente">
			</p>
		</div>
	);
};

export default Home;