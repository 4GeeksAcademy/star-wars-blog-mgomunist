import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Card from "../component/card.js";
import CardPlanets from "../component/cardPlanets.js";
import CardVehicles from "../component/cardVehicles.js";

export const Home = () => {
	const { actions, store } = useContext(Context);

	useEffect(() => {
		actions.getPeople();
		actions.getPlanets();
		actions.getVehicles();
	}, []);

	return (
		<div style={{marginTop:"62px"}} className="text-left">
			<h2>Characters</h2>
			<div className="d-flex flex-row overflow-scroll">
				{store.people.map((item, index) => (
						<Card key={index} name={item.name} uid={item.uid} />
				))}
			</div>

			<h2>Planets</h2>
			<div className="d-flex flex-row overflow-scroll">
	
				{store.planets.map((item, index) => (
						<CardPlanets key={index} name={item.name} uid={item.uid} />
				))}
			</div>

			<h2>Vehicles</h2>
			<div className="d-flex flex-row overflow-scroll">
	
				{store.vehicles.map((item, index) => (
						<CardVehicles key={index} name={item.name} uid={item.uid} />
				))}
			</div>
		</div>
	);
};
