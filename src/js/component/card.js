import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

const Card = (props) => {
    const urlImg = `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`;
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const isFavorite = store.favorites.some(fav => fav.uid === props.uid);

    useEffect(() => {
        actions.getDetails(props.uid);
    }, [props.uid]);

    const characterDetails = store.details[props.uid]; 
    return (
        <div className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
            <img src={urlImg} className="card-img-top" alt={props.uid} />
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text text-start"><strong>Gender: </strong>{characterDetails?.gender}</p>
                <p className="card-text text-start"><strong>Hair Color: </strong>{characterDetails?.hair_color}</p>
                <p className="card-text text-start"><strong>Eye Color: </strong>{characterDetails?.eye_color}</p>
            </div>
            <div className="d-flex justify-content-between mx-2">
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => navigate("/detailedView/" + props.uid)}
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
    );
};

export default Card;