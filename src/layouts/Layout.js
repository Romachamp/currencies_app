import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home/Home";
import Conversation from "../pages/Conversation/Conversation";
import Inflation from "../pages/inflation/Inflation";

function Layout(props) {
    return (
        <HashRouter>
            <div className="wrapper">
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/conversation" element={<Conversation/>}/>
                    <Route path="/inflation" element={<Inflation/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default Layout;