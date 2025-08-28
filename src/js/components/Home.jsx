import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Timer from "./Timer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<input placeholder="Tiempo en segundos" type="number"></input><br/>
			<div className="mt-3">
				<div id="1" className="btn btn-success">
					boton verde
				</div>
				<div id="2" className="btn btn-primary mx-3">
					boton verde
				</div>
				<div id="3" className="btn btn-warning">
					boton verde
				</div>
			</div>
			<p>
				<strong><Timer inicio="0000" direccion="true"/></strong>
			</p>
		</div>
	);
};

export default Home;