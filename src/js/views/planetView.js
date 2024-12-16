import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetView = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [planetDetails, setPlanetDetails] = useState(null);
    const urlImg = uid == 1 ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png" : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;

    useEffect(() => {
        setPlanetDetails(store.planetDetails[uid]);
    }, [uid, store.planetDetails]);

    return (
    <div style={{marginTop:"65px"}} className="container">
        {planetDetails ? (
        <>
            <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImg} className="img-fluid rounded-start" alt={planetDetails ? planetDetails.name : "Character Image"} />
                    </div>
                    <div className="col-md-8">
                        <h2 className="card-title mx-2">{planetDetails.name}</h2>                       
                        <p className="card-text mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida at massa ut vestibulum. Ut sed sollicitudin leo. Nullam magna sem, gravida quis mi quis, euismod accumsan ligula. Proin mattis molestie metus, nec interdum dui accumsan quis. Proin massa mi, posuere quis imperdiet ac, scelerisque vitae lacus. Aenean in semper orci. Ut nec ante erat. Praesent at dapibus nibh.</p>
                    </div>
                    <div className="card-body"> 
                    <hr style={{"color":"#dc3b4c"}} />            
                        <div className="row">
                            <table className="table-responsive">
                            <thead>
                                <tr>
                                <th scope="col">Name:</th>
                                <th scope="col">Climate:</th>
                                <th scope="col">Population:</th>
                                <th scope="col">Orbital Period:</th>
                                <th scope="col">Rotation Period:</th>
                                <th scope="col">Diameter:</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                <td>{planetDetails.name}</td>
                                <td>{planetDetails.climate}</td>
                                <td>{planetDetails.population}</td>
                                <td>{planetDetails.orbital_period}</td>
                                <td>{planetDetails.rotation_period}</td>
                                <td>{planetDetails.diameter}</td>
                                </tr>                                     
                            </tbody>
                            </table>
                        </div>                                
                    </div>                        
                </div>
            </div>
        </>
        ) : (
            <p>Loading...</p>
        )}
    </div>
);

};

export default PlanetView;