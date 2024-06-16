import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Temporizador } from "./Temporizador";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Temporizador/>
		</div>
	);
};


export default Home;
