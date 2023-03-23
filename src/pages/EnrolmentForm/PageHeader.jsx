// import logo from "./logo.png";

function PageHeader() {
	return (
		<header className="flex justify-between items-center bg-white py-8 px-8 shadow-sm">
			<div className="flex items-center">
				<h1 className="text-lg font-bold text-gray-800">
					Patient Enrolment Form
				</h1>
			</div>
			<div className="flex items-center">
				{/* <img src={logo} alt="Logo" className="h-8 w-8 mr-2" /> */}
				<span className="text-sm font-medium text-gray-700">
					Your Clinic Name
				</span>
			</div>
		</header>
	);
}

export default PageHeader;
