import React from "react";
import Nav from "./Nav";

const Home = () => {
	return (
		<>

			<h1 className="bgred">Header</h1>
			<Nav/>
			<div className="text-center">
				<h1 className="text-center mt-5">Hola Bienvenidos a React 123! 🧑🏻‍🔬</h1>
			</div>
			<h1>Footer</h1>

		</>
	);
};

export default Home;