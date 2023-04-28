import React from "react";
import HeaderLinkElement from "./HeaderLinkElement";
import { Link } from "react-router-dom";

const Header = () => {
	const handleLogout = async () => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("user");
		window.location.reload();
	};
	return (
		<header className="header sticky flex justify-between items-center px-4">
			<h1 className="logo">
				<span>V</span>itals
			</h1>
			<nav className="flex items-center">
				<ol className="flex">
					{/* <HeaderLinkElement label="Home" /> */}
					<HeaderLinkElement label="About" href="#about" />

					<HeaderLinkElement label="Features" href="#features" />
					<HeaderLinkElement label="Subscribe" href="#subscribe" />
					<HeaderLinkElement label="Team" href="#team" />
					{localStorage.getItem("accessToken") ? (
						<li>
							<button
								className="admin-header-link ml-2 mt-2 font-bold block p-3 capitalize"
								onClick={handleLogout}
							>
								logout
							</button>
						</li>
					) : (
						<Link
							to="/hospital/login"
							// onClick={handleClick}
							className="header__link uppercase block py-5 px-6 font-bold cursor-pointer"
						>
							Login
						</Link>
					)}
				</ol>
			</nav>
			<a
				href=""
				className="header__link__cta-1 block p-3 font-bold capitalize rounded-full"
			>
				doctor's appointment
			</a>
		</header>
	);
};
export default Header;
