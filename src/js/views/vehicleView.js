import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const VehicleView = () => {
    const { store } = useContext(Context);
    const { uid } = useParams();
    const [vehicleDetails, setVehicleDetails] = useState(null);
    const urlImg = `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg` 

    useEffect(() => {
        setVehicleDetails(store.vehicleDetails[uid]);
    }, [uid, store.vehicleDetails]);

    return (
        <div style={{marginTop:"65px"}} className="container">
        {vehicleDetails ? (
        <>
            <div className="card mb-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={urlImg} className="img-fluid rounded-start" alt={vehicleDetails ? vehicleDetails.name : "Character Image"} />
                    </div>
                    <div className="col-md-8">
                        <h2 className="card-title mx-2">{vehicleDetails.name}</h2>
                        <p className="card-text mx-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida at massa ut vestibulum. Ut sed sollicitudin leo. Nullam magna sem, gravida quis mi quis, euismod accumsan ligula. Proin mattis molestie metus, nec interdum dui accumsan quis. Proin massa mi, posuere quis imperdiet ac, scelerisque vitae lacus. Aenean in semper orci. Ut nec ante erat. Praesent at dapibus nibh.</p>
                    </div>
                    <div className="card-body">  
                    <hr style={{"color":"#dc3b4c"}} />           
                        <div className="row">
                            <table className="table-responsive">
                            <thead>
                                <tr>
                                <th scope="col">Name:</th>
                                <th scope="col">Class:</th>
                                <th scope="col">Manufacturer:</th>
                                <th scope="col">Passengers:</th>
                                <th scope="col">Max atmos speed:</th>
                                <th scope="col">Cargo capacity:</th>                                
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                <td>{vehicleDetails.name}</td>
                                <td>{vehicleDetails.vehicle_class}</td>
                                <td>{vehicleDetails.manufacturer}</td>
                                <td>{vehicleDetails.passengers}</td>
                                <td>{vehicleDetails.max_atmosphering_speed}</td>
                                <td>{vehicleDetails.cargo_capacity}</td>                                
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
}

export default VehicleView