import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";


const CardPlanets = (props) => {
const urlImg = props.uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" : `https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg` 
const { store, actions } = useContext(Context);
const navigate = useNavigate();
const planetDetails = store.planetDetails[props.uid];
const isFavorite = store.favorites.some(fav => fav.uid === props.uid);

useEffect(() => {
    actions.getPlanetDetails(props.uid); 
}, [props.uid]);

    return (
        <div className="card" style={{width: "18rem", flex: "none", margin: "10px"}}>
            <img src={urlImg} className="card-img-top" alt={props.uid} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-start"><strong>Population: </strong>{planetDetails?.population}</p>
                <p className="card-text text-start"><strong>Terrain: </strong>{planetDetails?.terrain}</p>
            </div>
            <div className="d-flex justify-content-between mx-2">
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => navigate("/planetView/" + props.uid)}
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

export default CardPlanets;