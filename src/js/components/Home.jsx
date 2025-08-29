import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Timer from "./Timer.jsx"

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            

			<h1 className="text-center mt-5">holaaaa</h1>
				<img src={rigoImage} /><br/>
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