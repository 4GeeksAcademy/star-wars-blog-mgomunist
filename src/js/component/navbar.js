import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<nav className="navbar fixed-top bg-body-tertiary">
				<div className="container-fluid">
					<Link to="/">
						<img style={{ height: "50px", width: "auto" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" />
					</Link>
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favorites.map((item) => (
								<li key={item.uid}>
									<div className="d-flex justify-content-between align-items-center">
										<a className="dropdown-item" href="#">{item.name}</a>
										<button
											type="button"
											className="btn"
											onClick={() => actions.addFavorite(item)}
										>
											<i className="fa-solid fa-trash"></i>
										</button>									
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
