import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetailedView = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [details, setDetails] = useState(null);
    const urlImg = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;

    useEffect(() => {
        setDetails(store.details[uid]);
    }, [uid, store.details]);

    return (
    <div style={{marginTop:"65px"}} className="container">
        {details ? (
        <>
            <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImg} className="img-fluid rounded-start" alt={details ? details.name : "Character Image"} />
                    </div>
                    <div className="col-md-8">
                        <h2 className="card-title mx-2">{details.name}</h2>
                        <p className="card-text mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida at massa ut vestibulum. Ut sed sollicitudin leo. Nullam magna sem, gravida quis mi quis, euismod accumsan ligula. Proin mattis molestie metus, nec interdum dui accumsan quis. Proin massa mi, posuere quis imperdiet ac, scelerisque vitae lacus. Aenean in semper orci. Ut nec ante erat. Praesent at dapibus nibh.</p>
                    </div>
                    
                    <div className="card-body"> 
                    <hr style={{"color":"#dc3b4c"}} />         
                        <div className="row">
                            <table className="table-responsive">
                            <thead>
                                <tr>
                                <th scope="col">Gender:</th>
                                <th scope="col">Hair Color:</th>
                                <th scope="col">Eye Color:</th>
                                <th scope="col">Height:</th>
                                <th scope="col">Mass:</th>
                                <th scope="col">Birth Year:</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                <td>{details.gender}</td>
                                <td>{details.hair_color}</td>
                                <td>{details.eye_color}</td>
                                <td>{details.height}</td>
                                <td>{details.mass}</td>
                                <td>{details.birth_year}</td>
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

export default DetailedView;