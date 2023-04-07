import React from "react";
import { Link } from "react-router-dom";

const AdminHeaderDashboard = () => {
    return(
        <>
            <div className="admin-dashboard-header p-2 flex justify-around items-center">
                <h2 className="uppercase font-bold">Logged in as Dennis</h2>
                <nav>
                    <ol className="flex">
                        <li><Link to="/hospital/patient-enrolment" className="admin-header-link mr-2 font-bold block p-3 capitalize">add new patient</Link></li>
                        <li><Link to="/hospital/patient-files/all" className="admin-header-link font-bold block p-3 capitalize">all patient files</Link></li>
                    </ol>
                </nav>
            </div>
        </>
    )
}
export default AdminHeaderDashboard;