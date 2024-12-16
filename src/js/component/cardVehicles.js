import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const CardVehicles = (props) => {
const urlImg = `https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg` 
const { store, actions } = useContext(Context);
const navigate = useNavigate();
const vehicleDetails = store.vehicleDetails[props.uid];
const isFavorite = store.favorites.some(fav => fav.uid === props.uid);

useEffect(() => {
    actions.getVehicleDetails(props.uid); 
}, [props.uid]);

    return (
        <div className="card" style={{width: "18rem", flex: "none", margin: "10px"}}>
            <img src={urlImg} className="card-img-top" alt={props.uid} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-start"><strong>Name: </strong>{vehicleDetails?.name}</p>
                <p className="card-text text-start"><strong>Class: </strong>{vehicleDetails?.vehicle_class}</p>
            </div>
            <div className="d-flex justify-content-between mx-2">
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => navigate("/vehicleView/" + props.uid)}
                >
                    Learn More
                </button>
                <button
                    type="button"
                    className="btn btn-outline-warning"
                    onClick={() => {
                        actions.addFavorite(props);
                    }
                    }
                >
                    <i className={`fa-heart ${isFavorite ? "fa-solid" : "fa-regular"}`}></i>
                </button>
            </div>
        </div>
    )
}

export default CardVehicles;