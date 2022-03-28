import 'antd/dist/antd.css';
import React from "react";
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import PokemonDashboard from "./components/pokemon-dashboard/PokemonDashboard";

const App = () => {

    return (
        <div className="app">
            <Navbar />
            <div className="container">
                <PokemonDashboard />
            </div>
        </div>);
};

export default App;
