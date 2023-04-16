import logo from "./../../assets/logo.png";

function PageHeader() {
  return (
    <header className="flex justify-center items-center bg-white py-8 px-8 shadow-sm">
      <div className="flex items-center mr-5">
        <h1 className="text-lg font-bold  ">Patient Enrolment Form</h1>
      </div>
      <div className="flex items-center bg-white object-cover	">
        <img src={logo} alt="Logo" className="h-28 w-28 " />
        {/* <span className="text-sm font-medium text-gray-700">
					Your Clinic Name
				</span> */}
      </div>
    </header>
  );
}

export default PageHeader;
