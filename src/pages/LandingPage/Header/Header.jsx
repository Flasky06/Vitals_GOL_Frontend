import React from "react";
import HeaderLinkElement from "./HeaderLinkElement";

const Header = () => {
	const handleLogout = async () => {
		localStorage.removeItem("accessToken");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("user");
		window.location.reload();
	};
	return (
		<header className='header sticky flex justify-between items-center px-4'>
			<h1 className='logo'>
				<span>V</span>itals
			</h1>
			<nav className='flex items-center'>
				<ol className='flex'>
					{/* <HeaderLinkElement label="Home" /> */}
					<HeaderLinkElement label='About' />
					{/* <HeaderLinkElement label="Pages" /> */}
					<HeaderLinkElement label='Features' />
					<HeaderLinkElement label='Subscribe' />
					<HeaderLinkElement label='Team' />
					{localStorage.getItem("accessToken") ? (
						<li>
							<button
								className='admin-header-link ml-2 mt-2 font-bold block p-3 capitalize'
								onClick={handleLogout}
							>
								logout
							</button>
						</li>
					) : (
						<HeaderLinkElement label='Login' to='/hospital/login' />
					)}
				</ol>
			</nav>
			<a
				href=''
				className='header__link__cta-1 block p-3 font-bold capitalize rounded-full'
			>
				doctor's appointment
			</a>
		</header>
	);
};
export default Header;
