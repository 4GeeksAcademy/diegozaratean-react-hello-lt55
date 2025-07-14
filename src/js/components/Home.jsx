import React from "react";
import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Product from "./Product";
import Card from "./Card";


const Home = () => {
	return (
		<>

			<h1 className="bgred">Header</h1>
			<Nav/>
			<Card profesion='cantante' pareja='maria  20' nombre='charlie shit' alive={true} fondo='#ccc'    >
				<p>hola</p>
				<button>boton</button>
			</Card>

			{/* <Card profesion='guerrero' pareja='milk' nombre='goku' fondo='orange'   />
			<Card profesion='ladrona' pareja='rio' nombre='tokyo'   fondo='red' />
			<Card profesion='superheroe' pareja='peper pots' nombre='tony stark' fondo='yellow'   /> */}
			


			<Jumbotron />

			<div className="text-center">
				<h1 className="text-center mt-5">Hola Bienvenidos a React 123! 🧑🏻‍🔬</h1>
			</div>
			<Product/>
			<h1>Footer</h1>

		</>
	);
};

export default Home;