import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";


const Footer = () => {
    return(
        <footer className="flex p-6 items-center justify-between mt-10">
            <div>
                <p className="text-2xl font-bold capitalize">&copy; team vitals 2023 game of learners hackathon</p>
            </div>
            <div>
                <h2 className="text-2l font-bold capitalize">a great thanks to all our sponsors and partners in this hackathon</h2>
                <div className="flex mt-3">
                    <Link className="block font-bold mb-2 mr-3">Microsoft</Link>
                    <Link className="block font-bold mb-2 mr-3">Amref</Link>
                    <Link className="block font-bold mb-2">PSI</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;