import { useId } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [],
			planets: [],
			vehicles: [],
			details: [],
			planetDetails: [],
			vehicleDetails: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			getPeople: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/people");
					const data = await resp.json();
					console.log(data);
					setStore({ people: data.results });
				} catch (error) {
					console.error("Error importando los personajes:", error);
				}
			},
			getPlanets: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/planets");
					const data = await resp.json();
					console.log(data);
					setStore({ planets: data.results });
				} catch (error) {
					console.error("Error importando planetas:", error);
				}
			},
			getVehicles: async () => {
				try {
					const resp = await fetch("https://www.swapi.tech/api/vehicles/");
					const data = await resp.json();	
					setStore({ vehicles: data.results });
				} catch (error) {
					console.error("Error importando vehículos:", error);
				}
			},
			getDetails: async (uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
					const data = await resp.json();			
					if (data.result) { 
						const characterDetails = data.result.properties;
						const currentDetails = getStore().details;
						setStore({ details: { ...currentDetails, [uid]: characterDetails } });
					} else {
						console.error("No se encontraron detalles para el personaje.");
					}
				} catch (error) {
					console.error("Error importando los detalles del personaje:", error);
				}
			},
			getPlanetDetails: async (uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
					const data = await resp.json();			
					if (data.result) { 
						const planetDetails = data.result.properties;
						const currentPlanetDetails = getStore().planetDetails;
						setStore({ planetDetails: { ...currentPlanetDetails, [uid]: planetDetails } });
					} else {
						console.error("No se encontraron detalles para el planeta.");
					}
				} catch (error) {
					console.error("Error importando los detalles del planeta:", error);
				}
			},	
			getVehicleDetails: async (uid) => {
				try {
					const resp = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`);
					const data = await resp.json();			
					if (data.result) { 
						const vehicleDetails = data.result.properties;
						const currentVehicleDetails = getStore().vehicleDetails;
						setStore({ vehicleDetails: { ...currentVehicleDetails, [uid]: vehicleDetails } });
					} else {
						console.error("No se encontraron detalles para el vehículo.");
					}
				} catch (error) {
					console.error("Error importando los detalles del vehículo:", error);
				}
			},
			addFavorite: (fav) => { //no usar obj por defecto
				const store = getStore();
				const result = store.favorites.some((item) => item.name == fav.name) //some() devuelve un booleano
				if (result){
					const updatedFavorites = store.favorites.filter((item) => item.name !== fav.name); 
					setStore({
						favorites: updatedFavorites
					})
				} else {
					setStore({
						favorites: [...store.favorites, fav]
					})
				}
			},			
		}
	};
};

export default getState;
