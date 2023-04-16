import React from "react";
import "./styles.css";
import Header from "../LandingPage/Header/Header";
import AdminHeaderDashboard from "./AdminDashboardHeader/AdminDashboardHeader";

const AdminDashboard = () => {
    return(
        <>
            <Header />
            <AdminHeaderDashboard />
        </>
    )
}

export default AdminDashboard;